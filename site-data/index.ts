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

// TODO: Move all the section Data to CMS
const history: SectionData = {
  image: "/static/img/james-taylor.webp",
  mainHeading: "The History",
  subHeading: "History of Ceylon Tea & Taylors Hill",
  shadowHeading: "Our Story",
  route: null,
  description: ` The sterling story of the Plantation Estate <b>Pattiyagama</b> dates
          back to a coffee plantation in 18th Centaury established by a welsh
          planter <b>Dominic Elwes</b>, subsequently the coffee Blight called
          <i>Hemeleia vastatrix</i> in 1870s put an end to the coffee plantations.
          <br />
          <br />
          After setting sails to Ceylon by the protagonist of Ceylon Tea <b>James
          Taylor</b> emerged the Primal Tea plantation in Ceylon claimed <b>Filed no
          07</b> in Loolecondera. This regal embellishment led Ceylon to be the Tea
          Country under Her Majesty Queen Victoria’s Era.
          <br />
          <br />
          While his endeavor on establishing Tea in Ceylon, Taylor had fallen in
          love with Loolecondera Estate which is adjoining Pattiyagama Estate
          where he marked his name in gold as the pioneer of the legendary
          ceylon tea. Which made the central hill of Ceylon truly heavenly.
          Taylors Seat is where Taylor has foreseen the future of Ceylon Tea by
          glancing towards the astonishing sight towards Hills & Valleys
          visible.`,
};

const historyTaylorsHill: SectionData = {
  image: "/static/img/taylors-old.webp",
  mainHeading: "Pattiyagama Mansion",
  subHeading: "The Planters Gathering House",
  shadowHeading: "Taylors Hill",
  route: null,
  description: `<b>Taylors Hill</b> Known as Pattiyagama Mansion used to host Taylor and his fellow planters, Assisted by Dominic Elwis possessing as the Planters Gathering house. Tournament size 200 years old Burroughes and Watts “1836” Snooker table in house still enunciates the colonial day. <br><br>
  Subsequently the Mansion being taken by a trust at the end of Colonial Era prior acquiring this Mansion by E.L Senanayake an International Lawyer trained at Kings College London and a scion of the well-known E.L. Senanayake former Cabinet minister and Speaker of Parliament of Sri Lanka. This dynastic family owned large plantations for more than five generations to date. <br><br>
  Ingenious Colonial architecture of the mansion clarifies the uniqueness of its own boutique concept with quintuple dwellings in the loft, where a mezzanine allows a vast house room. Immense garden for a number of activities with an infinite pool overlooking the pinnacles of central hills & Valleys.`,
};

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
  history,
  historyTaylorsHill,
  gallerySelections,
};
