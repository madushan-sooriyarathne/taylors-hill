import styled from "styled-components";

const Container = styled.div`
  grid-column: full-start / full-end;
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url("/static/img/error-bg.webp");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > *:last-child {
    margin-top: 3rem;
  }
`;

const Heading = styled.h1`
  font-size: 12rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.8;
`;

const SubHeading = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) => props.theme.colors.white};

  display: flex;
  align-items: center;

  &::before,
  &::after {
    content: "";
    width: 3rem;
    height: 3px;
    background-color: ${(props) => props.theme.colors.white};
    margin: 0 2rem;
  }
`;

export { Container, Heading, SubHeading };
