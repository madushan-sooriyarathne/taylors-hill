import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  gap: 5rem;
  align-items: start;
  justify-items: start;
`;

const Group = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-auto-rows: minmax(min-content, 50vh);
  gap: 5rem;

  ${(props) => props.theme.responsive.mediumBig} {
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
    gap: 3rem;
  }

  ${(props) => props.theme.responsive.small} {
    grid-template-columns: minmax(min-content, 1fr);
  }
`;

export { Section, Group };
