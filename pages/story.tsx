import CoverImage from "../components/layout/cover-image/CoverImage";
import ImageContentSection from "../components/layout/Image-content-section/ImageContentSection";
import CTADescription from "../components/layout/cta-description/CTADescription";
import Page from "../components/layout/page/Page";
import DoubleImageGrid from "../components/layout/double-image-grid/DoubleImageGrid";

import { history, historyTaylorsHill } from "../site-data";

const Story: React.FC = (): JSX.Element => {
  return (
    <Page>
      <CoverImage
        image="/static/img/story-cover.webp"
        title="Story"
        subTitle="The Tale of Taylors Hill & Authentic Ceylon Tea"
      />
      <ImageContentSection image={history.image} reversed>
        <CTADescription data={history} alignment="justify" />
      </ImageContentSection>
      <DoubleImageGrid
        images={["/static/img/story/01.webp", "/static/img/story/03.webp"]}
      />
      <ImageContentSection image={historyTaylorsHill.image}>
        <CTADescription data={historyTaylorsHill} alignment="justify" />
      </ImageContentSection>
    </Page>
  );
};

export default Story;
