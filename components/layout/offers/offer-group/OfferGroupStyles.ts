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

  ${(props) => props.theme.responsive.mediumBig} {
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
    gap: 3rem;
  }

  ${(props) => props.theme.responsive.mediumSmall} {
    margin-top: -10rem;
    margin-bottom: -5rem;
  }

  ${(props) => props.theme.responsive.small} {
    grid-template-columns: minmax(min-content, 1fr);
  }

  ${(props) => props.theme.responsive.mobileMedium} {
    grid-column: full-start / full-end;
    padding: 1rem;
  }
`;

export { Container };
