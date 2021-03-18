import CoverImage from "../components/layout/cover-image/CoverImage";
import ImageContentSection from "../components/layout/Image-content-section/ImageContentSection";
import CTADescription from "../components/layout/cta-description/CTADescription";
import Page from "../components/layout/page/Page";
import DoubleImageGrid from "../components/layout/double-image-grid/DoubleImageGrid";

import { GetStaticProps, GetStaticPropsResult } from "next";
import {
  getSingleAsset,
  getSingleEntry,
  serializeAssetUrls,
} from "../utils/contentful";

interface Props {
  teaHistory: SectionData;
  taylorsHillHistory: SectionData;
  imageGrid: string[];
}

const Story: React.FC<Props> = ({
  teaHistory,
  taylorsHillHistory,
  imageGrid,
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
      <DoubleImageGrid images={imageGrid} />
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

  // fetch grid images
  const firstGridImage = await getSingleAsset("7DkCivzRH4VX0iqoGdDDfR");
  const secondGridImage = await getSingleAsset("1Vy7lzDozoINqAOLS1brNd");

  return {
    props: {
      teaHistory,
      taylorsHillHistory,
      imageGrid: [firstGridImage, secondGridImage],
    },
  };
};

export { getStaticProps };

export default Story;
