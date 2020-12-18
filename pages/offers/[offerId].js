import Page from "../../components/layout/page/Page";
import { offers } from "../../site-data";

const OfferPage = ({ primaryOffer, otherOffers }) => {
  return <Page></Page>;
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
export default OfferPage;
