import RoomBox from "../../../room-box/RoomBox";
import { Container, ContentWrapper } from "./RoomsGroupStyles";

const RoomGroup = ({ rooms }) => {
  return (
    <Container>
      <ContentWrapper>
        {rooms.map((room) => (
          <RoomBox {...room} key={room.id} />
        ))}
      </ContentWrapper>
    </Container>
  );
};

export default RoomGroup;
