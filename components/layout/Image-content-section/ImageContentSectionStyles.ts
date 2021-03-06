import styled from "styled-components";

interface SectionProps {
  reversed: boolean;
}

const Section = styled.section<SectionProps>`
  grid-column: content-start / content-end;

  width: 100%;
  min-height: 60vh;

  display: grid;
  grid-template-columns: repeat(
    2,
    [col-start] minmax(min-content, 1fr) [col-end]
  );
  grid-template-areas: ${(props) => (props.reversed ? "'co im'" : "'im co'")};
  gap: 5rem;

  ${(props) => props.theme.responsive.mediumSmaller} {
    grid-template-columns: minmax(min-content, 1fr);
    grid-template-rows: repeat(2, max-content);
    grid-template-areas:
      "im"
      "co";
  }

  ${(props) => props.theme.responsive.mobileMedium} {
    grid-column: full-start / full-end;
  }
`;

interface ImageProps {
  image: string;
}

const Image = styled.div<ImageProps>`
  grid-area: im;

  width: 100%;
  height: 100%;
  min-height: 50rem;
  background-image: ${(props) => `url(${props.image})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  ${(props) => props.theme.responsive.mobileMedium} {
    min-height: 30rem;
  }
`;

const Content = styled.div`
  grid-area: co;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) => props.theme.responsive.mobileMedium} {
    padding: 0 2rem;
  }
`;

export { Section, Image, Content };
