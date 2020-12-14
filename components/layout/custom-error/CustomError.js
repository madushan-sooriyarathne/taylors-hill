import TitleGroup from "../title-group/TitleGroup";
import Button from "../../buttons/button/Button";
import { Container, Heading, SubHeading } from "./CustomErrorStyles";

const CustomError = () => {
  return (
    <Container>
      <TitleGroup>
        <Heading>Four O'four</Heading>
        <SubHeading>It looks Like you're lost</SubHeading>
      </TitleGroup>
      <Button route="/">Go back to home</Button>
    </Container>
  );
};

export default CustomError;
