import styled from "styled-components";

interface ImageProps {
  image: string;
}

const Grid = styled.section`
  grid-column: content-start / content-end;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-columns: max-content;
  gap: 5rem;

  ${(props) => props.theme.responsive.small} {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.div<ImageProps>`
  width: 100%;
  padding-top: 100%;

  background-image: ${(props) => `url(${props.image})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  ${(props) => props.theme.responsive.small} {
    padding-top: 56.5%;
  }
`;

export { Grid, Image };
