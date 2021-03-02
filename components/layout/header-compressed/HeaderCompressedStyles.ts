import styled from "styled-components";
import { animated } from "react-spring";
import { NavBar, ButtonWrapper } from "../header/HeaderStyles";

interface CompressedNavLinkProps {
  current: boolean;
}

const CompressedContainer = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 7;

  width: 100%;
  height: auto;
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};

  ${(props) => props.theme.responsive.smallest} {
    padding: 2rem 3rem;
  }
`;

const CompressedNavLink = styled.a<CompressedNavLinkProps>`
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;
  color: ${(props) => props.theme.colors.secondary};
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
    width: 1.2rem;
    height: 1.2rem;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primary};
    z-index: -1;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const CompressedLogo = styled.img`
  width: 15rem;
  height: auto;
  cursor: pointer;
`;

export {
  CompressedContainer,
  NavBar,
  CompressedLogo,
  CompressedNavLink,
  ButtonWrapper,
};
