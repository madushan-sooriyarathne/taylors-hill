import OfferBox from "../../../offer-box/OfferBox";
import { Container } from "./OfferGroupStyles";

interface Props {
  offers: Offer[];
}

const OfferGroup: React.FC<Props> = ({ offers }: Props): JSX.Element => {
  return (
    <Container>
      {offers.map((offer: Offer) => (
        <OfferBox offer={offer} />
      ))}
    </Container>
  );
};

export default OfferGroup;
