import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "./RouteButtonStyles";

interface Props {
  route: string;
  children: ReactNode;
  color?: string;
  alignment?: AlignmentProps;
}

const RouteButton: React.FC<Props> = ({
  route,
  color,
  children,
  alignment = "center",
}: Props): JSX.Element => {
  return (
    <Link href={route}>
      <Button color={color} alignment={alignment}>
        {children}
      </Button>
    </Link>
  );
};

export default RouteButton;
