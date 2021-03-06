import Link from "next/link";
import HeadingSecondary from "../headings/heading-secondary/HeadingSecondary";
import {
  Box,
  ContentWrapper,
  RoomType,
  Description,
  Button,
} from "./RoomBoxStyle";

interface Props {
  room: Room;
}

const RoomBox: React.FC<Props> = ({ room }: Props): JSX.Element => {
  return (
    <Box image={room.image}>
      <ContentWrapper>
        <HeadingSecondary alignment="left">{room.title}</HeadingSecondary>
        <RoomType>{room.type}</RoomType>
        <Description>{room.intro}</Description>
        <Link href={`/accommodation/${room.id}`}>
          <Button>Check it out</Button>
        </Link>
      </ContentWrapper>
    </Box>
  );
};

export default RoomBox;
