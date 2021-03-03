import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 5rem;

  align-items: center;
  justify-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-auto-rows: max-content;
  grid-template-areas: "bo bt bh";

  align-items: flex-start;
  gap: 3rem;

  ${(props) => props.theme.responsive.mediumBig} {
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
    grid-template-areas:
      "bo bo"
      "bt bh";
  }

  ${(props) => props.theme.responsive.small} {
    grid-template-columns: minmax(min-content, 1fr);
    grid-template-areas:
      "bo"
      "bt"
      "bh";
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
`;

export { Section, ContentWrapper };
