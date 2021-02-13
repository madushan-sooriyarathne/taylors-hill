import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { ParsedUrlQuery } from "querystring";

import Page from "../../components/layout/page/Page";
import OfferPage from "../../components/layout/offers/offer-page/OfferPage";
import CoverImage from "../../components/layout/cover-image/CoverImage";

import { offers } from "../../site-data";

interface Props {
  primaryOffer: Offer;
  otherOffers: Offer[];
}

const IndividualOffer: React.FC<Props> = ({
  primaryOffer,
  otherOffers,
}: Props): JSX.Element => {
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

const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> => {
  const primaryOffer = offers.filter(
    (offer) => offer.id == (params as ParsedUrlQuery).offerId
  )[0];
  const otherOffers = offers.filter(
    (offer) => offer.id !== (params as ParsedUrlQuery).offerId
  );

  return {
    props: {
      primaryOffer,
      otherOffers,
    },
  };
};

const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<{ offerId: string }>
> => {
  const paths = offers.map((offer: Offer) => ({
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
