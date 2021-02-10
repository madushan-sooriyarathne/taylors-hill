import TitledGroup from "../title-group/TitleGroup";
import { Image, Title, SubTitle } from "./CoverImageStyles";

interface Props {
  image: string;
  title: string;
  subTitle?: string;
}

const CoverImage: React.FC<Props> = ({
  image,
  title,
  subTitle,
}: Props): JSX.Element => {
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
