import OfferBox from "../../../offer-box/OfferBox";
import MainTitle from "../../main-title/MainTitle";
import Button from "../../../buttons/button/Button";
import { Section, ContentWrapper } from "./OfferSectionStyles";

interface Props {
  offers: Offer[];
}

const OfferSection: React.FC<Props> = ({ offers }: Props): JSX.Element => {
  return (
    <Section available={offers.length > 0}>
      <MainTitle
        mainHeading="Offers"
        shadowHeading="Exclusive Deals"
        subHeading="Grab the best available details for your stay at Taylors Hill"
        centered
      />
      <ContentWrapper>
        {offers.map((offer) => (
          <OfferBox offer={offer} key={offer.id} />
        ))}
      </ContentWrapper>
      <div>
        <Button route="/offers" invert>
          Explore
        </Button>
      </div>
    </Section>
  );
};

export default OfferSection;
