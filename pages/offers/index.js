import Page from "../../components/layout/page/Page";
import CoverImage from "../../components/layout/cover-image/CoverImage";
import OfferGroup from "../../components/layout/offer-group/OfferGroup";

import { offers } from "../../site-data/";

const Offers = ({}) => {
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

// const getStaticProps = async () => {
//   return {
//     props: offers,
//   };
// };

// export { getStaticProps };
export default Offers;
