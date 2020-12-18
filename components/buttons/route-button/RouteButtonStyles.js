import styled from "styled-components";

const Button = styled.a`
  outline: none;
  border: none;

  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: ${(props) => props.alignment || "center"};
  color: ${(props) => props.color || props.theme.colors.primary};
  transition: transform 0.2s ease-out;
  cursor: pointer;

  &:hover {
    transform: translateX(3px);
  }
`;

export { Button };
