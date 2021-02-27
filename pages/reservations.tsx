import ReservationsPage from "../components/layout/reservations-page/ReservationsPage";
import Page from "../components/layout/page/Page";

const Reservations: React.FC = (): JSX.Element => {
  return (
    <Page compressedHeader={true}>
      <ReservationsPage />
    </Page>
  );
};

export default Reservations;
