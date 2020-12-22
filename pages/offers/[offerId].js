import Page from "../../components/layout/page/Page";
import OfferPage from "../../components/layout/offers/offer-page/OfferPage";
import CoverImage from "../../components/layout/cover-image/CoverImage";
import { offers } from "../../site-data";

const IndividualOffer = ({ primaryOffer, otherOffers }) => {
  return (
    <Page>
      <CoverImage
        image={primaryOffer.image}
        title={primaryOffer.title}
        subTitle={primaryOffer.description}
      />
      <OfferPage offer={primaryOffer} otherOffers={otherOffers} />
    </Page>
  );
};

const getStaticProps = async ({ params }) => {
  const primaryOffer = offers.filter((offer) => offer.id == params.offerId)[0];
  const otherOffers = offers.filter((offer) => offer.id !== params.offerId);

  return {
    props: {
      primaryOffer,
      otherOffers,
    },
  };
};

const getStaticPaths = async () => {
  const paths = offers.map((offer) => ({
    params: {
      offerId: offer.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export { getStaticPaths, getStaticProps };
export default IndividualOffer;
