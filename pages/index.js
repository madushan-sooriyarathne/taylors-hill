import CTADescription from "../components/layout/cta-description/CTADescription";
import RoomsSection from "../components/layout/rooms/rooms-section/RoomsSecton";
import ExperiencesSection from "../components/layout/experiences/experiences-section/ExperiencesSection";
import GallerySection from "../components/layout/gallery/gallery-section/GallerySection";
import ImageContentSection from "../components/layout/Image-content-section/ImageContentSection";
import Page from "../components/layout/page/Page";
import OfferSection from "../components/layout/offers/offer-section/OfferSection";
import Slider from "../components/layout/slider/Slider";
import {
  rooms,
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
      <RoomsSection rooms={rooms} />
      <ExperiencesSection experiences={excursions} />
      <ImageContentSection image={dining.image} reversed>
        <CTADescription {...dining} />
      </ImageContentSection>
      <OfferSection offers={offers} />
      <GallerySection images={galleryImages} />
    </Page>
  );
};

export default Home;
