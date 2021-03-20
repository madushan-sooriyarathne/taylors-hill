import styled from "styled-components";

interface ContainerProps {
  show: boolean;
}

const Container = styled.div<ContainerProps>`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 12;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  background-color: ${(props) => props.theme.colors.white};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  opacity: ${(props) => (props.show ? "1" : "0")};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};

  transition: opacity 0.2s ease-out;

  ${(props) => props.theme.responsive.mobileLarge} {
    padding: 1rem;
  }
`;

const Icon = styled.svg`
  width: 3rem;
  height: 3rem;
  fill: ${(props) => props.theme.colors.secondary};
  transition: fill 0.2s ease-in-out;

  &:hover {
    fill: ${(props) => props.theme.colors.secondaryLight};
  }
`;

export { Container, Icon };
