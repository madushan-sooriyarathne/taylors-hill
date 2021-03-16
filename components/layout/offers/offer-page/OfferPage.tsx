import { months } from "../../../../site-data";
import Button from "../../../buttons/button/Button";
import HeadingPrimary from "../../../headings/heading-primary/HeadingPrimary";
import HeadingSecondary from "../../../headings/heading-secondary/HeadingSecondary";
import HeadingSub from "../../../headings/heading-sub/HeadingSub";
import OfferBox from "../../../offer-box/OfferBox";
import MainTitle from "../../main-title/MainTitle";

import {
  Container,
  SummeryWrapper,
  PriceRow,
  Validity,
  DetailsWrapper,
  ItemsList,
  DetailsSection,
  OtherOffersSection,
  OtherOffersGroup,
} from "./OfferPageStyles";

interface Props {
  offer: Offer;
  otherOffers: Offer[];
}

const OfferPage: React.FC<Props> = ({
  offer,
  otherOffers,
}: Props): JSX.Element => {
  const validTill = new Date(offer.validTill);
  return (
    <Container>
      <SummeryWrapper>
        <HeadingPrimary alignment="left">{offer.title}</HeadingPrimary>
        <HeadingSub alignment="left">{offer.description}</HeadingSub>
        <PriceRow>
          {offer.price && <p>{`${offer.currency} ${offer.price} /-`}</p>}
          {offer.discount && <span>{offer.discount}% Off</span>}
        </PriceRow>
        <Validity>
          Valid till{" "}
          {`${validTill.getDate()} ${
            months[validTill.getMonth()]
          } ${validTill.getFullYear()}`}
        </Validity>
        <div>
          <Button route="/reservation" invert>
            Book Now
          </Button>
        </div>
      </SummeryWrapper>
      <DetailsWrapper>
        {offer.includes && (
          <DetailsSection>
            <HeadingSecondary alignment="left">Inclusion</HeadingSecondary>
            <ItemsList>
              {offer.includes.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ItemsList>
          </DetailsSection>
        )}

        {offer.terms && (
          <DetailsSection>
            <HeadingSecondary alignment="left">
              Terms & Conditions
            </HeadingSecondary>
            <ItemsList>
              {offer.terms.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ItemsList>
          </DetailsSection>
        )}
      </DetailsWrapper>
      {otherOffers.length > 0 && (
        <OtherOffersSection>
          <MainTitle
            mainHeading="Check-out other offers"
            shadowHeading="Offers"
          />
          <OtherOffersGroup>
            {otherOffers.map((offer: Offer) => (
              <OfferBox offer={offer} key={offer.id} />
            ))}
          </OtherOffersGroup>
        </OtherOffersSection>
      )}
    </Container>
  );
};

export default OfferPage;
