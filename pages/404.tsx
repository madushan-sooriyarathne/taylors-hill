import Page from "../components/layout/page/Page";
import CustomError from "../components/layout/custom-error/CustomError";

const FourOFourPage: React.FC = (): JSX.Element => {
  return (
    <Page title="404 Not Found!">
      <CustomError />
    </Page>
  );
};

export default FourOFourPage;
