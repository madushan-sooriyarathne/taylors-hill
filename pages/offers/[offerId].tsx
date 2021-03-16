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
import { getMultipleEntries } from "../../utils/contentful";

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
  // Fetch offers from contentful
  const fetchedOffers: ContentfulOfferFields[] = await getMultipleEntries<ContentfulOfferFields>(
    "offer"
  );

  // didn't use serializeAssetUrls function here because validTill field also need to be serialized
  let offers: Offer[] = fetchedOffers.map((offer) => {
    const { image, validTill, ...rest } = offer;
    return {
      ...rest,
      validTill,
      image: image.fields.file.url,
    };
  });

  const primaryOffer: Offer = offers.filter(
    (offer) => offer.id == (params as ParsedUrlQuery).offerId
  )[0];
  const otherOffers: Offer[] = offers.filter(
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
  const offers: ContentfulOfferFields[] = await getMultipleEntries<ContentfulOfferFields>(
    "offer"
  );

  const paths = offers.map((offer: ContentfulOfferFields) => ({
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
