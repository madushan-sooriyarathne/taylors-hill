import Page from "../../components/layout/page/Page";
import CoverImage from "../../components/layout/cover-image/CoverImage";
import RoomGroup from "../../components/layout/rooms/rooms-group/RoomsGroup";

import { rooms } from "../../site-data";
import { GetStaticProps, GetStaticPropsResult } from "next";

interface Props {
  rooms: Room[];
}

const Accommodation: React.FC<Props> = ({ rooms }: Props): JSX.Element => {
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

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  return {
    props: {
      rooms: rooms,
    },
  };
};

export { getStaticProps };
export default Accommodation;
