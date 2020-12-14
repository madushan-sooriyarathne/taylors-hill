import { useCallback, useState } from "react";
import { useTransition } from "react-spring";

import {
  Container,
  Description,
  ButtonLeft,
  ButtonRight,
} from "./SliderStyles";
import ImageSlide from "../../image-slide/ImageSlide";
import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import SliderTextBox from "../../slider-text-box/SliderTextBox";

const slides = [
  {
    id: 0,
    image: "/static/img/hero-slider/img-01.jpg",
    text: { heading: "Best in it's class", description: "some text" },
    textPos: { column: { start: 1, end: 2 }, row: { start: 2, end: 3 } },
  },
  {
    id: 1,
    image: "/static/img/hero-slider/img-02.jpg",
    text: { heading: "Best in it's class", description: "some text" },
    textPos: { column: { start: 1, end: 2 }, row: { start: 1, end: 2 } },
  },
  {
    id: 2,
    image: "/static/img/hero-slider/img-03.jpg",
    text: { heading: "Best in it's class", description: "some text" },
    textPos: { column: { start: 2, end: 3 }, row: { start: 2, end: 3 } },
  },
  {
    id: 3,
    image: "/static/img/hero-slider/img-04.jpg",
    text: { heading: "Best in it's class", description: "some text" },
    textPos: { column: { start: 1, end: 2 }, row: { start: 2, end: 3 } },
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [pageLoad, setPageLoad] = useState(true);

  // spring transition
  const transitions = useTransition(index, (index) => index, {
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
      opacity: 0,
      transform: reverse ? "translate3d(50%, 0, 0)" : "translate3d(-50%, 0, 0)",
    },
  });

  const moveLeft = useCallback(() => {
    setReverse(true);
    setPageLoad(false);
    setIndex((prevState) => {
      const index = (prevState - 1) % slides.length;
      if (index === -1) return slides.length - 1;
      return index;
    });
  });

  const moveRight = useCallback(() => {
    setReverse(false);
    setPageLoad(false);
    setIndex((prevState) => (prevState + 1) % slides.length);
  });

  return (
    <Container>
      {transitions.map(({ item, props, key }) => {
        const { image, text, textPos } = slides[item];
        return (
          <ImageSlide key={key} image={image} textPos={textPos} style={props}>
            <ButtonLeft onClick={moveLeft} />
            <ButtonRight onClick={moveRight} />
            <SliderTextBox>
              <HeadingPrimary color="#fff">{text.heading}</HeadingPrimary>
              <Description>{text.description}</Description>
            </SliderTextBox>
          </ImageSlide>
        );
      })}
    </Container>
  );
};

export default Slider;
