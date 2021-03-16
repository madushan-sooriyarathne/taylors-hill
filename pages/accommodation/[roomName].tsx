import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { ParsedUrlQuery } from "querystring";

import { getMultipleEntries, serializeAssetUrls } from "../../utils/contentful";

import Page from "../../components/layout/page/Page";
import CoverImage from "../../components/layout/cover-image/CoverImage";
import RoomPage from "../../components/layout/rooms/room-page/RoomPage";

interface Props {
  primaryRoom: Room;
  otherRooms: Room[];
}

const Room: React.FC<Props> = ({
  primaryRoom,
  otherRooms,
}: Props): JSX.Element => {
  return (
    <Page>
      <CoverImage
        image={primaryRoom.image}
        title={primaryRoom.title}
        subTitle={primaryRoom.type}
      />
      <RoomPage primaryRoom={primaryRoom} otherRooms={otherRooms} />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> => {
  // Fetch the data from contentful
  const rooms: Room[] = await getMultipleEntries<ContentfulRoomFields>(
    "room"
  ).then((results: ContentfulRoomFields[]) =>
    results.map((item) =>
      serializeAssetUrls<ContentfulRoomFields, Room>(item, "image", "images")
    )
  );

  // Split the result
  const primaryRoom: Room = rooms.filter(
    (room) => room.id === (params as ParsedUrlQuery).roomName
  )[0];
  const otherRooms: Room[] = rooms.filter(
    (room) => room.id !== (params as ParsedUrlQuery).roomName
  );

  return {
    props: {
      primaryRoom,
      otherRooms: otherRooms,
    },
  };
};

const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<{ roomName: string }>
> => {
  // fetch the data from contentful
  const rooms: ContentfulRoomFields[] = await getMultipleEntries<ContentfulRoomFields>(
    "room"
  );

  const paths = rooms.map((room) => ({ params: { roomName: room.id } }));

  return { paths, fallback: false };
};

export { getStaticProps, getStaticPaths };
export default Room;
