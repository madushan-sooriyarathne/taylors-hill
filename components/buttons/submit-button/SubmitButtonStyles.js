import styled from "styled-components";

const Btn = styled.button`
  width: auto;
  height: auto;
  min-width: 13rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 1rem 3rem;
  border: ${(props) =>
    props.invert
      ? `2px solid ${props.theme.colors.secondary}`
      : `2px solid ${props.theme.colors.white}`};
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in, width 0.2s ease-in;

  & > span {
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 2;
    color: ${(props) =>
      props.invert ? props.theme.colors.secondary : props.theme.colors.white};
    transition: color 0.3s cubic-bezier(0.49, 0.07, 0.45, 0.89);
  }

  &:hover {
    background-color: ${(props) =>
      props.invert ? props.theme.colors.secondary : props.theme.colors.white};
    & > span {
      color: ${(props) =>
        props.invert ? props.theme.colors.white : props.theme.colors.black};
    }

    & > div {
      border-color: ${(props) =>
        props.invert
          ? props.theme.colors.secondaryLight
          : props.theme.colors.secondary};
      border-top-color: ${(props) =>
        props.invert
          ? props.theme.colors.white
          : props.theme.colors.secondaryLight};
    }
  }
`;

export { Btn };
