import { Section, Image, Content } from "./ImageContentSectionStyles";

const ImageContentSection = ({ image, children, reversed = false }) => {
  return (
    <Section reversed={reversed}>
      <Image image={image} />
      <Content>{children}</Content>
    </Section>
  );
};

export default ImageContentSection;
