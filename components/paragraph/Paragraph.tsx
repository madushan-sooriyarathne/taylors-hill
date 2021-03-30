import { ReactNode } from "react";
import { Para } from "./ParagraphStyles";

interface Props {
  children: ReactNode;
  alignment?: AlignmentProps;
  large?: boolean;
}

const Paragraph: React.FC<Props> = ({
  children,
  alignment = "left",
  large = false,
}: Props): JSX.Element => {
  return (
    <Para
      alignment={alignment}
      large={large}
      dangerouslySetInnerHTML={{ __html: children as string }}
    >
      {/* {children} */}
    </Para>
  );
};

export default Paragraph;
