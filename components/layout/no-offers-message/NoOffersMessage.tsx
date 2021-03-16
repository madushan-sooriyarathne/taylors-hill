import HeadingSecondary from "../../headings/heading-secondary/HeadingSecondary";
import { Container, Heading } from "./NoOffersMessageStyles";

const NoOfferMessage: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Heading>Sorry!</Heading>
      <HeadingSecondary>
        We do not have any ongoing offers at the moment.
      </HeadingSecondary>
    </Container>
  );
};

export default NoOfferMessage;
