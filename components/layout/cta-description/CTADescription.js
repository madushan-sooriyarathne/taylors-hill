import MainTitle from "../main-title/MainTitle";
import Button from "../../buttons/button/Button";
import { Wrapper, Description } from "./CTADescriptionStyles";

const CTADescription = ({
  mainHeading,
  subHeading,
  route,
  description,
  shadowHeading = "",
}) => {
  return (
    <Wrapper>
      <MainTitle
        mainHeading={mainHeading}
        shadowHeading={shadowHeading}
        subHeading={subHeading}
      />
      <Description>{description}</Description>
      <Button route={route.url} invert={true}>
        {route.name}
      </Button>
    </Wrapper>
  );
};

export default CTADescription;
