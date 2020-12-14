import Link from "next/link";
import { useRouter } from "next/router";

import { navLinks } from "../../../site-data";

import Button from "../../buttons/button/Button";
import { Container, Logo, NavBar, NavLink } from "./HeaderStyles";

const Header = () => {
  const router = useRouter();

  const isSelected = (route) => router.pathname === route;

  return (
    <Container>
      <Link href="/">
        <Logo
          src="/static/svg/th-logo.svg"
          alt="Luxury Boutique Hotel in Kandy, Sri Lanka."
        />
      </Link>

      <NavBar>
        {navLinks.map((link) => (
          <Link href={link.route} key={link.id}>
            <NavLink current={isSelected(link.route)}>{link.name}</NavLink>
          </Link>
        ))}
      </NavBar>

      <Button route="/reservations">Book Now</Button>
    </Container>
  );
};

export default Header;
