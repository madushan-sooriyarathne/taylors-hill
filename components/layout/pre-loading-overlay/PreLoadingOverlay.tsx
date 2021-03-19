import LoadingBar from "../../loading-bar/LoadingBar";
import { Page, Logo, Container } from "./PreLoadingOverlayStyles";

interface Props {
  isLoading: boolean;
}

const PreLoadingOverlay: React.FC<Props> = ({
  isLoading,
}: Props): JSX.Element => {
  return (
    <Page show={isLoading}>
      <Container>
        <Logo
          src="/static/svg/th-logo.svg"
          alt="Taylors Hill Boutique Hotel Logo"
        ></Logo>
        <LoadingBar />
      </Container>
    </Page>
  );
};

export default PreLoadingOverlay;
