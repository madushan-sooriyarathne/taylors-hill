import Link from "next/link";
import HeadingSecondary from "../headings/heading-secondary/HeadingSecondary";
import { Box, ContentGroup, Anchor, AnchorText, Arrow } from "./ImageBoxStyles";

const ImageBox = ({ image, title, url }) => {
  return (
    <Box image={image}>
      <ContentGroup>
        <HeadingSecondary color="#fff">{title}</HeadingSecondary>
        <Link href={url}>
          <Anchor>
            <AnchorText>Explore</AnchorText> <Arrow />
          </Anchor>
        </Link>
      </ContentGroup>
    </Box>
  );
};

export default ImageBox;
