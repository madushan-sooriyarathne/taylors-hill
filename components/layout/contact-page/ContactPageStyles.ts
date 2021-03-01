import styled from "styled-components";

const Page = styled.section`
  grid-column: full-start / full-end;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-auto-rows: max-content;
  grid-template-areas: "co ma";
  align-items: start;
  justify-items: start;
  margin-bottom: -10rem;

  ${(props) => props.theme.responsive.mediumLarge} {
    height: auto;
    grid-template-columns: minmax(min-content, 1fr);
    grid-template-rows: repeat(2, minmax(max-content, 100vh));
    grid-template-areas:
      "co"
      "ma";
  }
`;

const ContactFormWrapper = styled.div`
  grid-area: co;
  width: 100%;
  height: 100vh;
  padding: 15rem 10rem 10rem 10rem;
  overflow: none;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & > *:first-child {
    margin-bottom: 5rem;
  }

  ${(props) => props.theme.responsive.bigger} {
    padding: 15rem 5rem 5rem 5rem;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-auto-rows: max-content;
  gap: 5rem;

  & > *:nth-child(5) {
    grid-column: 1 / 3;
  }
`;

const Map = styled.div`
  grid-area: ma;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const ContactDetailsWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10%;
  z-index: 5;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
  background-color: ${(props) => props.theme.colors.bgLight};
  box-shadow: ${(props) => props.theme.shadows.medium};

  // 1500px
  ${(props) => props.theme.responsive.bigger} {
    padding: 5rem 5rem;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  height: 5rem;
  width: auto;
  margin-bottom: 2rem;
`;

const ContactItem = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: center;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 2rem;
`;

export {
  Page,
  ContactFormWrapper,
  ContactForm,
  Map,
  ContactDetails,
  ContactDetailsWrapper,
  Logo,
  ContactItem,
};
