import Page from "../../components/layout/page/Page";
import CoverImage from "../../components/layout/cover-image/CoverImage";
import OfferGroup from "../../components/layout/offers/offer-group/OfferGroup";

import { offers } from "../../site-data";

const Offers: React.FC = (): JSX.Element => {
  return (
    <Page>
      <CoverImage
        title="Offers"
        subTitle="Grab the best deals for your stay"
        image="/static/img/offers-cover.webp"
      />
      <OfferGroup offers={offers} />
    </Page>
  );
};

export default Offers;
