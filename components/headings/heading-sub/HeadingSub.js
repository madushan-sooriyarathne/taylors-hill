import { Heading } from "./HeadingSubStyles";

const HeadingSub = ({ color, children, alignment }) => (
  <Heading color={color} alignment={alignment}>
    {children}
  </Heading>
);

export default HeadingSub;
