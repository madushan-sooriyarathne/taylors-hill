import { useRouter } from "next/router";
import { Button } from "./CTAButtonStyles";

const CTAButton = ({ route, onClick, children }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(route);
  };

  return <Button onClick={onClick || handleClick}>{children}</Button>;
};

export default CTAButton;
