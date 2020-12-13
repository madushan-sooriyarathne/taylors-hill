import styled from "styled-components";
import { animated } from "react-spring";

const Slide = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(
    2,
    [col-start] minmax(min-content, 1fr) [col-end]
  );
  grid-template-rows: repeat(2, [row-start] minmax(min-content, 1fr) [row-end]);
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const TextWrapper = styled.div`
  grid-column: ${(props) =>
    `${props.pos.column.start} / ${props.pos.column.end}`};
  grid-row: ${(props) => `${props.pos.row.start} / ${props.pos.row.end}`};
`;

export { Slide, TextWrapper };
