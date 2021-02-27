import HeadingSecondary from "../../headings/heading-secondary/HeadingSecondary";
import Button from "../../buttons/button/Button";

import {
  CoverImage,
  Container,
  FormContainer,
  MessageHeading,
  ButtonWrapper,
} from "./ReservationsPageStyles";

const ReservationsPage: React.FC = (): JSX.Element => {
  return (
    <Container>
      <CoverImage />
      <FormContainer>
        <MessageHeading>
          Online Booking Engine Integration is underway!
        </MessageHeading>
        <HeadingSecondary>
          Please contact Taylors Hill Reservations for bookings!
        </HeadingSecondary>
        <ButtonWrapper>
          <Button route="/contact" invert>
            Contact Reservations
          </Button>
        </ButtonWrapper>
      </FormContainer>
    </Container>
  );
};

export default ReservationsPage;
