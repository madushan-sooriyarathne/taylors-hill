import styled from "styled-components";

const Widget = styled.a`
  position: fixed;
  bottom: 0;
  left: 2rem;
  background-color: ${(props) => props.theme.colors.white};
  padding-inline: 0.5rem;
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

  & > span {
    width: 14rem !important;
    height: auto;
    aspect-ratio: 1.62/1;
    scale: 1.2;
  }
`;

export { Widget };
