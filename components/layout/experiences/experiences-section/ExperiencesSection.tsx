import HeadingSecondary from "../../../headings/heading-secondary/HeadingSecondary";
import MainTitle from "../../main-title/MainTitle";
import Button from "../../../buttons/button/Button";
import ImageBox from "../../../image-box/ImageBox";

import {
  Section,
  ContentWrapper,
  Content,
  ContentItem,
  Description,
} from "./ExperiencesSectionStyles";

interface Props {
  experiences: Excursion[];
}

const ExperiencesSection: React.FC<Props> = ({
  experiences,
}: Props): JSX.Element => {
  return (
    <Section>
      <MainTitle
        mainHeading="Experience"
        subHeading="Things we offer that keep you occupied"
        shadowHeading="Things to do"
        centered
      />
      <ContentWrapper>
        {experiences.map((item: Excursion, index: number) => {
          if (index < 3)
            return (
              <ImageBox
                image={item.image}
                title={item.title}
                url={`/experience/${item.id}`}
                key={item.id}
                withButton
              />
            );
        })}
        <Content>
          <ContentItem>
            <HeadingSecondary>Activities</HeadingSecondary>
            <Description>
              Take time to relax, enjoy and explore! There’s enough to keep
              guests occupied with the variety of activates that Taylors Hill
              offers within the premises.
            </Description>
          </ContentItem>
          <ContentItem>
            <HeadingSecondary>Excursions</HeadingSecondary>
            <Description>
              A stay would not be completed without having explored the various
              attractions that are within short distance of Taylors Hill.
            </Description>
          </ContentItem>
          <Button route="/experience" invert>
            Explore
          </Button>
        </Content>
      </ContentWrapper>
    </Section>
  );
};

export default ExperiencesSection;
