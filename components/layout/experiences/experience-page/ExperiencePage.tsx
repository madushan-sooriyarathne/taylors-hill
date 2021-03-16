import MainTitle from "../../main-title/MainTitle";
import ImageBox from "../../../image-box/ImageBox";
import HeadingSecondary from "../../../headings/heading-secondary/HeadingSecondary";
import Paragraph from "../../../paragraph/Paragraph";
import ImageCarousel from "../../../image-carousel/ImageCarousel";

import {
  Container,
  Experience,
  ExperienceDetails,
  OtherExperiencesGroup,
  OtherExperiencesSection,
} from "./ExperiencePageStyles";

interface Props {
  primaryExperience: Excursion;
  otherExperiences: Excursion[];
}

const ExperiencePage: React.FC<Props> = ({
  primaryExperience,
  otherExperiences,
}: Props): JSX.Element => {
  return (
    <Container>
      <Experience>
        <ExperienceDetails>
          <HeadingSecondary>{primaryExperience.title}</HeadingSecondary>
          <Paragraph alignment="justify">
            {primaryExperience.description}
          </Paragraph>
        </ExperienceDetails>
        <ImageCarousel images={primaryExperience.images} width="100%" />
      </Experience>
      <OtherExperiencesSection>
        <MainTitle
          mainHeading="Other Experiences"
          shadowHeading="Things to do"
        />
        <OtherExperiencesGroup>
          {otherExperiences.map((item: Excursion, index: number) => {
            if (index < 3) {
              return (
                <ImageBox
                  key={item.id}
                  image={item.image}
                  id={item.id}
                  title={item.title}
                  withButton
                />
              );
            }
          })}
        </OtherExperiencesGroup>
      </OtherExperiencesSection>
    </Container>
  );
};

export default ExperiencePage;
