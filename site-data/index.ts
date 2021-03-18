// Nav Links
const navLinks = [
  { id: 0, name: "Home", route: "/" },
  { id: 1, name: "Story", route: "/story" },
  { id: 2, name: "Accommodation", route: "/accommodation" },
  { id: 3, name: "Experience", route: "/experience" },
  { id: 4, name: "Offers", route: "/offers" },
  { id: 5, name: "Gallery", route: "/gallery" },
  { id: 6, name: "Contact", route: "/contact" },
];

// Gallery Image type selectors
const gallerySelections: GallerySelection[] = [
  { name: "All", id: "all" },
  { name: "Rooms", id: "rooms" },
  { name: "Common Areas", id: "common-areas" },
  { name: "Garden", id: "garden" },
  { name: "Pool Area", id: "pool-area" },
  { name: "Surrounding", id: "surrounding" },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const socials = [
  {
    id: 0,
    name: "Facebook",
    logo: "facebook",
    url: "https://www.facebook.com/taylorshillsrilanka",
  },
  {
    id: 1,
    name: "Instagram",
    logo: "instagram",
    url: "https://www.instagram.com/taylorshillboutiquehotel",
  },
  {
    id: 2,
    name: "LinkedIn",
    logo: "linkedin",
    url: "https://www.linkedin.com/company/taylors-hill-boutique-hotel",
  },
];

const footerLinks = [
  { id: 0, name: "Contact", route: "/contact" },
  { id: 1, name: "Privacy", route: "/privacy" },
  {
    id: 2,
    name: "Payment & Cancellations",
    route: "/payment-cancellation-policy",
  },
];

// TODO: Move all the section Data to CMS

const galleryImages: GalleryImage[] = [
  { id: 0, image: "/static/img/gallery/01.webp", type: "rooms" },
  { id: 1, image: "/static/img/gallery/02.webp", type: "rooms" },
  { id: 2, image: "/static/img/gallery/03.webp", type: "rooms" },
  { id: 3, image: "/static/img/gallery/04.webp", type: "common-areas" },
  { id: 4, image: "/static/img/gallery/05.webp", type: "pool-area" },
  { id: 5, image: "/static/img/gallery/06.webp", type: "garden" },
  { id: 6, image: "/static/img/gallery/07.webp", type: "rooms" },
  { id: 7, image: "/static/img/gallery/08.webp", type: "pool-area" },
  { id: 8, image: "/static/img/gallery/09.webp", type: "garden" },
  { id: 9, image: "/static/img/gallery/10.webp", type: "common-areas" },
  { id: 10, image: "/static/img/gallery/11.webp", type: "garden" },
  { id: 11, image: "/static/img/gallery/12.webp", type: "common-areas" },
  { id: 12, image: "/static/img/gallery/13.webp", type: "common-areas" },
  { id: 13, image: "/static/img/gallery/14.webp", type: "common-areas" },
];

export {
  navLinks,
  galleryImages,
  months,
  days,
  socials,
  footerLinks,
  gallerySelections,
};
