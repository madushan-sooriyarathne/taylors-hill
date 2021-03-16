import { useCallback, useEffect, useState, MouseEvent } from "react";
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

interface Props {
  images: GalleryImage[];
  gallerySelections: GallerySelection[];
}

const GalleryPage: React.FC<Props> = ({
  images,
  gallerySelections,
}: Props): JSX.Element => {
  const [sliderOpen, setSliderOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<GalleryImage[]>(images);
  const [clickedImg, setClickedImage] = useState<number>(0);
  const [pageLoaded, setPageLoaded] = useState<boolean>(true);

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

  // filter images depending on the type of images selected
  useEffect((): void => {
    setSelectedImages(
      images.filter((img: GalleryImage): boolean => {
        if (!selected || selected === "all") return true;
        return img.type === selected;
      })
    );
  }, [selected]);

  // Forcefully setting the body size to 100vh & 100vw with no overflow
  // when slider is open to hide the vertical scroll bar
  useEffect(() => {
    if (sliderOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [sliderOpen]);

  // slider open click handler
  const handleImageClick: (
    event: MouseEvent<HTMLDivElement>
  ) => void = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const el: HTMLDivElement | null = (event.target as HTMLDivElement).closest(
      ".img"
    );

    if (el) {
      const index: string | undefined = el.dataset.index;
      setClickedImage(parseInt(index as string));
    }

    setSliderOpen((prevState: boolean): boolean => !prevState);
  }, []);

  return (
    <Container>
      <SelectionPanel>
        {gallerySelections.map((item: GallerySelection) => (
          <SelectionItem
            selected={item.id === (selected ? selected : "all")}
            onClick={(): void => {
              setSelected(item.id);
              setPageLoaded(false);
            }}
            key={item.id}
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
            image={selectedImages[index].image}
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
          images={selectedImages.map((img) => img.image)}
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
