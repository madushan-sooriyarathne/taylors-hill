import CTADescription from "../components/layout/cta-description/CTADescription";
import ExcursionsSection from "../components/layout/excursions-sections/ExcursionsSection";
import GallerySection from "../components/layout/gallery-section/GallerySection";
import ImageContentSection from "../components/layout/Image-content-section/ImageContentSection";
import Page from "../components/layout/page/Page";
import RoomsSection from "../components/layout/rooms-section/RoomsSecton";
import OfferSection from "../components/layout/offer-section/OfferSection";
import Slider from "../components/layout/slider/Slider";
import {
  ourStory,
  dining,
  offers,
  slides,
  excursions,
  galleryImages,
} from "../site-data";

const Home = () => {
  return (
    <Page>
      <Slider slides={slides} />
      <ImageContentSection image={ourStory.image}>
        <CTADescription {...ourStory} />
      </ImageContentSection>
      <RoomsSection />
      <ExcursionsSection excursions={excursions} />
      <ImageContentSection image={dining.image} reversed>
        <CTADescription {...dining} />
      </ImageContentSection>
      <OfferSection offers={offers} />
      <GallerySection images={galleryImages} />
    </Page>
  );
};

export default Home;
