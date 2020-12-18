import { rooms } from "../../site-data";
import Page from "../../components/layout/page/Page";
import CoverImage from "../../components/layout/cover-image/CoverImage";
import RoomPage from "../../components/layout/room-page/RoomPage";

const Room = ({ primaryRoom, otherRooms }) => {
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

const getStaticProps = async ({ params }) => {
  const primaryRoom = rooms.filter((room) => room.id === params.roomName)[0];
  const otherRooms = rooms.filter((room) => room.id !== params.roomName);

  return {
    props: {
      primaryRoom,
      otherRooms: otherRooms,
    },
  };
};

const getStaticPaths = async () => {
  const paths = rooms.map((room) => ({ params: { roomName: room.id } }));

  return { paths, fallback: false };
};

export { getStaticProps, getStaticPaths };
export default Room;
