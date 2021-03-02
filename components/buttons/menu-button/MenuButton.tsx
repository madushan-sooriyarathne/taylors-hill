import { useContext } from "react";
import {
  MenuOpenContext,
  MenuOpenDispatchContext,
} from "../../../context/MenuContext";
import { Button } from "./MenuButtonStyles";

interface Props {
  inverted?: boolean;
}

const MenuButton: React.FC<Props> = ({
  inverted = false,
}: Props): JSX.Element => {
  // context subscriber;
  const menuOpen: boolean = useContext<boolean>(MenuOpenContext);
  const setMenuOpen: DispatchFn = useContext<DispatchFn | null>(
    MenuOpenDispatchContext
  ) as DispatchFn;

  // Menu Open handler
  const handleMenuOpen = () => {
    setMenuOpen((prevState: boolean): boolean => {
      // set the scroll off
      prevState
        ? (document.body.style.overflowY = "auto")
        : (document.body.style.overflowY = "hidden");

      return !prevState;
    });
  };

  return (
    <Button menuOpen={menuOpen} inverted={inverted} onClick={handleMenuOpen}>
      <span />
      <span />
      <span />
    </Button>
  );
};

export default MenuButton;
