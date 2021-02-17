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
const rooms: Room[] = [
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
    intro:
      "The Largest Suite Accommodates quadruple in a King-Sized double Bed with Two Single Beds. Overlooking central lawn of the Mansion appends the opulence of the Suite with a vast arena within the suite itself.",
    description: `The Master Suite at Taylors Hill to accommodate up to 4 Adults, the larger floor area of the unit makes this suite an exact master suite offering a colonial feel. The Name Pattiyagama was given to express the size of this suite as the location of Taylors Hill also called Pattiyagama Estate.  

Main and the front lawns are visible to assure the pleasing view of this suite and the Maroon color theme is the prime tone to enhance the royal feel, an Authentic fireplace with the living area as well as an adjoining room to cover this room as quad triple will accomplish the true luxury. The separation unit between the adjoining room will allow this room to be a double configured suite on demand. Option for a baby cot is always available upon request     

Fully equipped attach bathroom including bathtub and rain shower, also with all the standard amenities to make the suite beyond judgment. 

This room should not miss at Taylor's if available at the stay.`,
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
    intro:
      "Subsequent to the Master, This Suite Accommodates double with an optional single bed to anchor triple. The roomy appearance of Yellowish tone will charm the Stay",
    image: "/static/img/rooms/loolecondera-01.webp",
    images: [
      "/static/img/rooms/loolecondera-02.webp",
      "/static/img/rooms/loolecondera-03.webp",
    ],
    description: `Second of the Two Suites at Taylors Hill, Loolecondera named after the primal tea estate harvested by James Taylor. Extensive name to unwarp this suite as the second Largest Room. Ruby mixed with a golden color theme to light up the ambiance in its classical colonial theme. 

The basic configuration of this room is a double with a king-size bed and a separate living area overlooking the southside of the main lawn and central highlands. The space of the room is allowing another full-size single bed to fit in by making the triple on request.    

Classical luxury amenities and facilities come out with the Suite with an attached bathroom. Loolecondera Suite is much preferred as a duplet or a triplet as a mid-range family suite. 

The Charm of this room is no second to any of the other accommodation options at Taylors Hill as this suite carries its own uniformity. Loolecondera Suite is a spotlight suite to mention by the name itself kept after the inception estate of Ceylon Tea.  `,
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
    intro:
      "Quintessentially Capacious Suite with pair of Two Queen Size Double Beds welcoming Small to the maiden household or two Adults.",
    image: "/static/img/rooms/taylor-01.webp",
    images: [
      "/static/img/rooms/taylor-02.webp",
      "/static/img/rooms/taylor-03.webp",
    ],
    description: `Taylors at Taylors Hill would be short in style to name this room, The Taylor Family room is one of three-standard room at Taylors Hill Hotel. The Taylors Hill by itself as well as Taylor Room is named after James Taylor by paying respect for inventing Ceylon tea and making this island nation rich in tea. 

Two Queen Size Four Paster Classical beds to accommodate Two Adults and Two Children or Three Adults leaving the option to feasible with the requirement. The rosé tone of this room is the symbol of being pampered by the ambiance.  

Identical view to its superior suites, the south side of the main lawn is easily seen as the prime view of Taylor Room. Standard Luxury facilities and amenities are at the disposal to make this family to up to the standard of Taylors Hill.     
    `,
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
    intro:
      "The elegance of classic French splendor of this room favored for Couples, A large King-Size Bed with classic Roomy layout accomplish the Stay",
    image: "/static/img/rooms/le-cocq-01.webp",
    images: [
      "/static/img/rooms/le-cocq-02.webp",
      "/static/img/rooms/le-cocq-03.webp",
    ],
    description: `The fairly-tale of Taylors Hill also known as the Le Cocq room loved by couples, Room in the French style to offer the most romantic duplet at Taylors Hill. the room named after the one of primal plantation owners during British rule who settled himself in Pattiyagama Estate.  

The king-sized double bed configuration allows this room to be one of two standard double rooms at the Hotel, size of this double room is ideal for a couple to be spoiled as the saxe-blue theme of the room further defines it.   

This room is having a partial view of the front lawn and the same luxury will be honored the guests staying in this room received as per the standards of Taylors Hill.  

This French-style elegance will certainly charm the stay if this goes with the wish  `,
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
    intro:
      "Twee in the line but classical scarlet theme offers a significant glance to accommodate two Adults in a King-Sized Double Bed.",
    image: "/static/img/rooms/lipton-01.webp",
    images: [
      "/static/img/rooms/lipton-02.webp",
      "/static/img/rooms/lipton-03.webp",
    ],
    description: `The Twee among all the Taylors Accommodation, yet much loved by many considering its own style and the color theme, Each Room of Taylors Hill possesses its own tone to rectify the impression & a tag to address the room. Lipton has got the scarlet theme by assuring its own style and named after Thomas Lipton who had the tea venture with James Taylor.  

Kind-Sized Double Room can be used as a Double or Double for Single Use as the room can only accommodate up to a pair. Similar to Le Coq partial view of the front lawn will be seen from the room, Taylors standards are offered in Lipton.   

Every so often this handy-sized room will fulfill the Experience at Taylors Hill to the expectations.  `,
  },
];

const ourStory: SectionData = {
  image: "/static/img/th-morning-door.webp",
  mainHeading: "Taylors Hill",
  subHeading: "Sub Heading",
  shadowHeading: "Our Story",
  route: { url: "/about", name: "Explore" },
  description:
    "A 19th Century’s English mansion located in hill country of Kandy, chronicles The Ceylon Tea with its own indulgence offering an experiential luxury dwelling with incomparable boutique Concept. Extensive ventures within the premises compel the accommodation further the elaborate its concept.",
};

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

