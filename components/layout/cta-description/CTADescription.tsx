import MainTitle from "../main-title/MainTitle";
import Button from "../../buttons/button/Button";
import { Wrapper, Description } from "./CTADescriptionStyles";

interface Props {
  mainHeading: string;
  subHeading?: string;
  shadowHeading?: string;
  description: string;
  alignment?: AlignmentProps;

  route?: {
    url: string;
    name: string;
  };
}

const CTADescription: React.FC<Props> = ({
  mainHeading,
  route,
  description,
  subHeading,
  shadowHeading,
  alignment = "center",
}: Props): JSX.Element => {
  return (
    <Wrapper>
      <MainTitle
        mainHeading={mainHeading}
        shadowHeading={shadowHeading}
        subHeading={subHeading}
        centered
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
