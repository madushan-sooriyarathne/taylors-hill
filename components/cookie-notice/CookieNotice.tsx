import { useState } from "react";
import Button from "../buttons/button/Button";
import HeadingMain from "../headings/heading-primary/HeadingPrimary";
import Paragraph from "../paragraph/Paragraph";
import { Popup } from "./CookieNoticeStyles";

const CookieNotice: React.FC = (): JSX.Element => {
  const [popupOpen, togglePopup] = useState<boolean>(true);

  const handleClick = () => {
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
