import MainTitle from "../main-title/MainTitle";
import ImageBox from "../../image-box/ImageBox";

import {
  Section,
  TitleWrapper,
  BoxOne,
  BoxTwo,
  BoxThree,
  BoxFour,
  BoxFive,
} from "./RoomsSectionStyles";

import { rooms } from "../../../site-data";

const RoomsSection = () => {
  return (
    <Section>
      <TitleWrapper>
        <MainTitle
          mainHeading="Accommodation"
          shadowHeading="Your Stay"
          subHeading="Unique Rooms"
        />
      </TitleWrapper>
      <BoxOne>
        <ImageBox {...rooms[0]} />
      </BoxOne>
      <BoxTwo>
        <ImageBox {...rooms[1]} />
      </BoxTwo>
      <BoxThree>
        <ImageBox {...rooms[2]} />
      </BoxThree>
      <BoxFour>
        <ImageBox {...rooms[3]} />
      </BoxFour>
      <BoxFive>
        <ImageBox {...rooms[4]} />
      </BoxFive>
    </Section>
  );
};

export default RoomsSection;
