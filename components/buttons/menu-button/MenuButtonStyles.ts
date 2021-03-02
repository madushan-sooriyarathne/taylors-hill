import styled from "styled-components";

interface ButtonProps {
  inverted: boolean;
  menuOpen: boolean;
}

const Button = styled.div<ButtonProps>`
  width: 4rem;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;
  display: none;

  & > * {
    background: ${(props) =>
      props.inverted ? props.theme.colors.secondary : props.theme.colors.white};
    border-radius: 0.5rem;
    height: 0.4rem;
    margin: 0.7rem 0;
    transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    display: block;
  }

  & > *:nth-child(1) {
    width: 50%;
    transform-origin: bottom;
    transform: ${(props) =>
      props.menuOpen
        ? "rotateZ(45deg) translate(3px, 0px)"
        : "translate(0, 0)"};
  }

  & > *:nth-child(2) {
    width: 100%;

    transform-origin: top;
    transform: ${(props) =>
      props.menuOpen ? "rotateZ(-45deg)" : "rotateZ(0)"};
  }

  & > *:nth-child(3) {
    width: ${(props) => (props.menuOpen ? "50%" : "75%")};

    transform-origin: bottom;
    transform: ${(props) =>
      props.menuOpen
        ? "rotateZ(45deg) translate(8px, -13px)"
        : "translate(0, 0)"};
  }

  ${(props) => props.theme.responsive.mediumLarge} {
    display: inline-block;
  }
`;

export { Button };
