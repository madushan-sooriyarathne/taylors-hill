import styled from "styled-components";

interface HeadingProps {
  alignment: "center" | "left" | "right";
}

const Heading = styled.h1<HeadingProps>`
  font-size: 5rem;
  font-weight: 900;
  text-align: ${(props) => props.alignment};
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.secondary};
`;

export { Heading };