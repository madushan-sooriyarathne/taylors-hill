import LoadingSpinner from "../../loading-spinner/LoadingSpinner";
import { Page, Logo, Container } from "./PreLoadingOverlayStyles";

interface Props {
  loading: boolean;
}

const PreLoadingOverlay: React.FC<Props> = ({
  loading,
}: Props): JSX.Element => {
  return (
    <Page loading={loading}>
      <Container>
        <Logo
          src="/static/svg/th-logo.svg"
          alt="Taylors Hill Boutique Hotel Logo"
        ></Logo>
        <LoadingSpinner />
      </Container>
    </Page>
  );
};

export default PreLoadingOverlay;
