import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../buttons/button/Button";
import HeadingMain from "../headings/heading-primary/HeadingPrimary";
import Paragraph from "../paragraph/Paragraph";
import { Popup } from "./CookieNoticeStyles";

const CookieNotice: React.FC = (): JSX.Element => {
  const router = useRouter();

  const [popupOpen, togglePopup] = useState<boolean>(true);

  useEffect(() => {
    // get the save status from local storage
    const savedState: string | null = window.localStorage.getItem(
      "privacy_policy_accepted"
    );

    if (savedState) {
      togglePopup(savedState !== "true");
    } else {
      togglePopup(true);
    }

    // automatically close the popup when router changes
    // by subscribing to next.js router's events
    const handleRouterChange = () => {
      togglePopup(false);
    };

    router.events.on("routeChangeStart", handleRouterChange);

    return () => router.events.off("routerChangeStart", handleRouterChange);
  }, []);

  const handleClick = () => {
    // save the status in local storage
    window.localStorage.setItem("privacy_policy_accepted", "true");

    togglePopup(false);
  };

  return (
    <Popup open={popupOpen}>
      <HeadingMain>Your Privacy</HeadingMain>
      <Paragraph>
        We use cookies to improve your experience on our site and to show your
        relevant content. To find out more, read our{" "}
        <a href="/privacy-policy">Privacy policy</a>.
      </Paragraph>
      <Button onClick={handleClick} invert>
        Accept
      </Button>
    </Popup>
  );
};

export default CookieNotice;
