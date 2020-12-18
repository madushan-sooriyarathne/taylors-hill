import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;
  width: 100%;
  height: auto;

  margin: 10rem 0;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 5rem;

  align-items: center;
  justify-items: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-auto-rows: max-content;

  align-items: flex-start;
  gap: 3rem;
`;

export { Section, ContentWrapper };
