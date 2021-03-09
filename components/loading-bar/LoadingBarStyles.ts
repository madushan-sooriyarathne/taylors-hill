import styled, { keyframes } from "styled-components";

const slide = keyframes`
0%{
    transform-origin: left;
    transform: scalex(0.3);
  }
  
  25%{
    transform-origin: left;
    transform: scalex(1);
  }
  26%{
    transform-origin: right;
    transform: scalex(1);
  }
  50%{
    transform-origin: right;
    transform: scalex(0.3);
  }
  
  75%{
    transform-origin: right;
    transform: scalex(1);
  }
  76%{
    transform-origin: left;
    transform: scalex(1);
  }
  100%{
    transform-origin: left;
    transform: scalex(0.3);
  }
`;

const OuterLine = styled.div`
  width: 30rem;
  height: 3px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 3px;
  overflow: hidden;

  margin: 3rem;
`;

const InnerLine = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.secondaryLight};

  animation: ${slide} 2s ease-in-out infinite;
`;

export { OuterLine, InnerLine };
