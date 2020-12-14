import styled from "styled-components";

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.centered ? "center" : "left")};
  justify-content: center;

  & > * {
    text-align: ${(props) => (props.centered ? "center" : "left")};
  }
`;

export { Group };