const dining: SectionData = {
  image: "/static/img/th-high-tea.webp",
  mainHeading: "Dining",
  subHeading: "A Dining Experience for the Discerning Epicurean",
  shadowHeading: "Cuisine",
  route: { url: "/dining", name: "Explore" },
  description: `Good Old English Dining Etiquettes with Authentic Sri Lankan Hospitality is served along with the finest creations of Western and Eastern recipes on the plate by our chefs. Mostly Organic & Country-side grown freshness will boost taste buds to limits where our supplies are from, Personalized fine-dining menus are at hand during the stay to spoil further! Various Dining locations at the Property will charm the experience like no other in its class.`,
};

const offers: Offer[] = [
  {
    id: "new-year-special",
    title: "Celebrations in classical exclusivity for 2021",
    description:
      "Safest Location to celebrate this new year in a class of its own",
    image: "/static/img/offers/new-year-special.webp",
    currency: "LKR",
    price: 100000,
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
    price: 80000,
    discount: null,
    validTill: new Date(2021, 8, 30).toJSON(),
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
    id: "early-bird",
    title: "Early Bird Offer",
    description: "Book 60 days in advance to enjoy a 10% saving",
    image: "/static/img/offers/early-bird.webp",
    currency: "LKR",
    price: null,
    discount: 10,
    validTill: new Date(2021, 3, 31).toJSON(),
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
];

const slides: HeroSlides[] = [
  {
    id: 0,
    image: "/static/img/hero-slider/img_01.webp",
    text: {
      heading: "Classical Luxury",
      description: "Unveiling the Finest exclusivity to extensive limits.",
    },
    textPos: { column: { start: 1, end: 2 }, row: { start: 2, end: 3 } },
  },
  {
    id: 1,
    image: "/static/img/hero-slider/img_02.webp",
    text: {
      heading: "Inimitable Exclusivity",
      description: "Absolute Concept in beyond comparison to cater the best",
    },
    textPos: { column: { start: 1, end: 2 }, row: { start: 2, end: 3 } },
  },
  {
    id: 2,
    image: "/static/img/hero-slider/img_03.webp",
    text: {
      heading: "Ingenious Concept",
      description: "Expressions of the first-class",
    },
    textPos: { column: { start: 1, end: 2 }, row: { start: 1, end: 2 } },
  },
  {
    id: 3,
    image: "/static/img/hero-slider/img_04.webp",
    text: {
      heading: "Expeditions with Elegance",
      description: "The Native excursions in the Original Term",
    },
    textPos: { column: { start: 1, end: 2 }, row: { start: 2, end: 3 } },
  },
];

const excursions: Excursion[] = [
  {
    id: "snooker",
    image: "/static/img/experience/snooker-01.webp",
    images: ["/static/img/story-cover.webp", "/static/img/offers-cover.webp"],
    title: "Snooker",
    url: "/experience/snooker",
    summery:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    description: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure`,
  },
  {
    id: "croquet",
    image: "/static/img/experience/croquet-01.webp",
    images: ["/static/img/story-cover.webp", "/static/img/offers-cover.webp"],
    title: "Croquet",
    url: "/experience/croquet",
    summery:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    description: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure`,
  },
  {
    id: "infinity-pool",
    image: "/static/img/experience/infinity-pool-01.webp",
    images: ["/static/img/story-cover.webp", "/static/img/offers-cover.webp"],
    title: "Infinity Pool",
    url: "/experience/infinity-pool",
    summery:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    description: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure`,
  },

  {
    id: "tennis",
    image: "/static/img/experience/tennis-01.webp",
    images: ["/static/img/story-cover.webp", "/static/img/offers-cover.webp"],
    title: "Tennis",
    url: "/experience/tennis",
    summery:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    description: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure`,
  },

  {
    id: "badminton",
    image: "/static/img/experience/badminton-01.webp",
    images: ["/static/img/story-cover.webp", "/static/img/offers-cover.webp"],
    title: "Badminton",
    url: "/experience/badminton",
    summery:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    description: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure`,
  },
];

const galleryImages: GalleryImage[] = [
  { id: 0, img: "/static/img/gallery/01.webp", type: "rooms" },
  { id: 1, img: "/static/img/gallery/02.webp", type: "rooms" },
  { id: 2, img: "/static/img/gallery/03.webp", type: "rooms" },
  { id: 3, img: "/static/img/gallery/04.webp", type: "common-areas" },
  { id: 4, img: "/static/img/gallery/05.webp", type: "pool-area" },
  { id: 5, img: "/static/img/gallery/06.webp", type: "garden" },
  { id: 6, img: "/static/img/gallery/07.webp", type: "rooms" },
  { id: 7, img: "/static/img/gallery/08.webp", type: "pool-area" },
  { id: 8, img: "/static/img/gallery/09.webp", type: "garden" },
  { id: 9, img: "/static/img/gallery/10.webp", type: "common-areas" },
  { id: 10, img: "/static/img/gallery/11.webp", type: "garden" },
  { id: 11, img: "/static/img/gallery/12.webp", type: "common-areas" },
  { id: 12, img: "/static/img/gallery/13.webp", type: "common-areas" },
  { id: 13, img: "/static/img/gallery/14.webp", type: "common-areas" },
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
  gallerySelections,
};
