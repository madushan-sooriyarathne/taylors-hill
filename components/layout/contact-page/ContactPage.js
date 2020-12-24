import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import useInputState from "../../../hooks/use-input";

import Button from "../../buttons/button/Button";
import SubmitButton from "../../buttons/submit-button/SubmitButton";
import InputField from "../../input-field/InputField";
import MainTitle from "../main-title/MainTitle";

import {
  Page,
  ContactFormWrapper,
  ContactForm,
  Map,
  ContactDetails,
  ContactDetailsWrapper,
  Logo,
  ContactItem,
} from "./ContactPageStyles";

const ContactPage = () => {
  // Input states
  const [fistName, updateFirstName, resetFirstName] = useInputState("");
  const [lastName, updateLastName, resetLastName] = useInputState("");
  const [email, updateEmail, resetEmail] = useInputState("");
  const [phone, updatePhone, resetPhone] = useInputState("");
  const [message, updateMessage, resetMessage] = useInputState("");

  // other state
  const [loading, setLoading] = useState(false);

  // side effects
  useEffect(() => {
    mapboxgl.accessToken = process.env.MAP_BOX_SECRET;
    const map = new mapboxgl.Map({
      container: "map-box",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [80.70228482634505, 7.166891652160369],
      zoom: 12,
      pitch: 50,
    });

    new mapboxgl.Marker({
      color: "#53534A",
    })
      .setLngLat([80.70228482634505, 7.166891652160369])
      .addTo(map);
  }, []);

  // submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    alert(`${fistName} - ${lastName} - ${email} - ${phone} ${message}`);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // clear fields on successful submit
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPhone();
    resetMessage();
  };

  return (
    <Page>
      <ContactFormWrapper>
        <MainTitle
          mainHeading="Let's Talk"
          shadowHeading="Contact us"
          subHeading="We are always love to hear from you. Reservation or a request, a suggestion or a comment, We are just one message away"
        />
        <ContactForm onSubmit={handleSubmit}>
          <InputField
            name="First Name"
            type="text"
            onChange={updateFirstName}
            value={fistName}
            required
          />
          <InputField
            name="Last Name"
            type="text"
            onChange={updateLastName}
            value={lastName}
            required
          />
          <InputField
            name="Email"
            type="email"
            onChange={updateEmail}
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
          <InputField
            name="Phone"
            type="tel"
            onChange={updatePhone}
            pattern="(+[0-9]{2} | [0-9]{1}) [0-9]{9}"
            value={phone}
          />
          <InputField
            name="Message"
            type="text"
            onChange={updateMessage}
            value={message}
            textArea
          />
          <div>
            <SubmitButton invert loading={loading}>
              Submit
            </SubmitButton>
          </div>
        </ContactForm>
      </ContactFormWrapper>
      <Map id="map-box">
        <ContactDetailsWrapper>
          <ContactDetails>
            <Logo
              src="/static/svg/th-logo-compressed.svg"
              alt="Taylors Hill Boutique Hotel - Logo"
            />
            <ContactItem>
              Pattiygama Estate, Deltota, Kandy, Sri Lanka. <br />
              +94 81 527 7788 / +94 707 123 678 (reservations) <br />
              reservations@taylorshill.lk
            </ContactItem>

            <Button
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Taylors+Hill/@7.1669584,80.7001326,17z/data=!3m1!4b1!4m8!3m7!1s0x3ae37b4a0199259f:0x3270b59c92be5579!5m2!4m1!1i2!8m2!3d7.1669531!4d80.7023213",
                  "_blank"
                )
              }
              invert
            >
              Get Driving Directions
            </Button>
          </ContactDetails>
        </ContactDetailsWrapper>
      </Map>
    </Page>
  );
};

export default ContactPage;
