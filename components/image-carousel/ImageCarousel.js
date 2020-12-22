import { useCallback, useState } from "react";
import { useTransition } from "react-spring";
import {
  CarouselWrapper,
  Image,
  ButtonWrapper,
  ButtonLeft,
  ButtonRight,
  ThumbRow,
  ThumbItem,
} from "./ImageCarouselStyles";

const ImageCarousel = ({ images, width, height, withThumb }) => {
  const [index, setIndex] = useState(0);
  const [reversed, setReversed] = useState(false);

  const transition = useTransition(index, (index) => index, {
    from: {
      transform: reversed
        ? "scale(0.9) translateX(-100%)"
        : "scale(0.9) translateX(100%)",
      opacity: 0,
    },
    enter: {
      transform: "scale(1) translateX(0)",
      opacity: 1,
    },
    leave: {
      transform: reversed
        ? "scale(0.9) translateX(100%)"
        : "scale(0.9) translateX(-100%)",
      opacity: 0,
    },
  });

  const handleLeft = (event) => {
    setReversed(false);
    setIndex((prevState) => {
      const index = (prevState - 1) % images.length;
      if (index === -1) return images.length - 1;
      return index;
    });
  };

  const handleRight = (event) => {
    setReversed(true);
    console.log("im clicked");
    setIndex((prevState) => (prevState + 1) % images.length);
  };

  const handleSelect = useCallback((selectedIndex) => {
    if (index > selectedIndex) {
      setReversed(true);
    } else {
      setReversed(false);
    }
    setIndex(selectedIndex);
  });

  return (
    <CarouselWrapper height={height} width={width}>
      {transition.map(({ item, props, key }) => (
        <Image style={props} image={images[item]} key={key} />
      ))}
      <ButtonWrapper>
        <ButtonLeft onClick={handleLeft}>
          <svg>
            <use xlinkHref="/static/svg/sprites.svg#arrow-left"></use>
          </svg>
        </ButtonLeft>
        <ButtonRight onClick={handleRight}>
          <svg>
            <use xlinkHref="/static/svg/sprites.svg#arrow-right"></use>
          </svg>
        </ButtonRight>
      </ButtonWrapper>

      {withThumb && (
        <ThumbRow length={images.length} width={width}>
          {images.map((image, curIndex) => (
            <ThumbItem
              image={image}
              selected={index === curIndex}
              onClick={() => handleSelect(curIndex)}
            />
          ))}
        </ThumbRow>
      )}
    </CarouselWrapper>
  );
};

export default ImageCarousel;
