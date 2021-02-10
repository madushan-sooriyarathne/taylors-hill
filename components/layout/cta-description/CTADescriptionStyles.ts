import styled from "styled-components";

interface DescriptionProps {
  alignment: AlignmentProps;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 5rem;
  }
`;

const Description = styled.p<DescriptionProps>`
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.secondary};
  text-align: ${(props) => props.alignment};
`;

export { Wrapper, Description };
