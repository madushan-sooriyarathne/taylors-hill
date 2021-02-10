import { ReactNode } from "react";
import { Section, Image, Content } from "./ImageContentSectionStyles";

interface Props {
  image: string;
  children: ReactNode;
  reversed?: boolean;
}

const ImageContentSection: React.FC<Props> = ({
  image,
  children,
  reversed = false,
}: Props): JSX.Element => {
  return (
    <Section reversed={reversed}>
      <Image image={image} />
      <Content>{children}</Content>
    </Section>
  );
};

export default ImageContentSection;
