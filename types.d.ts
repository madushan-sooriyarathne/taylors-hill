import { SetStateAction, Dispatch } from "react";

declare global {
  type AlignmentProps = "center" | "left" | "right" | "justify";

  interface Offer {
    title: string;
    image: string;
    description: string;
    id: string;
  }

  interface Room {
    id: string;
    title: string;
    type: string;
    summery: {
      title: string;
      data: string;
    }[];
    features: string[];
    image: string;
    images: string[];
    intro: string;
    description: string;
  }

  interface Excursion {
    id: string;
    image: string;
    images: string[];
    title: string;
    url: string;
    summery: string;
    description: string;
  }

  interface Offer {
    id: string;
    title: string;
    description: string;
    image: string;
    currency: "LKR" | "USD";
    price: number | null;
    discount: number | null;
    validTill: string; // Date().toJSON();
    terms: string[];
    includes: string[];
  }

  interface HeroSlides {
    id: number;
    image: string;
    text: {
      heading: string;
      description: string;
    };
    textPos: CSSGridPos;
  }

  interface SectionData {
    image: string;
    mainHeading: string;
    subHeading: string;
    shadowHeading: string;
    route: { url: string; name: string } | null;
    description: string;
  }

  interface GalleryImage {
    img: string;
    type: string;
    id: number;
  }

  interface GallerySelection {
    id: string;
    name: string;
  }

  type CSSStyles = { [key: string]: string };
  type CSSGridPos = {
    column: {
      start: number;
      end: number;
    };
    row: {
      start: number;
      end: number;
    };
  };

  type DispatchFn = Dispatch<SetStateAction<boolean>>;
}

export {};
