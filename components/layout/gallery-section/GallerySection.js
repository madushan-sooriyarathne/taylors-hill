import { Section, Gallery } from "./GallerySectionStyles";

const GallerySection = ({ images }) => {
  return (
    <Section>
      <Gallery>
        {images.map((img) => (
          <div key={img.id} style={{ backgroundImage: `url(${img.img})` }} />
        ))}
      </Gallery>
    </Section>
  );
};

export default GallerySection;
