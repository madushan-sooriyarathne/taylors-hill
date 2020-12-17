import styled from "styled-components";
import { animated } from "react-spring";

const CarouselWrapper = styled.div`
  width: ${(props) => props.width || "50vw"};
  height: ${(props) => props.height || "60vh"};

  position: relative;
  overflow: hidden;
`;

const Image = styled(animated.div)`
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

const Button = styled.div`
  width: 7rem;
  height: 7rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzg0cHQiIGhlaWdodD0iMzgzLjk5OTk4NnB0IiB2aWV3Qm94PSIwIDAgMzg0IDM4My45OTk5ODYiIHZlcnNpb249IjEuMiI+CjxnIGlkPSJzdXJmYWNlMSI+CjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMTAwJSwxMDAlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxOTIgMCBDIDg1LjY2MDE1NiAwIDAgODUuNjYwMTU2IDAgMTkyIEMgMCAyOTguMzM5ODQ0IDg1LjY2MDE1NiAzODQgMTkyIDM4NCBDIDI5Ny4zNTU0NjkgMzg0IDM4NCAyOTguMzM5ODQ0IDM4NCAxOTIgQyAzODQgODUuNjYwMTU2IDI5Ny4zNTU0NjkgMCAxOTIgMCBaIE0gMTkyIDM1NC40NjA5MzggQyAxMDIuMzk4NDM4IDM1NC40NjA5MzggMjkuNTM5MDYyIDI4MS42MDE1NjIgMjkuNTM5MDYyIDE5MiBDIDI5LjUzOTA2MiAxMDIuMzk4NDM4IDEwMi4zOTg0MzggMjkuNTM5MDYyIDE5MiAyOS41MzkwNjIgQyAyODEuNjAxNTYyIDI5LjUzOTA2MiAzNTQuNDYwOTM4IDEwMi4zOTg0MzggMzU0LjQ2MDkzOCAxOTIgQyAzNTQuNDYwOTM4IDI4MS42MDE1NjIgMjgxLjYwMTU2MiAzNTQuNDYwOTM4IDE5MiAzNTQuNDYwOTM4IFogTSAxOTIgMzU0LjQ2MDkzOCAiLz4KPHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigxMDAlLDEwMCUsMTAwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDE5MiAyOS41MzkwNjIgQyAxMDIuMzk4NDM4IDI5LjUzOTA2MiAyOS41MzkwNjIgMTAyLjM5ODQzOCAyOS41MzkwNjIgMTkyIEMgMjkuNTM5MDYyIDI4MS42MDE1NjIgMTAyLjM5ODQzOCAzNTQuNDYwOTM4IDE5MiAzNTQuNDYwOTM4IEMgMjgxLjYwMTU2MiAzNTQuNDYwOTM4IDM1NC40NjA5MzggMjgxLjYwMTU2MiAzNTQuNDYwOTM4IDE5MiBDIDM1NC40NjA5MzggMTAyLjM5ODQzOCAyODEuNjAxNTYyIDI5LjUzOTA2MiAxOTIgMjkuNTM5MDYyIFogTSAxOTIgMjkuNTM5MDYyICIvPgo8L2c+Cjwvc3ZnPgo=");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  top: 50%;

  cursor: pointer;

  & > svg {
    fill: ${(props) => props.theme.colors.secondary};
    width: 3rem;
    height: 3rem;
    background-color: transparent;

    transition: transform 0.2s ease;
  }
`;

const ButtonLeft = styled(Button)`
  left: 0;
  transform: translate(-50%, -50%);
  justify-content: flex-end;

  &:hover {
    svg {
      transform: translateX(-3px);
    }
  }
`;

const ButtonRight = styled(Button)`
  right: 0;
  transform: translate(50%, -50%);
  justify-content: flex-start;

  &:hover {
    svg {
      transform: translateX(3px);
    }
  }
`;

const ThumbRow = styled.div`
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

const ThumbItem = styled.div`
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

export { CarouselWrapper, Image, ButtonLeft, ButtonRight, ThumbRow, ThumbItem };
