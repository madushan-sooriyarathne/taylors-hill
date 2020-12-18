import Paragraph from "../paragraph/Paragraph";
import HeadingSecondary from "../headings/heading-secondary/HeadingSecondary";
import RouteButton from "../buttons/route-button/RouteButton";

import { Box, Image, ContentWrapper } from "./OfferBoxStyles";
const OfferBox = ({ offer }) => {
  return (
    <Box>
      <Image image={offer.image} />
      <ContentWrapper>
        <HeadingSecondary alignment="left">{offer.title}</HeadingSecondary>
        <Paragraph>{offer.description}</Paragraph>
        <RouteButton route={`/offers/${offer.id}`}>Learn More</RouteButton>
      </ContentWrapper>
    </Box>
  );
};

export default OfferBox;
