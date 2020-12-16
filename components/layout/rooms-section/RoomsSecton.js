import MainTitle from "../main-title/MainTitle";
import ImageBox from "../../image-box/ImageBox";

import { Section, ContentWrapper } from "./RoomsSectionStyles";

import { rooms } from "../../../site-data";

const RoomsSection = () => {
  return (
    <Section>
      <MainTitle
        mainHeading="Accommodation"
        shadowHeading="Your Stay"
        subHeading="Unique Rooms"
      />
      <ContentWrapper>
        {rooms.map((room) => (
          <ImageBox {...room} key={room.id} />
        ))}
      </ContentWrapper>
    </Section>
  );
};

export default RoomsSection;
