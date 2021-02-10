import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

import Button from "../../buttons/button/Button";

import {
  CompressedContainer,
  NavBar,
  CompressedLogo,
  CompressedNavLink,
} from "./HeaderCompressedStyles";

import { navLinks } from "../../../site-data";

interface Props {
  style: CSSStyles;
}

const HeaderCompressed: React.FC<Props> = ({ style }: Props): JSX.Element => {
  const router: NextRouter = useRouter();

  const isSelected = (route: string) => router.pathname === route;

  return (
    <CompressedContainer style={style}>
      <Link href="/">
        <CompressedLogo
          src="/static/svg/th-logo-compressed.svg"
          alt="Luxury Boutique Hotel in Kandy, Sri Lanka."
        />
      </Link>
      <NavBar>
        {navLinks.map((link) => (
          <Link href={link.route} key={link.id}>
            <CompressedNavLink current={isSelected(link.route)}>
              {link.name}
            </CompressedNavLink>
          </Link>
        ))}
      </NavBar>
      <Button route="/reservations" invert>
        Book now
      </Button>
    </CompressedContainer>
  );
};

export default HeaderCompressed;
