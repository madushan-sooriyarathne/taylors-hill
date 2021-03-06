import styled from "styled-components";

const Container = styled.div`
  grid-column: content-start / content-end;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  align-items: start;
  justify-items: start;
  gap: 10rem;

  ${(props) => props.theme.responsive.mediumSmall} {
    margin-top: -10rem;
    margin-bottom: -5rem;
  }

  ${(props) => props.theme.responsive.mobileMedium} {
    grid-column: full-start / full-end;
    padding: 1rem;
  }
`;

const Experience = styled.section`
  display: grid;
  grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 60%);
  grid-template-rows: max-content;
  align-items: center;
  justify-items: start;
  gap: 5rem;

  ${(props) => props.theme.responsive.medium} {
    grid-template-columns: minmax(min-content, 1fr);
  }
`;

const ExperienceDetails = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > *:first-child {
    margin-bottom: 2rem;
  }
`;

const OtherExperiencesSection = styled.section`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 5rem;
  align-items: center;
  justify-items: start;
`;

const OtherExperiencesGroup = styled.section`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-auto-rows: minmax(40rem, 30vw);
  gap: 3rem;

  ${(props) => props.theme.responsive.mediumSmall} {
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
  }

  ${(props) => props.theme.responsive.smaller} {
    grid-template-columns: minmax(min-content, 1fr);
  }
`;

export {
  Container,
  Experience,
  ExperienceDetails,
  OtherExperiencesGroup,
  OtherExperiencesSection,
};
