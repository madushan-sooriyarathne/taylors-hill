import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  width: 100%;
  height: 60vh;
  margin: 10rem 0;

  display: grid;
  grid-template-columns: repeat(
    2,
    [col-start] minmax(min-content, 1fr) [col-end]
  );
  grid-template-areas: ${(props) => (props.reversed ? "'co im'" : "'im co'")};
  gap: 5rem;
`;

const Image = styled.div`
  grid-area: im;

  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.image})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  grid-area: co;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { Section, Image, Content };
