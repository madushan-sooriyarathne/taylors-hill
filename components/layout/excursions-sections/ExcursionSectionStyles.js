import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  width: 100%;
  min-height: 80vh;
  margin: 10rem 0;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(
    4,
    [col-start] minmax(min-content, 1fr) [col-end]
  );
  grid-template-rows: repeat(2, minmax(min-content, 1fr));
  grid-template-areas:
    "bo bo co co"
    "bo bo bt bh";

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
`;

const Content = styled.section`
  grid-area: co;
  width: 80%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > *:first-child {
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 2rem;
  text-align: left;
  color: ${(props) => props.theme.colors.secondary};
`;

export { Section, ContentWrapper, Content, ContentItem, Description };
