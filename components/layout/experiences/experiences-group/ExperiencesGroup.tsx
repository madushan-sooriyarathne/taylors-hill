import { Group, Section } from "./ExperiencesGroupStyles";
import ImageBox from "../../../image-box/ImageBox";
import MainTitle from "../../main-title/MainTitle";

interface Props {
  experiences: Excursion[];
  mainHeading: string;
  subHeading: string;
}

const ExperiencesGroup: React.FC<Props> = ({
  experiences,
  mainHeading,
  subHeading,
}: Props): JSX.Element => {
  return (
    <Section>
      <MainTitle
        mainHeading={mainHeading}
        subHeading={subHeading}
        shadowHeading={mainHeading}
      />
      <Group>
        {experiences.map((item: Excursion) => (
          <ImageBox
            key={item.id}
            {...item}
            url={`/experience/${item.id}`}
            withButton
          />
        ))}
      </Group>
    </Section>
  );
};

export default ExperiencesGroup;
