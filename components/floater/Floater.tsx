import { useEffect, useState } from "react";
import { Container, Icon } from "./FloaterStyles";

const Floater: React.FC = (): JSX.Element => {
  const [show, toggleShow] = useState<boolean>(false);

  useEffect(() => {
    // add scroll event listener to document object;

    window.addEventListener("scroll", () => {
      const yCoords: number = window.scrollY;

      if (yCoords >= 200) {
        toggleShow(true);
      } else {
        toggleShow(false);
      }
    });
  }, []);

  const handleScrollUp = () => {
    window.scroll(0, 0);
  };

  return (
    <Container show={show} onClick={handleScrollUp}>
      <Icon>
        <use xlinkHref="/static/svg/sprites.svg#up"></use>
      </Icon>
    </Container>
  );
};

export default Floater;
