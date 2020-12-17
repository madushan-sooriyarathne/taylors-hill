import HeadingPrimary from "../../headings/heading-primary/HeadingPrimary";
import HeadingSub from "../../headings/heading-sub/HeadingSub";
import RoomBox from "../../room-box/RoomBox";
import MainTitle from "../main-title/MainTitle";
import TitleGroup from "../title-group/TitleGroup";

import {
  Container,
  SummeryWrapper,
  SummeryItem,
  DetailsWrapper,
  DescriptionWrapper,
  Description,
  FeaturesWrapper,
  FeatureItem,
  ImageSection,
  ImageItem,
  OtherRoomSection,
  OtherRoomsGroup,
} from "./RoomPageStyles";

const RoomPage = ({ primaryRoom, otherRooms }) => {
  const secondRow = primaryRoom.features.map((item) => item);
  const firstRow = secondRow.splice(0, Math.ceil(secondRow.length / 2));

  return (
    <Container>
      <SummeryWrapper>
        <div>
          {primaryRoom.summery.map((item, index) => (
            <SummeryItem key={index}>
              <h4>{item.title}</h4>
              <p>{item.data}</p>
            </SummeryItem>
          ))}
        </div>
      </SummeryWrapper>
      <DetailsWrapper>
        <DescriptionWrapper>
          <TitleGroup centered={false}>
            <HeadingPrimary>{primaryRoom.title}</HeadingPrimary>
            <HeadingSub>{primaryRoom.description}</HeadingSub>
          </TitleGroup>
          <Description>{primaryRoom.description}</Description>
        </DescriptionWrapper>
        <FeaturesWrapper>
          <h3>Room Features</h3>
          <ul>
            {firstRow.map((item) => (
              <FeatureItem>{item}</FeatureItem>
            ))}
          </ul>
          <ul>
            {secondRow.map((item) => (
              <FeatureItem>{item}</FeatureItem>
            ))}
          </ul>
        </FeaturesWrapper>
      </DetailsWrapper>
      <ImageSection>
        {primaryRoom.images.map((image, index) => {
          if (index < 2) return <ImageItem image={image} />;
        })}
      </ImageSection>
      <OtherRoomSection>
        <MainTitle mainHeading="View our other rooms" shadowHeading="Rooms" />
        <OtherRoomsGroup>
          {otherRooms.map((room) => (
            <RoomBox {...room} />
          ))}
        </OtherRoomsGroup>
      </OtherRoomSection>
    </Container>
  );
};

export default RoomPage;
