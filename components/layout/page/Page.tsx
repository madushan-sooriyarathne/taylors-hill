import Head from "next/head";
import { useState, useEffect, ReactNode } from "react";
import { useTransition } from "react-spring";
import Floater from "../../floater/Floater";
import SnackBar from "../../snack-bar/SnackBar";
import Footer from "../footer/Footer";

import HeaderCompressed from "../header-compressed/HeaderCompressed";
import Header from "../header/Header";
import OverlayMenu from "../overlay-menu/OverlayMenu";
import PageOverlay from "../page-overlay/PageOverlay";
import { Container, ContentWrapper } from "./PageStyles";
import BestWebVoteWidget from "../../best-web-vote-widget";

interface Props {
  children: ReactNode;
  compressedHeader?: boolean;
  title?: string;
}

const Page: React.FC<Props> = ({
  children,
  compressedHeader = false,
  title = "Small Luxury Boutique Hotel in Kandy",
}: Props): JSX.Element => {
  const [scrolled, setScrolled] = useState<boolean>(compressedHeader);

  useEffect(() => {
    const handleScroll = () => {
      if (compressedHeader) {
        setScrolled(true);
        return;
      }
      if (window.scrollY >= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  });

  const transition = useTransition(scrolled, null, {
    from: { transform: "translateY(-100%)", opacity: 0 },
    enter: { transform: "translateY(0)", opacity: 1 },
    leave: { transform: "translateY(-100%)", opacity: 0 },
  });
  return (
    <Container>
      <Head>
        <title>{`${title} | Taylors Hill Boutique Hotel`}</title>
      </Head>
      <PageOverlay />
      <OverlayMenu />
      <SnackBar />
      <Floater />
      {!compressedHeader && <Header />}
      <BestWebVoteWidget />
      {transition.map(
        ({ item, props, key }) =>
          item && (
            <HeaderCompressed
              style={props as { [key: string]: string }}
              key={key}
            />
          ),
      )}

      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </Container>
  );
};

export default Page;
