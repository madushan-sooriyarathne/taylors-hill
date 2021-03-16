import { useCallback, useEffect, useState } from "react";
import { useTransition } from "react-spring";

import {
  Container,
  SliderHeading,
  Description,
  ButtonLeft,
  ButtonRight,
} from "./SliderStyles";
import ImageSlide from "../../image-slide/ImageSlide";
import SliderTextBox from "../../slider-text-box/SliderTextBox";

interface Props {
  slides: HeroSlides[];
}

const Slider: React.FC<Props> = ({ slides }: Props): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  const [reverse, setReverse] = useState<boolean>(false);
  const [pageLoad, setPageLoad] = useState<boolean>(true);

  // preload slider images to prevent white-spaces
  useEffect(() => {
    slides.forEach(({ image }) => {
      const imageEl: HTMLImageElement = document.createElement("img");
      imageEl.src = image;
    });
  }, []);

  // spring transition
  // const transitions = useTransition(index, (index: number): number => index, {
  //   from: {
  //     transform: pageLoad
  //       ? "translate3d(0, 0, 0)"
  //       : reverse
  //       ? "translate3d(-100%, 0, 0)"
  //       : "translate3d(100%, 0, 0)",
  //   },
  //   enter: {
  //     transform: "translate3d(0%, 0, 0)",
  //   },
  //   leave: {
  //     transform: reverse
  //       ? "translate3d(100%, 0, 0)"
  //       : "translate3d(-100%, 0, 0)",
  //   },
  // });

  // const transitions = useTransition(index, (index: number): number => index, {
  //   from: {
  //     opacity: 0,
  //   },
  //   enter: {
  //     opacity: 1,
  //   },
  //   leave: {
  //     opacity: 0,
  //   },
  // });

  const transitions = useTransition(index, (index: number): number => index, {
    from: {
      opacity: 0,
      transform: pageLoad
        ? "translate3d(0, 0, 0)"
        : reverse
        ? "translate3d(-100%, 0, 0)"
        : "translate3d(100%, 0, 0)",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%, 0, 0)",
    },
    leave: {
      opacity: 0.5,
      transform: reverse
        ? "translate3d(100%, 0, 0)"
        : "translate3d(-100%, 0, 0)",
    },
  });

  const moveLeft: () => void = useCallback((): void => {
    setReverse(true);
    setPageLoad(false);
    setIndex((prevState: number): number => {
      const index = (prevState - 1) % slides.length;
      if (index === -1) return slides.length - 1;
      return index;
    });
  }, []);

  const moveRight = useCallback((): void => {
    setReverse(false);
    setPageLoad(false);
    setIndex((prevState: number): number => (prevState + 1) % slides.length);
  }, []);

  return (
    <Container>
      {transitions.map(({ item, props, key }) => {
        const { image, text, textPos } = slides[item];
        return (
          <ImageSlide
            key={key}
            image={image}
            textPos={textPos}
            style={props as CSSStyles}
          >
            <ButtonLeft onClick={moveLeft} />
            <ButtonRight onClick={moveRight} />
            <SliderTextBox>
              <SliderHeading>{text.heading}</SliderHeading>
              <Description>{text.description}</Description>
            </SliderTextBox>
          </ImageSlide>
        );
      })}
    </Container>
  );
};

export default Slider;
