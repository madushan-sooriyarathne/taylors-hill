import { Section, Gallery } from "./GallerySectionStyles";

const images = [
  { id: 0, img: "/static/img/gallery/01.jpg" },
  { id: 1, img: "/static/img/gallery/02.jpg" },
  { id: 2, img: "/static/img/gallery/03.jpg" },
  { id: 3, img: "/static/img/gallery/04.jpg" },
  { id: 4, img: "/static/img/gallery/05.jpg" },
  { id: 5, img: "/static/img/gallery/06.jpg" },
  { id: 6, img: "/static/img/gallery/07.jpg" },
  { id: 7, img: "/static/img/gallery/08.jpg" },
  { id: 8, img: "/static/img/gallery/09.jpg" },
  { id: 9, img: "/static/img/gallery/10.jpg" },
  { id: 10, img: "/static/img/gallery/11.jpg" },
  { id: 11, img: "/static/img/gallery/12.jpg" },
  { id: 12, img: "/static/img/gallery/13.jpg" },
  { id: 13, img: "/static/img/gallery/14.jpg" },
];

const GallerySection = () => {
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
