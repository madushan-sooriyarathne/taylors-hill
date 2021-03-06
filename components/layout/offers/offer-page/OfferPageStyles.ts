import styled from "styled-components";

const Container = styled.section`
  grid-column: content-start / content-end;

  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: repeat(2, max-content);
  grid-auto-rows: max-content;
  grid-template-areas:
    "su de"
    "ot ot";
  align-items: start;
  justify-items: start;

  ${(props) => props.theme.responsive.medium} {
    grid-template-columns: repeat(1, minmax(min-content, 1fr));
    grid-template-areas:
      "su"
      "de"
      "ot";
  }
`;

const SummeryWrapper = styled.div`
  grid-area: su;
  width: 100%;
  height: 100%;

  padding: 5rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, max-content) 1fr;
  align-items: start;
  justify-content: start;
  gap: 2rem;

  background-color: ${(props) => props.theme.colors.white};

  & > *:first-child {
    margin-bottom: -2rem;
  }

  & > *:last-child {
    align-self: end;
  }
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > p {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: left;
    color: ${(props) => props.theme.colors.primary};
  }

  & > span {
    font-size: 2rem;
    font-weight: 300;
    text-align: left;
    letter-spacing: 1px;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const Validity = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.secondary};
  text-align: left;
`;

const DetailsWrapper = styled.div`
  grid-area: de;
  padding: 5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  gap: 5rem;
  align-items: start;
  justify-items: start;

  ${(props) => props.theme.responsive.small} {
    padding: 5rem 0;
  }
`;

const DetailsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 2rem;
  align-items: start;
  justify-items: start;
`;

const ItemsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  & > li {
    margin-left: 3rem;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    text-align: left;
    list-style: circle;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const OtherOffersSection = styled.section`
  grid-area: ot;
  margin: 15rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  gap: 5rem;
  align-items: center;
  justify-content: center;
`;

const OtherOffersGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-auto-rows: max-content;
  gap: 3rem;

  ${(props) => props.theme.responsive.medium} {
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
  }

  ${(props) => props.theme.responsive.smaller} {
    grid-template-columns: minmax(min-content, 1fr);
  }
`;

export {
  Container,
  SummeryWrapper,
  PriceRow,
  Validity,
  DetailsWrapper,
  DetailsSection,
  ItemsList,
  OtherOffersSection,
  OtherOffersGroup,
};
