import MainTitle from "../../main-title/MainTitle";
import ImageBox from "../../../image-box/ImageBox";

import { Section, ContentWrapper } from "./RoomsSectionStyles";

interface Props {
  rooms: Room[];
}

const RoomsSection: React.FC<Props> = ({ rooms }: Props): JSX.Element => {
  return (
    <Section>
      <MainTitle
        mainHeading="Accommodation"
        shadowHeading="Your Stay"
        subHeading="Unique Rooms"
        centered
      />
      <ContentWrapper>
        {rooms.map((room: Room) => (
          <ImageBox
            title={room.title}
            image={room.image}
            url={`/accommodation/${room.id}`}
            key={room.id}
            withButton
          />
        ))}
      </ContentWrapper>
    </Section>
  );
};

export default RoomsSection;
