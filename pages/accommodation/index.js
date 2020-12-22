import Page from "../../components/layout/page/Page";
import CoverImage from "../../components/layout/cover-image/CoverImage";
import RoomGroup from "../../components/layout/rooms/rooms-group/RoomsGroup";

import { rooms } from "../../site-data";

const Accommodation = ({ rooms }) => {
  return (
    <Page>
      <CoverImage
        image="/static/img/accommodation-cover.webp"
        title="Accommodation"
        subTitle="Best in class rooms with a touch of british architecture"
      />
      <RoomGroup rooms={rooms} />
    </Page>
  );
};

const getStaticProps = async () => {
  return {
    props: {
      rooms: rooms,
    },
  };
};

export { getStaticProps };
export default Accommodation;
