import styled from "styled-components";

interface ImageProps {
  image: string;
}

interface TitleProps {
  isLarge: boolean;
}

const Image = styled.div<ImageProps>`
  grid-column: full-start / full-end;
  width: 100%;
  height: 70vh;
  padding: 10rem 5rem;

  background-image: ${(props) =>
    `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%),url(${props.image})`};
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1<TitleProps>`
  font-size: ${(props) => (props.isLarge ? "6rem" : "10rem")};
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.primary};
  letter-spacing: 1px;
  opacity: 0.7;
  color: ${(props) => props.theme.colors.white};

  ${(props) => props.theme.responsive.mediumBig} {
    font-size: ${(props) => (props.isLarge ? "4rem" : "8rem")};
  }

  ${(props) => props.theme.responsive.small} {
    font-size: ${(props) => (props.isLarge ? "4rem" : "6rem")};
  }

  ${(props) => props.theme.responsive.mobileMedium} {
    font-size: ${(props) => (props.isLarge ? "3rem" : "4rem")};
  }
`;

const SubTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  font-family: ${(props) => props.theme.fonts.primary};
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.white};

  ${(props) => props.theme.responsive.small} {
    font-size: 2rem;
  }

  ${(props) => props.theme.responsive.mobileMedium} {
    font-size: 1.5rem;
  }
`;

export { Image, Title, SubTitle };
