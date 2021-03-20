import { GetStaticProps, GetStaticPropsResult } from "next";

import { getMultipleEntries, serializeAssetUrls } from "../../utils/contentful";

import Page from "../../components/layout/page/Page";
import CoverImage from "../../components/layout/cover-image/CoverImage";
import RoomGroup from "../../components/layout/rooms/rooms-group/RoomsGroup";

interface Props {
  rooms: Room[];
}

const Accommodation: React.FC<Props> = ({ rooms }: Props): JSX.Element => {
  return (
    <Page title="Accommodations">
      <CoverImage
        image="/static/img/accommodation-cover.webp"
        title="Accommodation"
        subTitle="Best in class rooms with a touch of british architecture"
      />
      <RoomGroup rooms={rooms} />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  const rooms: Room[] = await getMultipleEntries<ContentfulRoomFields>(
    "room"
  ).then((results: ContentfulRoomFields[]) =>
    results.map((item: ContentfulRoomFields) =>
      serializeAssetUrls<ContentfulRoomFields, Room>(item, "image", "images")
    )
  );

  return {
    props: {
      rooms: rooms,
    },
  };
};

export { getStaticProps };
export default Accommodation;
