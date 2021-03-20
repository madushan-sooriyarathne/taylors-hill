import styled from "styled-components";

interface BarProps {
  show: boolean;
}

const Bar = styled.div<BarProps>`
  position: fixed;
  bottom: 3rem;
  left: 3rem;
  z-index: 11;

  min-height: 5rem;
  width: 50rem;

  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  background-color: ${(props) => props.theme.colors.bgMedium};
  display: grid;
  grid-template-columns: 1fr min-content;
  gap: 3rem;
  align-items: center;

  padding: 2rem;
  border-radius: 3px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: transform 0.3s ease-in-out;

  transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(calc(100% + 3rem))"};

  ${(props) => props.theme.responsive.mobileLarge} {
    width: 40rem;
  }
`;

const NotificationMessage = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: left;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.secondary};
`;

const CloseButton = styled.svg`
  width: 3rem;
  height: 3rem;
  fill: ${(props) => props.theme.colors.secondary};
  transition: fill 0.3s ease-in-out 0.2s, transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    fill: ${(props) => props.theme.colors.secondaryLight};
    transform: rotate(90deg);
  }
`;

export { Bar, NotificationMessage, CloseButton };
