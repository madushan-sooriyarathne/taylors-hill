import { NextRouter, useRouter } from "next/router";
import { ReactNode, MouseEvent } from "react";
import { Btn } from "./ButtonStyles";

interface RequiredProps {
  children: ReactNode;
  invert?: boolean;
}

interface OptionalPropsOne {
  route: string;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
}

interface OptionalPropsTwo {
  route?: string;
  onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
}

type Props = RequiredProps & (OptionalPropsOne | OptionalPropsTwo);

const Button: React.FC<Props> = ({
  route,
  onClick,
  children,
  invert = false,
}: Props): JSX.Element => {
  const router: NextRouter = useRouter();

  function handleClick(): void {
    if (route) {
      router.push(route);
    }
  }

  return (
    <Btn onClick={onClick || handleClick} invert={invert}>
      <span>{children}</span>
    </Btn>
  );
};

export default Button;
