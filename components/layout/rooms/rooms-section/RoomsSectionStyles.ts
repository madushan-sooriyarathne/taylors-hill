import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;

  gap: 5rem;

  ${(props) => props.theme.responsive.mediumBig} {
    min-height: 150vh;
  }
`;

const ContentWrapper = styled.div`
  grid-row: 2 / 3;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(
    6,
    [col-start] minmax(min-content, 1fr) [col-end]
  );
  grid-template-rows: repeat(2, [row-start] 1fr [row-end]);
  grid-auto-rows: 1fr;
  grid-template-areas:
    "ro ro ro rt rt rt"
    "rh rh rf rf ri ri";
  gap: 3rem;

  ${(props) => props.theme.responsive.mediumBig} {
    grid-template-columns: repeat(4, minmax(min-content, 1fr));
    grid-template-areas:
      "ro ro ro ro"
      "rt rt rh rh"
      "rf rf ri ri";
  }

  ${(props) => props.theme.responsive.mediumSmaller} {
    grid-template-columns: minmax(min-content, 1fr);
    grid-template-areas:
      "ro"
      "rt"
      "rh"
      "rf"
      "ri";

    & > * {
      height: 60vw;
    }
  }

  // arrange the image boxes in the grid.

  & > *:nth-child(1) {
    grid-area: ro;
  }

  & > *:nth-child(2) {
    grid-area: rt;
  }

  & > *:nth-child(3) {
    grid-area: rh;
  }

  & > *:nth-child(4) {
    grid-area: rf;
  }

  & > *:nth-child(5) {
    grid-area: ri;
  }
`;

export { Section, ContentWrapper };
