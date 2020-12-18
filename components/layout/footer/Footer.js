import Link from "next/link";
import {
  Container,
  Logo,
  Newsletter,
  NewsletterTitle,
  InputWrapper,
  InputFieldWrapper,
  NewsletterInput,
  NewsletterButton,
  ContactWrapper,
  ContactGroup,
  ContactItem,
  LinkWrapper,
  SocialMediaGroup,
  SocialIcon,
  LinkGroup,
  LinkItem,
  CopyrightWrapper,
  CopyrightItem,
} from "./FooterStyles";

const socials = [
  {
    id: 0,
    name: "Facebook",
    logo: "facebook",
    url: "https://www.facebook.com/taylorshillsrilanka",
  },
  {
    id: 1,
    name: "Instagram",
    logo: "instagram",
    url: "https://www.instagram.com/taylorshillboutiquehotel",
  },
  {
    id: 2,
    name: "LinkedIn",
    logo: "linkedin",
    url: "https://www.linkedin.com/company/taylors-hill-boutique-hotel",
  },
];

const footerLinks = [
  { id: 0, name: "Contact", route: "/contact" },
  { id: 1, name: "Privacy", route: "/privacy" },
  {
    id: 2,
    name: "Payment & Cancellations",
    route: "/payment-cancellation-policy",
  },
  { id: 3, name: "Site Map", route: "/site-map" },
];

const Footer = () => {
  return (
    <Container>
      <Logo
        src="/static/svg/th-logo.svg"
        alt="Luxury Boutique Hotel in Sri Lanka"
      />
      <Newsletter>
        <NewsletterTitle>Subscribe to our newsletter</NewsletterTitle>
        <InputWrapper>
          <InputFieldWrapper>
            <NewsletterInput
              type="email"
              placeholder="name@email.com"
              required
            />
          </InputFieldWrapper>
          <NewsletterButton type="submit">
            Subscribe{" "}
            <svg>
              <use xlinkHref="/static/svg/sprites.svg#send"></use>
            </svg>
          </NewsletterButton>
        </InputWrapper>
      </Newsletter>
      <ContactWrapper>
        <ContactGroup>
          <ContactItem>Pattiyagama Estate, Deltota,</ContactItem>
          <ContactItem>Kandy, Sri Lanka. 20430</ContactItem>
        </ContactGroup>
        <ContactGroup>
          <ContactItem>Tel: +94 81 527 7788</ContactItem>
          <ContactItem>Reservations: +94 707 123 678</ContactItem>
          <ContactItem>Email: reservations@taylorshill.lk</ContactItem>
        </ContactGroup>
      </ContactWrapper>
      <LinkWrapper>
        <SocialMediaGroup>
          {socials.map((item) => (
            <a href={item.url} target="_blank" rel="noopener" key={item.id}>
              <SocialIcon>
                <use xlinkHref={`/static/svg/sprites.svg#${item.logo}`}></use>
              </SocialIcon>
            </a>
          ))}
        </SocialMediaGroup>
        <LinkGroup>
          {footerLinks.map((link) => (
            <Link href={link.route} key={link.id}>
              <LinkItem>{link.name}</LinkItem>
            </Link>
          ))}
        </LinkGroup>
      </LinkWrapper>
      <CopyrightWrapper>
        <CopyrightItem>
          Taylors Hill Boutique Hotel {new Date().getFullYear()} ©
        </CopyrightItem>
        <CopyrightItem>
          Handcrafted by{" "}
          <a href="https://madushan.dev" rel="noopener" target="_blank">
            Madushan Sooriyarathne
          </a>
        </CopyrightItem>
      </CopyrightWrapper>
    </Container>
  );
};

export default Footer;
