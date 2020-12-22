import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.centered ? "center" : "flex-start")};
  justify-content: center;

  position: relative;

  & > * {
    text-align: ${(props) => (props.centered ? "center" : "left")};
    z-index: 3;
  }
`;

const ShadowTitle = styled.span`
  position: absolute;
  top: 0;
  left: ${(props) => (props.centered ? "50%" : "0%")};
  transform: ${(props) =>
    props.centered ? "translate(-50%, -50%)" : "translate(0, -50%)"};
  z-index: 2;

  font-size: 9rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primaryLight};
  letter-spacing: 3px;
  white-space: nowrap;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.primary};
  opacity: 0.3;
`;

export { Wrapper, ShadowTitle };
