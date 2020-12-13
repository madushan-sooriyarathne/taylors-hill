import Link from "next/link";
import { useRouter } from "next/router";
import CTAButton from "../../buttons/cta-button/CTAButton";

import { Container, Logo, NavBar, NavLink } from "./HeaderStyles";

const navLinks = [
  { id: 0, name: "Home", route: "/" },
  { id: 1, name: "Story", route: "/story" },
  { id: 2, name: "Accommodation", route: "/accommodation" },
  { id: 3, name: "Experience", route: "/experience" },
  { id: 4, name: "Offers", route: "/offers" },
  { id: 5, name: "Wellness", route: "/wellness" },
  { id: 6, name: "Contact", route: "/contact" },
];

const Header = () => {
  const router = useRouter();

  const isSelected = (route) => router.pathname === route;

  return (
    <Container>
      <Link href="/">
        <Logo
          src="/static/svg/th-logo.svg"
          alt="Luxury Boutique Hotel in Kandy, Sri Lanka. Taylors Hill Boutique Hotel"
        />
      </Link>

      <NavBar>
        {navLinks.map((link) => (
          <Link href={link.route} key={link.id}>
            <NavLink current={isSelected(link.route)}>{link.name}</NavLink>
          </Link>
        ))}
      </NavBar>
      <CTAButton route="/reservations">Book Now</CTAButton>
    </Container>
  );
};

export default Header;
