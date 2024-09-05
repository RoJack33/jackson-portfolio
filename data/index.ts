export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Effective communicator who collaborates well with clients, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.avif",
    spareImg: "",
  },
  {
    id: 2,
    title: "with time zone communications",
    description: "I'm very open and flexible",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently diving into 3D Animation",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Yelp Camp",
    des: "Explore and review campgrounds worldwide with this interactive clusters. Featuring full-stack application with express and authorization with passport.js",
    img: "/public/Yelpcamp.png",
    iconLists: ["/javascript.svg", "/bootstrap.svg", "/nodejs.svg", "/mongo.svg"],
    link: "https://github.com/RoJack33/YelpCamp/tree/leaflet-implementation",
  },
  {
    id: 2,
    title: "Nike Home Page",
    des: "Recreated the Nike website home page, combining react and tailwinds CSS...",
    img: "/Nike.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://github.com/RoJack33/Nike-Home-Page-Tailwind",
  },
  {
    id: 3,
    title: "Burger Order App",
    des: "A Software-as-a-Service app to satisfy your crave, with optimized state management.",
    img: "/Burger-Order-App.png",
    iconLists: ["/re.svg", "/tail.svg", "/redux.svg"],
    link: "https://github.com/RoJack33/Burger-Order-App",
  },
  {
    id: 4,
    title: "Events Viewing",
    des: "Featuring upcoming events, connecting people by creating, editing and deleting events..",
    img: "/Events-Viewing.png",
    iconLists: ["/re.svg", "/tail.svg", "/nodejs.svg", "/jwt.svg"],
    link: "https://github.com/RoJack33/EventsViewing",
  },
];

export const testimonials = [
  {
    quote:
      "I focused on creating applications whose UI adepts to various devices, providing optimal viewing and user experiences. First I start with smallest media screens, rendering the key components and maintain readability and accessibility. Visual hierarchy stays the top priority with the implementation of flexible grids, fluid images, and media queries. Demo with Tailwindcss :<div className= 'flex flex-wrap w-auto lg:justify-center lg:max-w-[90vw]' ...>.",
    name: "Responsive Design",
    title: "",
  },
  {
    quote:
      "I value simple content structure, clean design patterns, and thoughtful interactions. I tend to separate components with different functionals to maintain simplicity, so that cross-functional teams will understand the purpose of the code components. I regularly log through the application in the aspect of performance and network, and reduce load time as much as possible to provide better user experiences.",
    name: "Optimization",
    title: "",
  },
  {
    quote:
      "I am adept at debugging code, leveraging tools like debuggers, logging, and test cases to quickly identify and fix issues. My approach involves isolating variables, tracing code execution, and analyzing error messages to resolve bugs efficiently.",
    name: "Problem Solving",
    title: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "Cloudinary",
    img: "/cloud.svg",
    nameImg: "/",
  },
  {
    id: 2,
    name: "NodeJS",
    img: "/nodejs.svg",
    nameImg: "/",
  },
  {
    id: 3,
    name: "MongoDB",
    img: "/mongo.svg",
    nameImg: "/h",
  },
  {
    id: 4,
    name: "Redux",
    img: "/redux.svg",
    nameImg: "/",
  },
  {
    id: 5,
    name: "Three.JS",
    img: "/three.svg",
    nameImg: "/d",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Executive Engineer - Surbana Jurong",
    desc: "Execute the projects independently, pursuing new opportunity by comparing market competitively.",
    className: "md:col-span-2",
    thumbnail: "/building.svg",
  },
  {
    id: 2,
    title: "Project Engineer - Asia Piling Co",
    desc: "Oversee and coordinate construction activities, collaborative with suppliers.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/civil.svg",
  },
  {
    id: 3,
    title: "Civil Engineer - OneSmart Engineering",
    desc: "Designed and developed construction drawing for infrastructure.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/train.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/RoJack33",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jackson-lau-99190030a/",
  },
];
