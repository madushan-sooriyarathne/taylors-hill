import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    text-align: center;
  }
`;

export { Wrapper };
