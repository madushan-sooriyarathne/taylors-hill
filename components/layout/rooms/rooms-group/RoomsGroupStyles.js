import styled from "styled-components";

const Container = styled.section`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 5rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(6, minmax(min-content, 1fr));
  grid-template-rows: repeat(2, minmax(min-content, 25vw));
  grid-template-areas:
    "bo bo bo bt bt bt"
    "bh bh bf bf bi bi";
  gap: 3rem;

  & > div {
    width: 100%;
    height: 100%;
  }

  & > *:nth-child(1) {
    grid-area: bo;
  }

  & > *:nth-child(2) {
    grid-area: bt;
  }

  & > *:nth-child(3) {
    grid-area: bh;
  }

  & > *:nth-child(4) {
    grid-area: bf;
  }

  & > *:nth-child(5) {
    grid-area: bi;
  }
`;

export { Container, ContentWrapper };
