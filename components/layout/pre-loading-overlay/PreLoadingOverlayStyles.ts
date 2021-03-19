import styled from "styled-components";

interface PageProps {
  show: boolean;
}

const Page = styled.div<PageProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;

  background-color: ${(props) => props.theme.colors.bgLight};

  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? "1" : "0")};

  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease-out;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3rem;
`;

const Logo = styled.img`
  width: 15rem;
  height: 15rem;
  margin-bottom: 3rem;
`;

export { Page, Container, Logo };
