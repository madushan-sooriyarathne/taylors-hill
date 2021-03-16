import styled from "styled-components";

const Container = styled.section`
  grid-column: content-start / content-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primaryLight};
`;

export { Container, Heading };
