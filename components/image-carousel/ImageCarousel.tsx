import { useCallback, useEffect, useState } from "react";
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

interface Props {
  images: string[];
  defaultIndex?: number;
  width?: string;
  height?: string;
  withThumb?: boolean;
}

const ImageCarousel: React.FC<Props> = ({
  images,
  withThumb = false,
  defaultIndex = 0,
  width = "50vw",
  height = "60vh",
}: Props): JSX.Element => {
  const [index, setIndex] = useState<number>(defaultIndex);
  const [reversed, setReversed] = useState<boolean>(false);

  const transition = useTransition(index, (index: number): number => index, {
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

  useEffect((): void => {
    if (!defaultIndex) return setIndex(0);
    if (defaultIndex !== index) {
      setIndex(defaultIndex);
    }

    // load all the images after first mount
    images.forEach((image) => {
      const imageElement: HTMLImageElement = document.createElement("img");
      imageElement.src = image;
    });
  }, [defaultIndex]);

  const handleLeft: () => void = (): void => {
    setReversed(false);
    setIndex((prevState: number): number => {
      const index = (prevState - 1) % images.length;
      if (index === -1) return images.length - 1;
      return index;
    });
  };

  const handleRight: () => void = () => {
    setReversed(true);
    setIndex((prevState) => (prevState + 1) % images.length);
  };

  const handleSelect: (selectedIndex: number) => void = useCallback(
    (selectedIndex: number): void => {
      if (index > selectedIndex) {
        setReversed(true);
      } else {
        setReversed(false);
      }
      setIndex(selectedIndex);
    },
    []
  );

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
        <ThumbRow length={images.length}>
          {images.map((image, curIndex) => (
            <ThumbItem
              key={curIndex}
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
