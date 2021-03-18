import Link from "next/link";
import { FormEvent, useContext } from "react";
import { notificationDispatchContext } from "../../../context/NotificationContext";
import useInputState from "../../../hooks/use-input";

import { socials, footerLinks } from "../../../site-data";

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

const Footer: React.FC = (): JSX.Element => {
  // input field state
  const [email, updateEmail, resetEmail] = useInputState("");

  // subscribing to notification context
  const showNotification = useContext(
    notificationDispatchContext
  ) as DispatchFn<string | null>;

  // handle newsletter submit
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // send post request to subscribe api route
    fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    }).then((result) => {
      if (result.status === 200) {
        // show successful notification
        showNotification(
          "Thanks for subscribing to Taylors Hill Newsletter. We promise that we won't spam you."
        );

        // hide notification message after 3 seconds
        setTimeout(() => showNotification(null), 5000);
      } else {
        // show error notification
        showNotification(
          "Error occurred while subscribing to the newsletter. Please try again later!"
        );

        // hide notification message after 3 seconds
        setTimeout(() => showNotification(null), 5000);
      }

      resetEmail();
    });
  };

  return (
    <Container>
      <Logo
        src="/static/svg/th-logo.svg"
        alt="Luxury Boutique Hotel in Sri Lanka"
      />
      <Newsletter>
        <NewsletterTitle>Subscribe to our newsletter</NewsletterTitle>
        <InputWrapper onSubmit={handleSubmit}>
          <InputFieldWrapper>
            <NewsletterInput
              type="email"
              placeholder="name@email.com"
              value={email}
              onChange={updateEmail}
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
