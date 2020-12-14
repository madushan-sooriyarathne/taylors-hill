import styled from "styled-components";

const Btn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 1rem 3rem;
  border: ${(props) =>
    props.invert
      ? `2px solid ${props.theme.colors.black}`
      : `2px solid ${props.theme.colors.white}`};
  outline: none;
  cursor: pointer;

  & > span {
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 2;
    color: ${(props) =>
      props.invert ? props.theme.colors.black : props.theme.colors.white};
    transition: color 0.3s cubic-bezier(0.49, 0.07, 0.45, 0.89);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) =>
      props.invert ? props.theme.colors.black : props.theme.colors.white};
    transform: scale3d(0, 1, 1);
    transform-origin: 100% 0;
    transition: transform 0.3s cubic-bezier(0.49, 0.07, 0.45, 0.89);
  }

  &:hover {
    & > span {
      color: ${(props) =>
        props.invert ? props.theme.colors.white : props.theme.colors.black};
    }

    &::before {
      transform-origin: 0 0;
      transform: scale3d(1, 1, 1);
    }
  }
`;

export { Btn };
