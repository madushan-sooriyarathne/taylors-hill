import { Heading } from "./HeadingPrimaryStyles";

const HeadingMain = ({ children, color }) => {
  return <Heading color={color}>{children}</Heading>;
};

export default HeadingMain;
