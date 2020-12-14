import { useRouter } from "next/router";
import { Btn } from "./ButtonStyles";

const Button = ({ route, onClick, children, invert = false }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(route);
  };

  return (
    <Btn onClick={onClick || handleClick} invert={invert}>
      <span>{children}</span>
    </Btn>
  );
};

export default Button;
