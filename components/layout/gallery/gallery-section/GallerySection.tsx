import { Section, Gallery } from "./GallerySectionStyles";

interface Props {
  images: GalleryImage[];
}

const GallerySection: React.FC<Props> = ({ images }: Props): JSX.Element => {
  return (
    <Section>
      <Gallery>
        {images.map((img: GalleryImage) => (
          <div key={img.id} style={{ backgroundImage: `url(${img.image})` }} />
        ))}
      </Gallery>
    </Section>
  );
};

export default GallerySection;
