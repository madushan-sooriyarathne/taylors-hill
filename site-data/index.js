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
    id: 0,
    title: "Pattiyagama Suite",
    url: "/accommodation/pattiyagama-suite",
    image: "/static/img/rooms/pattiyagama.jpg",
  },
  {
    id: 0,
    title: "Loolecondera Suite",
    url: "/accommodation/loolecondera-suite",
    image: "/static/img/rooms/loolecondera.jpg",
  },
  {
    id: 0,
    title: "Taylor Room",
    url: "/accommodation/taylor-room",
    image: "/static/img/rooms/taylor.jpg",
  },
  {
    id: 0,
    title: "Le Cocq Room",
    url: "/accommodation/le-cocq-room",
    image: "/static/img/rooms/le-cocq.jpg",
  },
  {
    id: 0,
    title: "Lipton Room",
    url: "/accommodation/lipton-room",
    image: "/static/img/rooms/lipton.jpg",
  },
];

const ourStory = {
  image: "/static/img/th-morning-door.jpg",
  mainHeading: "Taylors Hill",
  subHeading: "Sub Heading",
  shadowHeading: "Our Story",
  route: { url: "/about", name: "Explore" },
  description:
    "A 19th Century’s English mansion located in hill country of Kandy, chronicles The Ceylon Tea with its own indulgence offering an experiential luxury dwelling with incomparable boutique Concept. Extensive ventures within the premises compel the accommodation further the elaborate its concept.",
};

const dining = {
  image: "/static/img/th-high-tea.jpg",
  mainHeading: "Dining",
  subHeading: "A Dining Experience for the Discerning Epicurean",
  shadowHeading: "Cuisine",
  route: { url: "/dining", name: "Explore" },
  description: `Good Old English Dining Etiquettes with Authentic Sri Lankan Hospitality is served along with the finest creations of Western and Eastern recipes on the plate by our chefs. Mostly Organic & Country-side grown freshness will boost taste buds to limits where our supplies are from, Personalized fine-dining menus are at hand during the stay to spoil further!   

Various Dining locations at the Property will charm the experience like no other in its class.`,
};

export { navLinks, rooms, ourStory, dining };
