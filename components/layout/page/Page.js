import Header from "../header/Header";
import { Container, ContentWrapper } from "./PageStyles";

const Page = ({ children }) => {
  return (
    <Container>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
};

export default Page;
