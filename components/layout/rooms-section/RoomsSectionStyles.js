import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  width: 100%;
  min-height: 100vh;
  margin: 10rem 0;

  display: grid;
  grid-template-columns: repeat(
    6,
    [col-start] minmax(min-content, 1fr) [col-end]
  );
  grid-template-rows:
    [title-start] min-content [title-end box-start] repeat(
      2,
      [row-start] 1fr [row-end]
    )
    [box-end];
  grid-template-areas:
    "ti ti ti ti ti ti"
    "ro ro ro rt rt rt"
    "rh rh rf rf ri ri";
  gap: 3rem;
`;

const TitleWrapper = styled.div`
  grid-area: ti;
`;

const BoxOne = styled.div`
  grid-area: ro;
`;

const BoxTwo = styled.div`
  grid-area: rt;
`;
const BoxThree = styled.div`
  grid-area: rh;
`;
const BoxFour = styled.div`
  grid-area: rf;
`;
const BoxFive = styled.div`
  grid-area: ri;
`;

export { Section, TitleWrapper, BoxOne, BoxTwo, BoxThree, BoxFour, BoxFive };
