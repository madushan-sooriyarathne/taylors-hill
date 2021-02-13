import RoomBox from "../../../room-box/RoomBox";
import { Container, ContentWrapper } from "./RoomsGroupStyles";

interface Props {
  rooms: Room[];
}

const RoomGroup: React.FC<Props> = ({ rooms }: Props): JSX.Element => {
  return (
    <Container>
      <ContentWrapper>
        {rooms.map((room: Room) => (
          <RoomBox room={room} key={room.id} />
        ))}
      </ContentWrapper>
    </Container>
  );
};

export default RoomGroup;
