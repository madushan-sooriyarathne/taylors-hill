import styled, { keyframes } from "styled-components";

const fade = keyframes`
    from {
        opacity: 1;
        visibility: visible;
    } 
    to {
        opacity: 0;
        visibility: hidden;
    }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  background-color: ${(props) => props.theme.colors.bgLight};
  opacity: 0;
  visibility: hidden;
  animation: ${fade} 0.3s ease-in-out;
`;

export { Overlay };
