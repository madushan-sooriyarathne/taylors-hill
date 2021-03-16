import Link from "next/link";
import HeadingSecondary from "../headings/heading-secondary/HeadingSecondary";
import { Box, ContentGroup, Anchor, AnchorText, Arrow } from "./ImageBoxStyles";

interface Props {
  image: string;
  title: string;
  id: string;
  withButton?: boolean;
}

const ImageBox: React.FC<Props> = ({
  image,
  title,
  id,
  withButton,
}: Props): JSX.Element => {
  return (
    <Box image={image}>
      <ContentGroup>
        <HeadingSecondary color="#fff" alignment="left">
          {title}
        </HeadingSecondary>
        {withButton && (
          <Link href={`/experience/${id}`}>
            <Anchor>
              <AnchorText>Explore</AnchorText> <Arrow />
            </Anchor>
          </Link>
        )}
      </ContentGroup>
    </Box>
  );
};

export default ImageBox;
