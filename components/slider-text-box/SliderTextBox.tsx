import { ReactNode } from "react";
import { Wrapper } from "./SliderTextBoxStyles";

interface Props {
  children: ReactNode;
}

const SliderTextBox: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return <Wrapper>{children}</Wrapper>;
};

export default SliderTextBox;
