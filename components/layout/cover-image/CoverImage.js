import TitledGroup from "../title-group/TitleGroup";

import { Image, Title, SubTitle } from "./CoverImageStyles";
const CoverImage = ({ image, title, subTitle }) => {
  return (
    <Image image={image}>
      <TitledGroup centered>
        <Title isLarge={title.length > 25}>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TitledGroup>
    </Image>
  );
};

export default CoverImage;
