import { Heading } from "./HeadingSecondaryStyles";

const HeadingSecondary = ({ children, color, alignment }) => (
  <Heading color={color} alignment={alignment}>
    {children}
  </Heading>
);

export default HeadingSecondary;
