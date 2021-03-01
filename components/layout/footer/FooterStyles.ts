import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  height: auto;
  padding: 5rem 10rem;

  background-color: ${(props) => props.theme.colors.secondary};

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: repeat(3, min-content);
  grid-auto-rows: min-content;
  grid-template-areas:
    "lo nl"
    "ad li"
    "co co";

  align-items: start;
  gap: 2rem;

  ${(props) => props.theme.responsive.mediumBig} {
    grid-template-areas:
      "lo nl"
      "ad ad"
      "li li"
      "co co";
  }

  ${(props) => props.theme.responsive.smaller} {
    grid-template-columns: minmax(min-content, 1fr);

    grid-template-areas:
      "lo"
      "nl"
      "ad"
      "li"
      "co";
  }
`;

const Logo = styled.img`
  grid-area: lo;
  width: 10rem;
  height: 10rem;

  ${(props) => props.theme.responsive.smaller} {
    justify-self: center;
    margin-bottom: 2rem;
  }
`;

const Newsletter = styled.div`
  grid-area: nl;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, min-content);
  align-items: center;
  justify-items: start;
  gap: 1rem;
`;

const NewsletterTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.white};
  text-align: left;
`;

const InputWrapper = styled.form`
  display: grid;
  width: 100%;
  grid-template-columns: 80% 1fr;
  gap: 1rem;
  align-items: center;
  justify-items: start;
`;

const InputFieldWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.4);
`;

const NewsletterInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;

  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.white};
  background-color: transparent;
`;

const NewsletterButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 1.8rem;
  padding: 1rem;
  color: ${(props) => props.theme.colors.secondaryLight};
  cursor: pointer;

  display: flex;
  align-items: center;

  &:hover {
    svg {
      transform: translateX(4px);
    }
  }

  & > svg {
    width: 2rem;
    height: 2rem;
    fill: ${(props) => props.theme.colors.secondaryLight};
    margin-left: 1rem;
    transition: transform 0.2s ease;
  }
`;

const ContactWrapper = styled.div`
  grid-area: ad;
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  align-items: start;
  justify-items: start;
  gap: 3rem;

  border-top: 1px solid rgba(255, 255, 255, 0.4);
  padding: 2rem 0 0 0;

  ${(props) => props.theme.responsive.largest} {
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
  }

  ${(props) => props.theme.responsive.mediumBig} {
    justify-items: center;
  }
`;

const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  ${(props) => props.theme.responsive.mediumBig} {
    align-items: center;
  }
`;

const ContactItem = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: left;

  color: ${(props) => props.theme.colors.white};
`;

const LinkWrapper = styled.div`
  grid-area: li;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, min-content);
  align-items: center;
  justify-items: end;
  gap: 1rem;

  border-top: 1px solid rgba(255, 255, 255, 0.4);
  padding: 2rem 0 0 0;

  ${(props) => props.theme.responsive.mediumBig} {
    justify-items: center;
  }
`;

const SocialMediaGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

const SocialIcon = styled.svg`
  width: 2.5rem;
  height: 2.5rem;
  fill: ${(props) => props.theme.colors.white};
  transition: transform 0.2s ease, fill 0.2s ease;

  &:hover {
    transform: rotate(2deg);
    fill: ${(props) => props.theme.colors.secondaryLight};
  }
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

const LinkItem = styled.a`
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: scale(1.05);
    color: ${(props) => props.theme.colors.secondaryLight};
  }
`;

const CopyrightWrapper = styled.div`
  grid-column: co;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  padding: 2rem 0 0 0;
`;

const CopyrightItem = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.white};

  & > a {
    font-weight: 600;
    color: inherit;
    outline: none;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${(props) => props.theme.colors.primaryLight};
    }
  }
`;

export {
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
};
