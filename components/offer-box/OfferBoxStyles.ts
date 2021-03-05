import styled from "styled-components";

interface ImageProps {
  image: string;
}

const Box = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(25rem, 30rem) minmax(20rem, 1fr);
  grid-auto-rows: minmax(max-content, 1fr);
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows.low};
  transition: box-shadow 0.3s ease-in;

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.medium};
  }
`;

const Image = styled.div<ImageProps>`
  width: 100%;
  height: 100%;

  background-image: ${(props) => `url(${props.image})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  & > *:last-child {
    margin-top: auto;
  }
`;

export { Box, Image, ContentWrapper };
