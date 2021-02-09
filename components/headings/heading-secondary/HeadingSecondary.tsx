import { ReactNode } from "react";
import { Heading } from "./HeadingSecondaryStyles";

interface Props {
  children: ReactNode;
  color?: string;
  alignment?: AlignmentProps;
}

const HeadingSecondary: React.FC<Props> = ({
  children,
  color,
  alignment = "center",
}: Props): JSX.Element => (
  <Heading color={color} alignment={alignment}>
    {children}
  </Heading>
);

export default HeadingSecondary;
