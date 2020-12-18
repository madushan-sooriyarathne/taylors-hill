import styled from "styled-components";

const Heading = styled.h3`
  font-size: 1.8rem;
  font-weight: 300;
  font-family: ${(props) => props.theme.fonts.primary};
  letter-spacing: 1px;
  color: ${(props) => props.color || props.theme.colors.secondary};
  text-align: ${(props) => props.alignment || "center"};
`;

export { Heading };
