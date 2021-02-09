import { ReactNode } from "react";
import { Heading } from "./HeadingPrimaryStyles";

interface Props {
  children: ReactNode;
  color: string;
  alignment?: AlignmentProps;
}

const HeadingMain: React.FC<Props> = ({
  children,
  color,
  alignment = "center",
}: Props): JSX.Element => {
  return (
    <Heading color={color} alignment={alignment}>
      {children}
    </Heading>
  );
};

export default HeadingMain;
