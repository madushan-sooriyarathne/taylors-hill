import styled from "styled-components";
import { animated } from "react-spring";

interface MenuOverlayProps {
  menuOpen: boolean;
}

const MenuOverlay = styled.div<MenuOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  width: 100vw;
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: none;
  align-items: center;
  justify-content: flex-start;

  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url("/static/img/story-cover.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 10;

  border-left: ${(props) =>
    `${props.theme.sizes.frameSize} solid ${props.theme.colors.white}`};
  border-right: ${(props) =>
    `${props.theme.sizes.frameSize} solid ${props.theme.colors.white}`};

  transition: transform 0.4s ease-in-out;

  transform: ${(props) =>
    props.menuOpen ? "translateY(0)" : "translateY(-100%)"};

  ${(props) => props.theme.responsive.mediumLarge} {
    display: flex;
  }
`;

const NavLinkGroup = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 5rem;

  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const NavLink = styled(animated.a)`
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.secondary};
  text-decoration: none;
  outline: none;

  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.secondaryLight};
  }
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 5rem;
  right: 5rem;
`;

export { MenuOverlay, CloseButtonWrapper, NavLinkGroup, NavLink };
