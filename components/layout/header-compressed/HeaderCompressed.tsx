import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

import Button from "../../buttons/button/Button";
import MenuButton from "../../buttons/menu-button/MenuButton";

import {
  CompressedContainer,
  NavBar,
  CompressedLogo,
  CompressedNavLink,
  ButtonWrapper,
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
      <ButtonWrapper>
        <Button route="/reservations" invert>
          Book now
        </Button>
        <MenuButton inverted />
      </ButtonWrapper>
    </CompressedContainer>
  );
};

export default HeaderCompressed;
