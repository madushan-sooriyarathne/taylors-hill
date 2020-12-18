import styled from "styled-components";

const Heading = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  text-align: ${(props) => props.alignment || "center"};
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.secondary};
`;

export { Heading };
