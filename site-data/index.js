const navLinks = [
  { id: 0, name: "Home", route: "/" },
  { id: 1, name: "Story", route: "/story" },
  { id: 2, name: "Accommodation", route: "/accommodation" },
  { id: 3, name: "Experience", route: "/experience" },
  { id: 4, name: "Offers", route: "/offers" },
  { id: 5, name: "Wellness", route: "/wellness" },
  { id: 6, name: "Contact", route: "/contact" },
];

const rooms = [
  {
    id: "pattiygama-suite",
    title: "Pattiyagama Suite",
    type: "Quadruple Room",
    summery: [
      { title: "Size", data: "71 Sq.M" },
      { title: "Check-In", data: "1400 Hrs" },
      { title: "Check-Out", data: "1100 Hrs" },
      { title: "Bed Type", data: "1 King & 2 Single" },
    ],
    features: [
      "Bath Tub",
      "In-Room safe",
      "Room Services",
      "Free Laundry",
      "Free WiFi",
      "Rain-shower",
      "Hair Dryer",
      "Luxurious Amenities",
      "Heater",
    ],
    image: "/static/img/rooms/pattiyagama-01.webp",
    images: [
      "/static/img/rooms/pattiyagama-02.webp",
      "/static/img/rooms/pattiyagama-03.webp",
    ],
    description:
      "The Largest Suite Accommodates quadruple in a King-Sized double Bed with Two Single Beds. Overlooking central lawn of the Mansion appends the opulence of the Suite with a vast arena within the suite itself.",
  },
  {
    id: "loolecondera-suite",
    title: "Loolecondera Suite",
    type: "Triple Room",
    summery: [
      { title: "Size", data: "42 Sq.M" },
      { title: "Check-In", data: "1400 Hrs" },
      { title: "Check-Out", data: "1100 Hrs" },
      { title: "Bed Type", data: "1 King & 1 Single" },
    ],
    features: [
      "In-Room safe",
      "Room Services",
      "Free Laundry",
      "Free WiFi",
      "Rain-shower",
      "Hair Dryer",
      "Luxurious Amenities",
      "Heater",
    ],
    description:
      "Subsequent to the Master, This Suite Accommodates double with an optional single bed to anchor triple. The roomy appearance of Yellowish tone will charm the Stay",
    image: "/static/img/rooms/loolecondera-01.webp",
    images: [
      "/static/img/rooms/loolecondera-02.webp",
      "/static/img/rooms/loolecondera-03.webp",
    ],
  },
  {
    id: "taylor-room",
    title: "Taylor Room",
    type: "Twin Room",
    summery: [
      { title: "Size", data: "32 Sq.M" },
      { title: "Check-In", data: "1400 Hrs" },
      { title: "Check-Out", data: "1100 Hrs" },
      { title: "Bed Type", data: "2 Queen" },
    ],
    features: [
      "In-Room safe",
      "Room Services",
      "Free Laundry",
      "Free WiFi",
      "Rain-shower",
      "Hair Dryer",
      "Luxurious Amenities",
      "Heater",
    ],
    description:
      "Quintessentially Capacious Suite with pair of Two Queen Size Double Beds welcoming Small to the maiden household or two Adults.",
    image: "/static/img/rooms/taylor-01.webp",
    images: [
      "/static/img/rooms/taylor-02.webp",
      "/static/img/rooms/taylor-03.webp",
    ],
  },
  {
    id: "le-cocq-room",
    title: "Le Cocq Room",
    type: "Double Room",
    summery: [
      { title: "Size", data: "27 Sq.M" },
      { title: "Check-In", data: "1400 Hrs" },
      { title: "Check-Out", data: "1100 Hrs" },
      { title: "Bed Type", data: "1 King" },
    ],
    features: [
      "In-Room safe",
      "Room Services",
      "Free Laundry",
      "Free WiFi",
      "Rain-shower",
      "Hair Dryer",
      "Luxurious Amenities",
      "Heater",
    ],
    description:
      "The elegance of classic French splendor of this room favored for Couples, A large King-Size Bed with classic Roomy layout accomplish the Stay",
    image: "/static/img/rooms/le-cocq-01.webp",
    images: [
      "/static/img/rooms/le-cocq-02.webp",
      "/static/img/rooms/le-cocq-03.webp",
    ],
  },
  {
    id: "lipton-room",
    title: "Lipton Room",
    type: "Double Room",
    summery: [
      { title: "Size", data: "18 Sq.M" },
      { title: "Check-In", data: "1400 Hrs" },
      { title: "Check-Out", data: "1100 Hrs" },
      { title: "Bed Type", data: "1 King" },
    ],
    features: [
      "In-Room safe",
      "Room Services",
      "Free Laundry",
      "Free WiFi",
      "Rain-shower",
      "Hair Dryer",
      "Luxurious Amenities",
      "Heater",
    ],
    description:
      "Twee in the line but classical scarlet theme offers a significant glance to accommodate two Adults in a King-Sized Double Bed.",
    image: "/static/img/rooms/lipton-01.webp",
    images: [
      "/static/img/rooms/lipton-02.webp",
      "/static/img/rooms/lipton-03.webp",
    ],
  },
];

