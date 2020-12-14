import CTADescription from "../components/layout/cta-description/CTADescription";
import ImageContentSection from "../components/layout/Image-content-section/ImageContentSection";
import Page from "../components/layout/page/Page";
import RoomsSection from "../components/layout/rooms-section/RoomsSecton";
import Slider from "../components/layout/slider/Slider";
import { ourStory, dining } from "../site-data";

const Home = () => {
  return (
    <Page>
      <Slider />
      <ImageContentSection image={ourStory.image}>
        <CTADescription {...ourStory} />
      </ImageContentSection>
      <RoomsSection />
      <ImageContentSection image={dining.image} reversed>
        <CTADescription {...dining} />
      </ImageContentSection>
    </Page>
  );
};

export default Home;
