import OfferBox from "../../offer-box/OfferBox";
import { Container } from "./OfferGroupStyles";

const OfferGroup = ({ offers }) => {
  return (
    <Container>
      {offers.map((offer) => (
        <OfferBox offer={offer} />
      ))}
    </Container>
  );
};

export default OfferGroup;
