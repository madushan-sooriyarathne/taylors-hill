import { useCallback, useEffect, useState } from "react";
import { useSpring, useTrail } from "react-spring";

import ImageCarousel from "../../../image-carousel/ImageCarousel";

import {
  Container,
  ImageGrid,
  SelectionPanel,
  SelectionItem,
  ImageBox,
  GallerySliderOverlay,
  SliderOverLayCloseBtn,
} from "./GalleryPageStyles";

const gallerySelections = [
  { name: "All", id: "all" },
  { name: "Rooms", id: "rooms" },
  { name: "Common Areas", id: "common-areas" },
  { name: "Garden", id: "garden" },
  { name: "Pool Area", id: "pool-area" },
  { name: "Surrounding", id: "surrounding" },
];

const images = [
  { src: "/static/img/gallery/01.webp", type: "rooms" },
  { src: "/static/img/gallery/02.webp", type: "rooms" },
  { src: "/static/img/gallery/03.webp", type: "rooms" },
  { src: "/static/img/gallery/04.webp", type: "common-areas" },
  { src: "/static/img/gallery/05.webp", type: "pool-area" },
  { src: "/static/img/gallery/06.webp", type: "garden" },
  { src: "/static/img/gallery/07.webp", type: "room" },
  { src: "/static/img/gallery/08.webp", type: "pool-area" },
  { src: "/static/img/gallery/09.webp", type: "garden" },
  { src: "/static/img/gallery/10.webp", type: "common-areas" },
  { src: "/static/img/gallery/11.webp", type: "garden" },
  { src: "/static/img/gallery/12.webp", type: "common-areas" },
  { src: "/static/img/gallery/13.webp", type: "common-areas" },
  { src: "/static/img/gallery/14.webp", type: "common-areas" },
];

const GalleryPage = () => {
  const [sliderOpen, setSliderOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selectedImages, setSelectedImages] = useState(images);
  const [clickedImg, setClickedImage] = useState(0);
  const [pageLoaded, setPageLoaded] = useState(true);

  // image list animation
  const trail = useTrail(selectedImages.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    from: {
      opacity: pageLoaded ? 1 : 0,
      transform: pageLoaded ? "translateX(0)" : "translateX(-5px)",
    },
    opacity: 1,
    transform: "translateX(0)",
  });

  // Overlay slider animation;
  const props = useSpring({
    transform: sliderOpen ? "translateY(0)" : "translateY(-100%)",
  });

  useEffect(() => {
    setSelectedImages(
      images.filter((img) => {
        if (!selected || selected === "all") return true;
        return img.type === selected;
      })
    );
  }, [selected]);

  useEffect(() => {
    if (sliderOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [sliderOpen]);

  // slider open click handler
  const handleImageClick = useCallback((event) => {
    const el = event.target.closest(".img");

    if (el) {
      const index = el.dataset.index;
      setClickedImage(parseInt(index));
    }

    setSliderOpen((prevState) => !prevState);
  }, []);

  return (
    <Container>
      <SelectionPanel>
        {gallerySelections.map((item) => (
          <SelectionItem
            selected={item.id === (selected ? selected : "all")}
            onClick={() => {
              setSelected(item.id);
              setPageLoaded(false);
            }}
          >
            {item.name}
          </SelectionItem>
        ))}
      </SelectionPanel>
      <ImageGrid>
        {trail.map(({ transform, ...rest }, index) => (
          <ImageBox
            key={index}
            className="img"
            data-index={index}
            onClick={handleImageClick}
            image={selectedImages[index].src}
            style={{
              transform: transform.interpolate((x) => x),
              ...rest,
            }}
          />
        ))}
      </ImageGrid>
      <GallerySliderOverlay
        style={{ transform: props.transform.interpolate((y) => y) }}
      >
        <ImageCarousel
          height="80%"
          width="80%"
          images={selectedImages.map((img) => img.src)}
          defaultIndex={clickedImg}
        />
        <SliderOverLayCloseBtn onClick={handleImageClick}>
          Close
        </SliderOverLayCloseBtn>
      </GallerySliderOverlay>
    </Container>
  );
};

export default GalleryPage;
