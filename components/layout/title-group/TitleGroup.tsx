import { ReactNode } from "react";
import { Group } from "./TitleGroupStyles";

interface Props {
  children: ReactNode;
  centered?: boolean;
}

const TitleGroup: React.FC<Props> = ({
  children,
  centered = true,
}: Props): JSX.Element => {
  return <Group centered={centered}>{children}</Group>;
};

export default TitleGroup;
