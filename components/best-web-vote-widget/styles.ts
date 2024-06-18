import styled from "styled-components";

const Widget = styled.a`
  position: fixed;
  bottom: 0;
  left: 2rem;
  background-color: ${(props) => props.theme.colors.white};
  padding-bottom: 1rem;
  height: auto;
  width: auto;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  z-index: 290;
  box-shadow: ${(props) => props.theme.shadows.medium};

  & > div {
    width: 10rem;
    height: 10rem;
    scale: 1.2;
  }

  & > span {
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
  }
`;

export { Widget };
