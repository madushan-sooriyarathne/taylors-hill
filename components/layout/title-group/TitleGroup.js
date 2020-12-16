import { Group } from "./TitleGroupStyles";

const TitleGroup = ({ children, centered }) => {
  return <Group centered={centered}>{children}</Group>;
};

export default TitleGroup;
