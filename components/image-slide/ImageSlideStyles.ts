import styled from "styled-components";
import { animated } from "react-spring";

interface SlideProps {
  image: string;
}

interface TextWrapperProps {
  pos: CSSGridPos;
}

const Slide = styled(animated.div)<SlideProps>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 5rem;
  display: grid;
  grid-template-columns: repeat(
    2,
    [col-start] minmax(min-content, 1fr) [col-end]
  );
  grid-template-rows: repeat(2, [row-start] minmax(min-content, 1fr) [row-end]);
  background-image: ${(props) =>
    `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%), url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  will-change: transform;

  ${(props) => props.theme.responsive.mediumSmall} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, minmax(min-content, 1fr));
    align-items: center;
    justify-items: center;
    padding: 2rem;

    background-image: ${(props) =>
      `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%), url(${props.image})`};
  }
`;

const TextWrapper = styled.div<TextWrapperProps>`
  grid-column: ${(props) =>
    `${props.pos.column.start} / ${props.pos.column.end}`};
  grid-row: ${(props) => `${props.pos.row.start} / ${props.pos.row.end}`};

  ${(props) => props.theme.responsive.mediumSmall} {
    grid-row: 2 / 3;
  }
`;

export { Slide, TextWrapper };
