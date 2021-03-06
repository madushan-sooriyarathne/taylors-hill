import Page from "../components/layout/page/Page";
import GalleryPage from "../components/layout/gallery/gallery-page/GalleryPage";
import { gallerySelections } from "../site-data";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { getMultipleEntries, serializeAssetUrls } from "../utils/contentful";
import { shuffle } from "../utils/arrayShuffle";
import { useEffect } from "react";

interface Props {
  images: GalleryImage[];
}

const Gallery: React.FC<Props> = ({ images }: Props): JSX.Element => {
  return (
    <Page title="Gallery" compressedHeader>
      <GalleryPage
        images={shuffle(images)}
        gallerySelections={gallerySelections}
      />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  // fetch images and serialize image urls
  const images: GalleryImage[] = await getMultipleEntries<ContentfulGalleryImageFields>(
    "galleryImage"
  ).then((result: ContentfulGalleryImageFields[]) =>
    result.map((item: ContentfulGalleryImageFields) =>
      serializeAssetUrls<ContentfulGalleryImageFields, GalleryImage>(
        item,
        "image"
      )
    )
  );

  return {
    props: {
      images,
    },
  };
};

export { getStaticProps };
export default Gallery;
