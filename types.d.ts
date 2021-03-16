import { Asset, Entry } from "contentful";
import { SetStateAction, Dispatch } from "react";

declare global {
  /** Application Data Types */

  // Room related types
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

  interface ContentfulRoomFields extends Room {
    image: Asset;
    images: Asset[];
  }

  type ContentfulRoomResult = Entry<ContentfulRoomFields>;

  // Activities & Excursion related types
  interface Excursion {
    id: string;
    image: string;
    images: string[];
    title: string;
    url: string;
    summery: string;
    description: string;
  }

  interface ContentfulExcursionFields extends Excursion {
    image: Asset;
    images: Asset[];
  }

  type ContentfulExcursionResult = Entry<ContentfulExcursionFields>;

  // Offer related types
  interface Offer {
    id: string;
    title: string;
    description: string;
    image: string;
    currency: "LKR" | "USD";
    price: number | null;
    discount: number | null;
    validTill: Date; // Date().toJSON();
    terms: string[];
    includes: string[];
  }

  interface ContentfulOfferFields extends Offer {
    image: Asset;
    validTill: Date;
  }

  type ContentfulOfferResult = Entry<ContentfulOfferFields>;

  // HeroSlide related types
  interface HeroSlide {
    id: number;
    image: string;
    text: {
      heading: string;
      description: string;
    };
    textPos: CSSGridPos;
  }

  interface ContentfulHeroSlideFields extends HeroSlide {
    image: Asset;
  }

  type ContentfulHeroSlideResult = Entry<ContentfulHeroSlideFields>;

  // Section Data related types
  interface SectionData {
    image: string;
    mainHeading: string;
    subHeading: string;
    shadowHeading: string;
    route: { url: string; name: string } | null;
    description: string;
  }

  interface ContentfulSectionDataFields extends SectionData {
    image: Asset;
  }

  type ContentfulSectionDataResult = Entry<ContentfulSectionDataFields>;

  // Gallery Images related types
  interface GalleryImage {
    image: string;
    type: string;
    id: number;
  }

  interface ContentfulGalleryImageFields extends GalleryImage {
    image: Asset;
  }

  type ContentfulGalleryImageResults = Entry<ContentfulGalleryImageFields>;

  /** Meta Types */

  type AlignmentProps = "center" | "left" | "right" | "justify";

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

  type DispatchFn<T> = Dispatch<SetStateAction<T>>;
}

export {};
