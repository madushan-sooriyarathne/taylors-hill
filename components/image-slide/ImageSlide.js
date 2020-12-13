import { Slide, TextWrapper } from "./ImageSlideStyles";

const ImageSlide = ({ image, textPos, style, children }) => {
  return (
    <Slide image={image} style={{ ...style }}>
      <TextWrapper pos={textPos}>{children}</TextWrapper>
    </Slide>
  );
};

export default ImageSlide;
