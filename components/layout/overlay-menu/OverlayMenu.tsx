import { useCallback, useContext } from "react";
import { NextRouter, useRouter } from "next/router";

import {
  MenuOpenContext,
  MenuOpenDispatchContext,
} from "../../../context/MenuContext";
import Button from "../../buttons/button/Button";

import {
  MenuOverlay,
  CloseButtonWrapper,
  NavLinkGroup,
  NavLink,
} from "./OverlayMenuStyles";

import { navLinks } from "../../../site-data";
import { useTrail } from "react-spring";

const OverlayMenu: React.FC = (): JSX.Element => {
  const router: NextRouter = useRouter();

  // context subscribers
  const menuOpen: boolean = useContext<boolean>(MenuOpenContext);
  const setMenuOpen: DispatchFn = useContext<DispatchFn | null>(
    MenuOpenDispatchContext
  ) as DispatchFn;

  // Nav Links transition
  const navLinksAnimationTrail = useTrail(navLinks.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    transform: menuOpen ? "translateX(0)" : "translateX(-5px)",
    opacity: menuOpen ? 1 : 0,
    from: { opacity: 0, transform: "translateX(-5px)" },
    delay: 500,
  });

  // Menu button click event
  const closeMenu = (): void => {
    document.body.style.overflowY = "auto";
    setMenuOpen(false);
  };

  const handleNavLinkClick = useCallback((route: string): void => {
    // close the menu after 0.5 sec
    setTimeout(() => {
      router.push(route);
      document.body.style.overflowY = "auto";
    }, 500);
    setMenuOpen(false);
  }, []);

  return (
    <MenuOverlay menuOpen={menuOpen}>
      <CloseButtonWrapper>
        <Button onClick={closeMenu} invert>
          Close
        </Button>
      </CloseButtonWrapper>
      <NavLinkGroup>
        {navLinksAnimationTrail.map((props, index) => (
          <NavLink
            key={navLinks[index].id}
            style={props}
            onClick={() => handleNavLinkClick(navLinks[index].route)}
          >
            {navLinks[index].name}
          </NavLink>
        ))}
      </NavLinkGroup>
    </MenuOverlay>
  );
};

export default OverlayMenu;
