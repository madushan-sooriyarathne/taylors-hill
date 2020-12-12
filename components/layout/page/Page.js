import { Container, ContentWrapper } from "./PageStyles";

const Page = ({ children }) => {
  return (
    <Container>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
};

export default Page;