const ourStory = {
  image: "/static/img/th-morning-door.webp",
  mainHeading: "Taylors Hill",
  subHeading: "Sub Heading",
  shadowHeading: "Our Story",
  route: { url: "/about", name: "Explore" },
  description:
    "A 19th Century’s English mansion located in hill country of Kandy, chronicles The Ceylon Tea with its own indulgence offering an experiential luxury dwelling with incomparable boutique Concept. Extensive ventures within the premises compel the accommodation further the elaborate its concept.",
};

const history = {
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

const historyTaylorsHill = {
  image: "/static/img/taylors-old.webp",
  mainHeading: "Pattiyagama Mansion",
  subHeading: "The Planters Gathering House",
  shadowHeading: "Taylors Hill",
  route: null,
  description: `<b>Taylors Hill</b> Known as Pattiyagama Mansion used to host Taylor and his fellow planters, Assisted by Dominic Elwis possessing as the Planters Gathering house. Tournament size 200 years old Burroughes and Watts “1836” Snooker table in house still enunciates the colonial day. <br><br>
  Subsequently the Mansion being taken by a trust at the end of Colonial Era prior acquiring this Mansion by E.L Senanayake an International Lawyer trained at Kings College London and a scion of the well-known E.L. Senanayake former Cabinet minister and Speaker of Parliament of Sri Lanka. This dynastic family owned large plantations for more than five generations to date. <br><br>
  Ingenious Colonial architecture of the mansion clarifies the uniqueness of its own boutique concept with quintuple dwellings in the loft, where a mezzanine allows a vast house room. Immense garden for a number of activities with an infinite pool overlooking the pinnacles of central hills & Valleys.`,
};

const dining = {
  image: "/static/img/th-high-tea.webp",
  mainHeading: "Dining",
  subHeading: "A Dining Experience for the Discerning Epicurean",
  shadowHeading: "Cuisine",
  route: { url: "/dining", name: "Explore" },
  description: `Good Old English Dining Etiquettes with Authentic Sri Lankan Hospitality is served along with the finest creations of Western and Eastern recipes on the plate by our chefs. Mostly Organic & Country-side grown freshness will boost taste buds to limits where our supplies are from, Personalized fine-dining menus are at hand during the stay to spoil further!   

Various Dining locations at the Property will charm the experience like no other in its class.`,
};

const offers = [
  {
    id: "new-year-special",
    title: "Celebrations in classical exclusivity for 2021",
    description:
      "Safest Location to celebrate this new year in a class of its own",
    image: "/static/img/offers/new-year-special.webp",
    currency: "LKR",
    price: "100,000",
    discount: null,
    validTill: new Date(2021, 0, 2).toJSON(),
    terms: [
      "Additional adult meal supplement (on All-Inclusive Basis): LKR 10,000/- Per Adult (Up-to 14 Pax total).",
      "New Year's eve Gala Dinner supplement: LKR 3,500/- Per Adult.",
      "Rates are given nett.",
      "Pets are not allowed.",
    ],
    includes: [
      "Full Access to the mansion and all it's amenities.",
      "Meals on All-Inclusive basis for 8 Adults.",
      "House wine for the departure day dinner.",
      "Daily Fresh Fruit platter or Home-made chocolate platter",
      "New Year's eve Gala Dinner*",
    ],
  },

  {
    id: "honeymoon-delight-at-taylors-hill",
    title: "Honeymoon Delight at Taylors Hill",
    description:
      "Purchase our special Honeymoon voucher and experience exclusive value additions. ",
    image: "/static/img/offers/honeymoon-delight.webp",
    currency: "LKR",
    price: "80,000",
    discount: null,
    validTill: new Date(2021, 8, 30).toJSON(),
  },

  {
    id: "early-bird",
    title: "Early Bird Offer",
    description: "Book 60 days in advance to enjoy a 10% saving",
    image: "/static/img/offers/early-bird.webp",
    currency: "",
    price: "",
    discount: 10,
    validTill: new Date(2021, 3, 31).toJSON(),
  },
];

const slides = [
  {
    id: 0,
    image: "/static/img/hero-slider/img_01.webp",
    text: { heading: "Best in it's class", description: "some text" },
    textPos: { column: { start: 1, end: 2 }, row: { start: 2, end: 3 } },
  },
  {
    id: 1,
    image: "/static/img/hero-slider/img_02.webp",
    text: { heading: "Best in it's class", description: "some text" },
    textPos: { column: { start: 1, end: 2 }, row: { start: 1, end: 2 } },
  },
  {
    id: 2,
    image: "/static/img/hero-slider/img_03.webp",
    text: { heading: "Best in it's class", description: "some text" },
    textPos: { column: { start: 2, end: 3 }, row: { start: 2, end: 3 } },
  },
  {
    id: 3,
    image: "/static/img/hero-slider/img_04.webp",
    text: { heading: "Best in it's class", description: "some text" },
    textPos: { column: { start: 1, end: 2 }, row: { start: 2, end: 3 } },
  },
];

const excursions = [
  {
    id: "snooker",
    image: "/static/img/experience/snooker-01.webp",
    title: "Snooker",
  },
  {
    id: "croquet",
    image: "/static/img/experience/croquet-01.webp",
    title: "Croquet",
  },
  {
    id: "infinity-pool",
    image: "/static/img/experience/infinity-pool-01.webp",
    title: "Infinity Pool",
  },

  {
    id: "tennis",
    image: "/static/img/experience/tennis-01.webp",
    title: "Tennis",
  },

  {
    id: "badminton",
    image: "/static/img/experience/badminton-01.webp",
    title: "Badminton",
  },
];

const galleryImages = [
  { id: 0, img: "/static/img/gallery/01.webp" },
  { id: 1, img: "/static/img/gallery/02.webp" },
  { id: 2, img: "/static/img/gallery/03.webp" },
  { id: 3, img: "/static/img/gallery/04.webp" },
  { id: 4, img: "/static/img/gallery/05.webp" },
  { id: 5, img: "/static/img/gallery/06.webp" },
  { id: 6, img: "/static/img/gallery/07.webp" },
  { id: 7, img: "/static/img/gallery/08.webp" },
  { id: 8, img: "/static/img/gallery/09.webp" },
  { id: 9, img: "/static/img/gallery/10.webp" },
  { id: 10, img: "/static/img/gallery/11.webp" },
  { id: 11, img: "/static/img/gallery/12.webp" },
  { id: 12, img: "/static/img/gallery/13.webp" },
  { id: 13, img: "/static/img/gallery/14.webp" },
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

export {
  navLinks,
  rooms,
  ourStory,
  dining,
  offers,
  slides,
  excursions,
  galleryImages,
  months,
  days,
  history,
  historyTaylorsHill,
};
