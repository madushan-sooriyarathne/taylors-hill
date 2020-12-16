import { useState, useEffect } from "react";
import { useTransition } from "react-spring";
import Footer from "../footer/Footer";

import HeaderCompressed from "../header-compressed/HeaderCompressed";
import Header from "../header/Header";
import PageOverlay from "../page-overlay/PageOverlay";
import { Container, ContentWrapper } from "./PageStyles";

const Page = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  });

  const transition = useTransition(scrolled, null, {
    from: { transform: "translateY(-100%)", opacity: 0 },
    enter: { transform: "translateY(0)", opacity: 1 },
    leave: { transform: "translateY(-100%)", opacity: 0 },
  });
  return (
    <Container>
      <PageOverlay />
      <Header />
      {transition.map(
        ({ item, props, key }) =>
          item && <HeaderCompressed style={props} key={key} />
      )}

      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </Container>
  );
};

export default Page;
