import styled, { keyframes } from "styled-components";

const spin = keyframes`

    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    } 
`;

const Spinner = styled.div`
  width: 5rem;
  height: 5rem;
  display: inline-block;
  border: ${(props) => `3px solid ${props.theme.colors.bgDark}`};
  border-radius: 50%;
  border-top-color: ${(props) => props.theme.colors.white};
  animation: ${spin} 1s ease-in infinite;
`;

export { Spinner };
