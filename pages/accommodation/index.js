import Page from "../../components/layout/page/Page";
import CoverImage from "../../components/layout/cover-image/CoverImage";
import RoomGroup from "../../components/layout/rooms-group/RoomsGroup";

const Accommodation = () => {
  return (
    <Page>
      <CoverImage
        image="/static/img/accommodation-cover.webp"
        title="Accommodation"
        subTitle="Best in class rooms with a touch of british architecture"
      />
      <RoomGroup />
    </Page>
  );
};

export default Accommodation;
