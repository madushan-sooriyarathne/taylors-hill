import CoverImage from "../components/layout/cover-image/CoverImage";
import ImageContentSection from "../components/layout/Image-content-section/ImageContentSection";
import CTADescription from "../components/layout/cta-description/CTADescription";
import Page from "../components/layout/page/Page";
import DoubleImageGrid from "../components/layout/double-image-grid/DoubleImageGrid";

import { GetStaticProps, GetStaticPropsResult } from "next";
import { getSingleEntry, serializeAssetUrls } from "../utils/contentful";

interface Props {
  teaHistory: SectionData;
  taylorsHillHistory: SectionData;
}

const Story: React.FC<Props> = ({
  teaHistory,
  taylorsHillHistory,
}: Props): JSX.Element => {
  return (
    <Page>
      <CoverImage
        image="/static/img/story-cover.webp"
        title="Story"
        subTitle="The Tale of Taylors Hill & Authentic Ceylon Tea"
      />
      <ImageContentSection image={teaHistory.image} reversed>
        <CTADescription
          data={teaHistory}
          alignment="justify"
          withButton={false}
        />
      </ImageContentSection>
      <DoubleImageGrid
        images={["/static/img/story/01.webp", "/static/img/story/03.webp"]}
      />
      <ImageContentSection image={taylorsHillHistory.image}>
        <CTADescription
          data={taylorsHillHistory}
          alignment="justify"
          withButton={false}
        />
      </ImageContentSection>
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  // fetch tea history data from contentful and format image links
  const teaHistory: SectionData = serializeAssetUrls<
    ContentfulSectionDataFields,
    SectionData
  >(await getSingleEntry("01SOoX9MdPWA89FXUuYpt"), "image");

  // fetch taylors Hill History data from contentful and format image links
  const taylorsHillHistory: SectionData = serializeAssetUrls<
    ContentfulSectionDataFields,
    SectionData
  >(await getSingleEntry("5lUKNDCwOxMNWyQj5Mtjmd"), "image");

  return {
    props: {
      teaHistory,
      taylorsHillHistory,
    },
  };
};

export { getStaticProps };

export default Story;
