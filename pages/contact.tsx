import Page from "../components/layout/page/Page";
import ContactPage from "../components/layout/contact-page/ContactPage";

const Contact: React.FC = (): JSX.Element => {
  return (
    <Page title="Contact us" compressedHeader>
      <ContactPage />
    </Page>
  );
};

export default Contact;
