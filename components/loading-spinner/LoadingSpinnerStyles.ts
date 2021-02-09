import styled, { keyframes } from "styled-components";

interface SpinnerProps {
  small: boolean;
}

const spin = keyframes`

    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    } 
`;

const Spinner = styled.div<SpinnerProps>`
  width: ${(props) => (props.small ? "2rem" : "5rem")};
  height: ${(props) => (props.small ? "2rem" : "5rem")};
  display: inline-block;
  border: ${(props) =>
    props.small
      ? `2px solid ${props.theme.colors.secondaryLight}`
      : `3px solid ${props.theme.colors.secondaryLight}`};
  border-radius: 50%;
  border-top-color: ${(props) => props.theme.colors.secondary};
  animation: ${spin} 1s ease-in infinite;
`;

export { Spinner };
