import styled from "styled-components";

const Container = styled.section`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-auto-rows: max-content;

  gap: 5rem;

  align-items: start;
  justify-items: center;
  place-content: center center;
`;

export { Container };
