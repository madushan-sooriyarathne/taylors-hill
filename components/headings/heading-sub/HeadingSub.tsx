import { ReactNode } from "react";
import { Heading } from "./HeadingSubStyles";

interface Props {
  children: ReactNode;
  color: string;
  alignment?: AlignmentProps;
}

const HeadingSub: React.FC<Props> = ({
  color,
  children,
  alignment = "center",
}: Props): JSX.Element => (
  <Heading color={color} alignment={alignment}>
    {children}
  </Heading>
);

export default HeadingSub;
