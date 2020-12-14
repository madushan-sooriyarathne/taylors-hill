import styled from "styled-components";

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.secondary};
`;

export { Heading };
