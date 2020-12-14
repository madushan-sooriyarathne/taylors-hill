import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.bgMedium};
  min-height: 120vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: [main-start] 1fr [main-end footer-start] min-content [ footer-end];
  position: relative;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(5rem, 1fr) [content-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [content-end] minmax(5rem, 1fr)
    [full-end];
`;

export { Container, ContentWrapper };
