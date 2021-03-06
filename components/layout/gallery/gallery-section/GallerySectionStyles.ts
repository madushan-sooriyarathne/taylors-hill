import styled from "styled-components";

const Section = styled.section`
  grid-column: full-start / full-end;
  width: 100%;
  height: auto;
  max-height: 100vh;

  display: grid;
  grid-template-columns: 1fr;

  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin-bottom: -8rem;
`;

const Gallery = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 6vw);
  gap: 2rem;

  & > div {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  & > *:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }

  & > *:nth-child(2) {
    grid-column: 3 / 6;
    grid-row: 1 / 4;
  }

  & > *:nth-child(3) {
    grid-column: 6 / 7;
    grid-row: 1 / 3;
  }

  & > *:nth-child(4) {
    grid-column: 7 / 9;
    grid-row: 1 / 3;
  }

  & > *:nth-child(5) {
    grid-column: 1 / 3;
    grid-row: 3 / 6;
  }

  & > *:nth-child(6) {
    grid-column: 3 / 5;
    grid-row: 4 / 6;
  }

  & > *:nth-child(7) {
    grid-column: 5 / 6;
    grid-row: 4 / 5;
  }

  & > *:nth-child(8) {
    grid-column: 6 / 8;
    grid-row: 3 / 5;
  }

  & > *:nth-child(9) {
    grid-column: 8 / 9;
    grid-row: 3 / 6;
  }

  & > *:nth-child(10) {
    grid-column: 1 / 2;
    grid-row: 6 / 8;
  }

  & > *:nth-child(11) {
    grid-column: 2 / 4;
    grid-row: 6 / 8;
  }

  & > *:nth-child(12) {
    grid-column: 4 / 5;
    grid-row: 6 / 8;
  }

  & > *:nth-child(13) {
    grid-column: 5 / 8;
    grid-row: 5 / 8;
  }

  & > *:nth-child(14) {
    grid-column: 8 / 9;
    grid-row: 6 / 8;
  }
`;

export { Section, Gallery };
