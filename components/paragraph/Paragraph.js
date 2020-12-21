import { Para } from "./ParagraphStyles";

const Paragraph = ({ children, alignment, large }) => {
  return (
    <Para alignment={alignment} large={large}>
      {children}
    </Para>
  );
};

export default Paragraph;
