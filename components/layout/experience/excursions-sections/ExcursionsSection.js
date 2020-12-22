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
} from "./ExcursionSectionStyles";

const ExcursionsSection = ({ excursions }) => {
  return (
    <Section>
      <MainTitle
        mainHeading="Experience"
        subHeading="Things we offer that keep you occupied"
        shadowHeading="Things to do"
      />
      <ContentWrapper>
        {excursions.map((item, index) => {
          if (index < 3)
            return (
              <ImageBox title={item.title} image={item.image} key={item.id} />
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

export default ExcursionsSection;
