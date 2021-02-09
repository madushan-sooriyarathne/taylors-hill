import styled from "styled-components";

interface ParaProps {
  large: boolean;
  alignment: AlignmentProps;
}

const Para = styled.p<ParaProps>`
  font-size: ${(props) => (props.large ? "1.8rem" : "1.5rem")};
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 2rem;
  text-align: ${(props) => props.alignment};
  color: ${(props) => props.theme.colors.secondary};

  & > b,
  & > strong {
    font-weight: 700;
  }

  & > i,
  & > em {
    font-style: italic;
  }

  & > small {
    font-size: 1.3rem;
  }

  & > mark {
    background-color: ${(props) => props.theme.colors.bgDark};
  }
`;

export { Para };
