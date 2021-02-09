import styled from "styled-components";

interface HeadingProps {
  alignment: AlignmentProps;
}

const Heading = styled.h2<HeadingProps>`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: ${(props) => props.alignment};
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.color || props.theme.colors.secondary};
`;

export { Heading };
