import MainTitle from "../../main-title/MainTitle";
import ImageBox from "../../../image-box/ImageBox";

import { Section, ContentWrapper } from "./RoomsSectionStyles";

const RoomsSection = ({ rooms }) => {
  return (
    <Section>
      <MainTitle
        mainHeading="Accommodation"
        shadowHeading="Your Stay"
        subHeading="Unique Rooms"
      />
      <ContentWrapper>
        {rooms.map((room) => (
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
