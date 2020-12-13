import styled from "styled-components";

const Button = styled.button`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  background-color: transparent;
  padding: 1rem 2rem;
  border: ${(props) => `2px solid ${props.theme.colors.white}`};
  outline: none;
  cursor: pointer;

  transition: background-color 0.2s ease-in, color 0.2s ease-in;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
  }
`;

export { Button };
