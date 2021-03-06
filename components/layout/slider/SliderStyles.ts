import styled from "styled-components";

const Container = styled.div`
  grid-column: full-start / full-end;

  width: 100%;
  height: 100vh;

  position: relative;

  ${(props) => `${props.theme.responsive.smaller} and (min-height: 31.25em)`} {
    height: 70vh;
  }
`;

const Button = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);

  width: 5rem;
  height: 5rem;
  padding: 1rem;

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: transparent;
  filter: invert(1);
  cursor: pointer;
  opacity: 0.5;

  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

  ${(props) => props.theme.responsive.smaller} {
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
  }
`;

const ButtonRight = styled(Button)`
  right: 5rem;
  background-image: url("/static/svg/right-arrow.svg");
  &:hover {
    transform: translate(5px, -50%);
    opacity: 0.8;
  }
`;

const ButtonLeft = styled(Button)`
  left: 5rem;
  background-image: url("/static/svg/left-arrow.svg");
  &:hover {
    transform: translate(-5px, -50%);
    opacity: 0.8;
  }
`;

const SliderHeading = styled.h1`
  font-size: 8rem;
  font-weight: 900;
  font-family: ${(props) => props.theme.fonts.secondary};
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;

  ${(props) => props.theme.responsive.mediumBig} {
    font-size: 6rem;
  }

  ${(props) => props.theme.responsive.mobileLarge} {
    font-size: 4rem;
  }

  ${(props) => props.theme.responsive.mobileMedium} {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 2rem;
  font-weight: 400;
  color: ${(props) => props.color || props.theme.colors.white};

  ${(props) => props.theme.responsive.mobileMedium} {
    font-size: 1.4rem;
  }
`;

export { Container, ButtonRight, ButtonLeft, SliderHeading, Description };
