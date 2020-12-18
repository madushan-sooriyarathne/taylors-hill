import { Heading } from "./HeadingPrimaryStyles";

const HeadingMain = ({ children, color, alignment }) => {
  return (
    <Heading color={color} alignment={alignment}>
      {children}
    </Heading>
  );
};

export default HeadingMain;
