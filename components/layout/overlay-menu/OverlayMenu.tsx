import { useContext } from "react";
import {
  MenuOpenContext,
  MenuOpenDispatchContext,
} from "../../../context/MenuContext";
import Button from "../../buttons/button/Button";

import { MenuOverlay, CloseButtonWrapper } from "./OverlayMenuStyles";

const OverlayMenu: React.FC = (): JSX.Element => {
  // context subscribers
  const menuOpen: boolean = useContext<boolean>(MenuOpenContext);
  const setMenuOpen: DispatchFn = useContext<DispatchFn | null>(
    MenuOpenDispatchContext
  ) as DispatchFn;

  // Menu button click event
  const closeMenu = (): void => {
    document.body.style.overflowY = "auto";
    setMenuOpen(false);
  };

  return (
    <MenuOverlay menuOpen={menuOpen}>
      <CloseButtonWrapper>
        <Button onClick={closeMenu} invert>
          Close
        </Button>
      </CloseButtonWrapper>
    </MenuOverlay>
  );
};

export default OverlayMenu;
