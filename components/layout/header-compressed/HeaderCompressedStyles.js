import styled from "styled-components";
import { animated } from "react-spring";
import { NavBar, NavLink, Logo } from "../header/HeaderStyles";

const CompressedContainer = styled(animated.div)`
  position: fixed;
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
  background-color: ${(props) => props.theme.colors.white};
`;

const CompressedNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.black};
`;

const CompressedLogo = styled(Logo)`
  width: 15rem;
  height: auto;
`;

export { CompressedContainer, NavBar, CompressedLogo, CompressedNavLink };
