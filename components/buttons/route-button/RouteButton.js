import Link from "next/link";
import { Button } from "./RouteButtonStyles";

const RouteButton = ({ route, color, alignment, children }) => {
  return (
    <Link href={route}>
      <Button color={color} alignment={alignment}>
        {children}
      </Button>
    </Link>
  );
};

export default RouteButton;
