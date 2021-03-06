import styled from "styled-components";

interface WrapperProps {
  centered: boolean;
}

interface ShadowTitleProps {
  centered: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.centered ? "center" : "flex-start")};
  justify-content: center;

  position: relative;

  & > * {
    text-align: ${(props) => (props.centered ? "center" : "left")};
    z-index: 3;
  }
`;

const ShadowTitle = styled.span<ShadowTitleProps>`
  position: absolute;
  top: 0;
  left: ${(props) => (props.centered ? "50%" : "0%")};
  transform: ${(props) =>
    props.centered ? "translate(-50%, -50%)" : "translate(0, -50%)"};
  z-index: 2;

  font-size: 9rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primaryLight};
  letter-spacing: 3px;
  white-space: nowrap;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.primary};
  opacity: 0.3;

  ${(props) => props.theme.responsive.mediumSmaller} {
    font-size: 7rem;
  }

  ${(props) => props.theme.responsive.smaller} {
    font-size: 6rem;
  }

  ${(props) => props.theme.responsive.mobileLarge} {
    font-size: 5rem;
  }

  ${(props) => props.theme.responsive.mobileMedium} {
    font-size: 4rem;
  }
`;

export { Wrapper, ShadowTitle };
