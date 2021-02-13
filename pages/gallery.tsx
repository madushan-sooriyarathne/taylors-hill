import Page from "../components/layout/page/Page";
import GalleryPage from "../components/layout/gallery/gallery-page/GalleryPage";
import { galleryImages, gallerySelections } from "../site-data";

const Gallery: React.FC = (): JSX.Element => {
  return (
    <Page compressedHeader>
      <GalleryPage
        images={galleryImages}
        gallerySelections={gallerySelections}
      />
    </Page>
  );
};

export default Gallery;
