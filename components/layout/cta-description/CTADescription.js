import MainTitle from "../main-title/MainTitle";
import Button from "../../buttons/button/Button";
import { Wrapper, Description } from "./CTADescriptionStyles";

const CTADescription = ({
  mainHeading,
  route,
  description,
  alignment,
  subHeading = "",
  shadowHeading = "",
}) => {
  return (
    <Wrapper>
      <MainTitle
        mainHeading={mainHeading}
        shadowHeading={shadowHeading}
        subHeading={subHeading}
      />
      <Description
        alignment={alignment}
        dangerouslySetInnerHTML={{ __html: description }}
      ></Description>
      {route && (
        <Button route={route.url} invert={true}>
          {route.name}
        </Button>
      )}
    </Wrapper>
  );
};

export default CTADescription;
