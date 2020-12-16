import styled from "styled-components";

const Image = styled.div`
  grid-column: full-start / full-end;
  width: 100%;
  height: 70vh;

  background-image: ${(props) =>
    `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%),url(${props.image})`};
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 10rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.primary};
  letter-spacing: 1px;
  opacity: 0.7;
  color: ${(props) => props.theme.colors.white};
`;

const SubTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  font-family: ${(props) => props.theme.fonts.primary};
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.white};
`;

export { Image, Title, SubTitle };
