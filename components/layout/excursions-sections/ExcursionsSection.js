import HeadingSecondary from "../../headings/heading-secondary/HeadingSecondary";
import MainTitle from "../main-title/MainTitle";
import Button from "../../buttons/button/Button";
import ImageBox from "../../image-box/ImageBox";

import {
  Section,
  ContentWrapper,
  Content,
  ContentItem,
  Description,
} from "./ExcursionSectionStyles";

const excursions = [
  {
    id: 0,
    image: "/static/img/experience/snooker.jpg",
    url: "/experience/snooker",
    title: "Snooker",
  },
  {
    id: 1,
    image: "/static/img/experience/croquet.jpg",
    url: "/experience/croquet",
    title: "Croquet",
  },
  {
    id: 2,
    image: "/static/img/experience/infinity-pool.jpg",
    url: "/experience/infinity-pool",
    title: "Infinity Pool",
  },
];

const ExcursionsSection = () => {
  return (
    <Section>
      <MainTitle
        mainHeading="Experience"
        subHeading="Things we offer that keep you occupied"
        shadowHeading="Things to do"
      />
      <ContentWrapper>
        {excursions.map((item) => (
          <ImageBox {...item} key={item.id} />
        ))}
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
