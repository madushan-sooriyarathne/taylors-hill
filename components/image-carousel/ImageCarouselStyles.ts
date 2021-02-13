import styled from "styled-components";
import { animated } from "react-spring";

interface CarouselWrapperProps {
  width: string;
  height: string;
}

interface ImageProps {
  image: string;
}

interface ThumbRowProps {
  length: number;
}

interface ThumbItemProps {
  selected: boolean;
  image: string;
}

const CarouselWrapper = styled.div<CarouselWrapperProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  position: relative;
  overflow: hidden;
`;

const Image = styled(animated.div)<ImageProps>`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  transform-origin: 50% 50%;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  top: 0;
  right: 0%;

  display: flex;
`;

const Button = styled.div`
  width: 7rem;
  height: 7rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bgLight};
  border: 1px solid rgba(0, 0, 0, 0.1);

  cursor: pointer;

  & > svg {
    fill: ${(props) => props.theme.colors.secondary};
    width: 3rem;
    height: 3rem;
    background-color: transparent;

    transition: transform 0.2s ease 0.1s;
  }
`;

const ButtonLeft = styled(Button)`
  border-right: none;
  &:hover {
    svg {
      transform: translateX(-3px);
    }
  }
`;

const ButtonRight = styled(Button)`
  &:hover {
    svg {
      transform: translateX(3px);
    }
  }
`;

const ThumbRow = styled.div<ThumbRowProps>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.length}, 1fr)`};
  gap: 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem 5rem;
`;

const ThumbItem = styled.div<ThumbItemProps>`
  width: 100%;
  height: auto;
  padding-top: 56.25%;

  background-image: ${(props) =>
    props.selected
      ? `linear-gradient(0deg, rgba(170,168,166,0.5) 0%, rgba(170,168,166,0.5) 100%), url(${props.image})`
      : ` url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  border: ${(props) =>
    props.selected ? `1px solid ${props.theme.colors.white}` : "none"};
  transform: ${(props) => (props.selected ? "scale(0.95)" : "scale(1)")};
`;

export {
  CarouselWrapper,
  Image,
  ButtonWrapper,
  ButtonLeft,
  ButtonRight,
  ThumbRow,
  ThumbItem,
};
