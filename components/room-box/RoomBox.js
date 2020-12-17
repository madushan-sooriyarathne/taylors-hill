import Link from "next/link";
import HeadingSecondary from "../headings/heading-secondary/HeadingSecondary";
import {
  Box,
  ContentWrapper,
  RoomType,
  Description,
  Button,
} from "./RoomBoxStyle";

const RoomBox = ({ image, title, type, description, id }) => {
  return (
    <Box image={image}>
      <ContentWrapper>
        <HeadingSecondary>{title}</HeadingSecondary>
        <RoomType>{type}</RoomType>
        <Description>{description}</Description>
        <Link href={`/accommodation/${id}`}>
          <Button>Check it out</Button>
        </Link>
      </ContentWrapper>
    </Box>
  );
};

export default RoomBox;
