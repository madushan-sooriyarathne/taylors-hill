import { ReactNode } from "react";
import { Slide, TextWrapper } from "./ImageSlideStyles";

interface Props {
  image: string;
  children: ReactNode;
  style?: CSSStyles;
  textPos: CSSGridPos;
}

const ImageSlide: React.FC<Props> = ({
  image,
  textPos,
  style,
  children,
}: Props): JSX.Element => {
  return (
    <Slide image={image} style={{ ...style }}>
      <TextWrapper pos={textPos}>{children}</TextWrapper>
    </Slide>
  );
};

export default ImageSlide;
