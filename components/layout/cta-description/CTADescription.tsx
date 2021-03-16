import MainTitle from "../main-title/MainTitle";
import Button from "../../buttons/button/Button";
import { Wrapper, Description } from "./CTADescriptionStyles";

interface Props {
  data: SectionData;
  alignment?: AlignmentProps;
  withButton?: boolean;
}

const CTADescription: React.FC<Props> = ({
  data,
  alignment = "center",
  withButton = true,
}: Props): JSX.Element => {
  return (
    <Wrapper>
      <MainTitle
        mainHeading={data.mainHeading}
        shadowHeading={data.shadowHeading}
        subHeading={data.subHeading}
        centered
      />
      <Description
        alignment={alignment}
        dangerouslySetInnerHTML={{ __html: data.description }}
      ></Description>
      {withButton && data.route && (
        <Button route={data.route.url} invert={true}>
          {data.route.name}
        </Button>
      )}
    </Wrapper>
  );
};

export default CTADescription;
