import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import HeadingSub from "../../headings/heading-sub/HeadingSub";

import { Wrapper, ShadowTitle } from "./MainTitleStyles";

const MainTitle = ({ mainHeading, subHeading, shadowHeading }) => {
  return (
    <Wrapper>
      <ShadowTitle>{shadowHeading}</ShadowTitle>
      <HeadingPrimary>{mainHeading}</HeadingPrimary>
      <HeadingSub>{subHeading}</HeadingSub>
    </Wrapper>
  );
};

export default MainTitle;
