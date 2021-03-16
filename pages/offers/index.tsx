import Page from "../../components/layout/page/Page";
import CoverImage from "../../components/layout/cover-image/CoverImage";
import OfferGroup from "../../components/layout/offers/offer-group/OfferGroup";

import NoOfferMessage from "../../components/layout/no-offers-message/NoOffersMessage";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { getMultipleEntries } from "../../utils/contentful";

interface Props {
  offers: Offer[];
}

const Offers: React.FC<Props> = ({ offers }: Props): JSX.Element => {
  return (
    <Page>
      <CoverImage
        title="Offers"
        subTitle="Grab the best deals for your stay"
        image="/static/img/offers-cover.webp"
      />

      {offers.length < 1 ? <NoOfferMessage /> : <OfferGroup offers={offers} />}
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  // Fetch Offers from contentful;
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

  return {
    props: { offers },
  };
};

export { getStaticProps };
export default Offers;
