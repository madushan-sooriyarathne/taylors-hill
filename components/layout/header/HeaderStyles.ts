import styled from "styled-components";

interface NavLinkProps {
  current: boolean;
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

  width: 100%;
  height: auto;
  padding: 3rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;

  ${(props) => props.theme.responsive.smallest} {
    padding: 3rem;
  }
`;

const Logo = styled.img`
  width: 10rem;
  height: 10rem;
  cursor: pointer;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > *:not(:last-child) {
    margin-right: 3rem;
  }

  ${(props) => props.theme.responsive.mediumLarge} {
    display: none;
  }
`;

const NavLink = styled.a<NavLinkProps>`
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  position: relative;
  opacity: 1;
  transform-origin: 50% 50%;
  transition: opacity 0.2s ease-in;

  &::before {
    content: "";
    visibility: ${(props) => (props.current ? "visible" : "hidden")};
    position: absolute;
    top: 0;
    left: 0;
    width: 120%;
    height: 120%;
    transform-origin: 0 0;
    transform: translate(-10%, -10%) scaleX(0.4);
    background-color: ${(props) => props.theme.colors.primary};
    z-index: -1;
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    &::before {
      transform: translate(-10%, -10%) scaleX(1);
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 12;

  & > *:first-child {
    margin-right: 2rem;
  }
`;

export { Container, Logo, ButtonWrapper, NavBar, NavLink };
