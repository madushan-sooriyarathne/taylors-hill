import ReservationsPage from "../components/layout/reservations-page/ReservationsPage";
import Page from "../components/layout/page/Page";

const Reservations: React.FC = (): JSX.Element => {
  return (
    <Page title="Reservations" compressedHeader={true}>
      <ReservationsPage />
    </Page>
  );
};

export default Reservations;
