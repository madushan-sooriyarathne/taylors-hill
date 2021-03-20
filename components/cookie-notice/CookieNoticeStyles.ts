import styled from "styled-components";

interface PopupProps {
  open: boolean;
}

const Popup = styled.div<PopupProps>`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 15;
  max-width: 50rem;

  background-color: ${(props) => props.theme.colors.bgMedium};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 2rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, min-content);
  gap: 2rem;
  align-items: start;
  justify-items: start;

  transition: transform 0.3s ease-out;

  transform: ${(props) =>
    props.open ? "translateY(0)" : "translateY(calc(100% + 4rem))"};

  ${(props) => props.theme.responsive.mobileLarge} {
    max-width: ${(props) =>
      `calc(100vw - ((${props.theme.sizes.frameSize} * 2) + 2rem))`};
  }
`;

export { Popup };
