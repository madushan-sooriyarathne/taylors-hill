import { Group, Section } from "./ExperiencesGroupStyles";
import ImageBox from "../../../image-box/ImageBox";
import MainTitle from "../../main-title/MainTitle";

const ExperiencesGroup = ({ experiences, mainHeading, subHeading }) => {
  console.log(experiences);

  return (
    <Section>
      <MainTitle
        mainHeading={mainHeading}
        subHeading={subHeading}
        shadowHeading={mainHeading}
      />
      <Group>
        {experiences.map((item) => (
          <ImageBox key={item.id} {...item} withButton />
        ))}
      </Group>
    </Section>
  );
};

export default ExperiencesGroup;
