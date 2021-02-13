import styled from "styled-components";

interface ImageItemProps {
  image: string;
}

const Container = styled.div`
  grid-column: content-start / content-end;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 15rem;
`;

const SummeryWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -10rem;

  & > div {
    width: 50;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, minmax(min-content, 1fr));
    align-items: center;
    justify-items: center;
    gap: 5rem;
  }
`;

const SummeryItem = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1);

  & > h4 {
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 1rem;
  }

  & > p {
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const DetailsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-areas: "de am";
  align-items: start;
  justify-content: start;
  gap: 10rem;
`;

const DescriptionWrapper = styled.div`
  grid-area: de;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 3rem;

  & > div {
    & > h3 {
      text-align: left;
    }
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 2rem;
  text-align: left;
`;

const FeaturesWrapper = styled.div`
  grid-area: am;
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: min-content 1fr;
  grid-template-areas:
    "ti ti"
    "ro rt";
  gap: 3rem;
  align-items: start;
  justify-items: start;

  & > h3 {
    grid-area: ti;
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: ${(props) => props.theme.colors.secondary};
    text-align: left;
  }

  & > ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    & > * {
      margin-bottom: 1rem;
    }
  }
  & > *:nth-child(2) {
    grid-area: ro;
  }

  & > *:nth-child(3) {
    grid-area: rt;
  }
`;

const FeatureItem = styled.li`
  list-style: square;
  list-style-position: inside;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: left;
  color: ${(props) => props.theme.colors.secondary};
`;

const ImageSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
  gap: 3rem;
`;

const ImageItem = styled.div<ImageItemProps>`
  width: 100%;
  height: auto;
  padding-top: 70%;

  background-image: ${(props) => `url(${props.image})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const OtherRoomSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 5rem;
  align-items: center;
  justify-content: start;
`;

const OtherRoomsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
  grid-template-rows: repeat(1, 50vh);
  gap: 3rem;
`;
export {
  Container,
  SummeryWrapper,
  SummeryItem,
  DetailsWrapper,
  DescriptionWrapper,
  Description,
  FeaturesWrapper,
  FeatureItem,
  ImageSection,
  ImageItem,
  OtherRoomSection,
  OtherRoomsGroup,
};
