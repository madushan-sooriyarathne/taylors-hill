import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import {
  getMultipleEntries,
  getSingleEntry,
  serializeAssetUrls,
} from "../utils/contentful";
import { shuffle } from "../utils/arrayShuffle";

import CTADescription from "../components/layout/cta-description/CTADescription";
import RoomsSection from "../components/layout/rooms/rooms-section/RoomsSection";
import ExperiencesSection from "../components/layout/experiences/experiences-section/ExperiencesSection";
import GallerySection from "../components/layout/gallery/gallery-section/GallerySection";
import ImageContentSection from "../components/layout/Image-content-section/ImageContentSection";
import Page from "../components/layout/page/Page";
import OfferSection from "../components/layout/offers/offer-section/OfferSection";
import Slider from "../components/layout/slider/Slider";
import { galleryImages } from "../site-data";

interface Props {
  slides: HeroSlide[];
  ourStory: SectionData;
  rooms: Room[];
  experiences: Excursion[];
  dining: SectionData;
  offers: Offer[];
}

const Home: React.FC<Props> = ({
  ourStory,
  rooms,
  experiences,
  dining,
  slides,
  offers,
}: Props): JSX.Element => {
  return (
    <Page>
      <Slider slides={slides} />
      <ImageContentSection image={ourStory.image}>
        <CTADescription data={ourStory} />
      </ImageContentSection>
      <RoomsSection rooms={rooms} />
      <ExperiencesSection experiences={experiences} />
      <ImageContentSection image={dining.image} reversed>
        <CTADescription data={dining} />
      </ImageContentSection>
      <OfferSection offers={offers} />
      <GallerySection images={galleryImages} />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  // Fetching hero slider image data
  const slides: HeroSlide[] = await getMultipleEntries<ContentfulHeroSlideFields>(
    "heroSlide"
  ).then((result) => {
    return result.map((slide) =>
      serializeAssetUrls<ContentfulHeroSlideFields, HeroSlide>(slide, "image")
    );
  });

  // Fetching Our story section data
  const ourStory: SectionData = serializeAssetUrls<
    ContentfulSectionDataFields,
    SectionData
  >(
    await getSingleEntry<ContentfulSectionDataFields>("1coWWPz6KIqAadTQ0JJzEn"),
    "image"
  );

  // Fetching Room Data
  const rooms: Room[] = await getMultipleEntries<ContentfulRoomFields>(
    "room"
  ).then((result) => {
    return result.map((item) =>
      serializeAssetUrls<ContentfulRoomFields, Room>(item, "image", "images")
    );
  });

  // Fetch Activities data

  const activities: ContentfulExcursionFields[] = await getMultipleEntries<ContentfulExcursionFields>(
    "activity"
  );

  const experiences: Excursion[] = activities.map((item) =>
    serializeAssetUrls<ContentfulExcursionFields, Excursion>(
      item,
      "image",
      "images"
    )
  );

  // Fetching Dining section data
  const dining: SectionData = serializeAssetUrls<
    ContentfulSectionDataFields,
    SectionData
  >(
    await getSingleEntry<ContentfulSectionDataFields>("1Z0W518MDLc43EjjP4eAP8"),
    "image"
  );

  // Fetch Offer data
  const offers: Offer[] = await getMultipleEntries<ContentfulOfferFields>(
    "offer"
  ).then((result) => {
    return result.map((item) =>
      serializeAssetUrls<ContentfulOfferFields, Offer>(item, "image")
    );
  });

  // // TODO: Fetch Gallery Images

  return {
    props: {
      slides,
      ourStory,
      rooms,
      dining,
      offers,
      experiences,
    },
  };
};

export { getStaticProps };
export default Home;
