import styled from "styled-components";

const Grid = styled.section`
  grid-column: content-start / content-end;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-columns: max-content;
  gap: 5rem;
`;

const Image = styled.div`
  width: 100%;
  padding-top: 100%;

  background-image: ${(props) => `url(${props.image})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export { Grid, Image };
