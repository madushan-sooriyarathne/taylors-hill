import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import HeadingSub from "../../headings/heading-sub/HeadingSub";

import { Wrapper, ShadowTitle } from "./MainTitleStyles";

interface Props {
  mainHeading: string;
  subHeading?: string;
  shadowHeading?: string;
  centered?: boolean;
}

const MainTitle: React.FC<Props> = ({
  mainHeading,
  subHeading,
  shadowHeading,
  centered = true,
}: Props): JSX.Element => {
  return (
    <Wrapper centered={centered}>
      <ShadowTitle centered={centered}>{shadowHeading}</ShadowTitle>
      <HeadingPrimary>{mainHeading}</HeadingPrimary>
      <HeadingSub>{subHeading}</HeadingSub>
    </Wrapper>
  );
};

export default MainTitle;
