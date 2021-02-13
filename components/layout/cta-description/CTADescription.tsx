import MainTitle from "../main-title/MainTitle";
import Button from "../../buttons/button/Button";
import { Wrapper, Description } from "./CTADescriptionStyles";

interface Props {
  data: SectionData;
  alignment?: AlignmentProps;
}

const CTADescription: React.FC<Props> = ({
  data,
  alignment = "center",
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
      {data.route && (
        <Button route={data.route.url} invert={true}>
          {data.route.name}
        </Button>
      )}
    </Wrapper>
  );
};

export default CTADescription;
