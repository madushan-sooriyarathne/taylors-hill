import styled from "styled-components";

interface GroupProps {
  centered: boolean;
}

const Group = styled.div<GroupProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.centered ? "center" : "left")};
  justify-content: center;

  & > * {
    text-align: ${(props) => (props.centered ? "center" : "left")};
  }

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export { Group };
