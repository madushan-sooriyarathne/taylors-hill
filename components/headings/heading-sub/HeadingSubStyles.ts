import styled from "styled-components";

interface HeadingProps {
  alignment: AlignmentProps;
}

const Heading = styled.h3<HeadingProps>`
  font-size: 1.8rem;
  font-weight: 300;
  font-family: ${(props) => props.theme.fonts.primary};
  letter-spacing: 1px;
  color: ${(props) => props.color || props.theme.colors.secondary};
  text-align: ${(props) => props.alignment};
`;

export { Heading };
