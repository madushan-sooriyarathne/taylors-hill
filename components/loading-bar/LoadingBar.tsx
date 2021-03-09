import { OuterLine, InnerLine } from "./LoadingBarStyles";

const LoadingBar: React.FC = (): JSX.Element => {
  return (
    <OuterLine>
      <InnerLine />
    </OuterLine>
  );
};

export default LoadingBar;
