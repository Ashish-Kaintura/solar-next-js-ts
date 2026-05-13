type MenuLink = {
  title: string;
  link: string;
};

export type MegaMenuDataType = {
  image: string;
  title: string;
  links: MenuLink[];
};

export type SubMenuDataType = {
  title: string;
  link: string;
  submenu?: MenuLink[];
};

export type MenuItemDataType = {
  title: string;
  link: string;
  megamenu?: MegaMenuDataType[];
  submenu?: SubMenuDataType[];
};

export const menuData: MenuItemDataType[] = [
  {
    title: "Home",
    link: "/",
    // megamenu: [
    //   {
    //     image: '/img/header/home-1.jpg',
    //     title: 'Home 01',
    //     links: [
    //       { title: 'Multi Page', link: '/' },
    //       { title: 'One Page', link: '/home-one-single' },
    //     ],
    //   },
    //   {
    //     image: '/img/header/home-2.jpg',
    //     title: 'Home 02',
    //     links: [
    //       { title: 'Multi Page', link: 'home-two' },
    //       { title: 'One Page', link: '/home-two-single' },
    //     ],
    //   },
    //   {
    //     image: '/img/header/home-3.jpg',
    //     title: 'Home 03',
    //     links: [
    //       { title: 'Multi Page', link: 'home-three' },
    //       { title: 'One Page', link: '/home-three-single' },
    //     ],
    //   },
    //   {
    //     image: '/img/header/home-4.jpg',
    //     title: 'Home 04',
    //     links: [
    //       { title: 'Multi Page', link: 'home-four' },
    //       { title: 'One Page', link: '/home-four-single' },
    //     ],
    //   },
    // ],
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Solar Solutions",
    link: "/service",
    submenu: [
      // { title: 'Services', link: '/service' },
      // { title: 'Service Carousel', link: '/service-carousel' },
      // { title: 'Service Details', link: '/service-details' },
      { title: "Solar Panel Installation", link: "/service/1" },
      { title: "Residential Solar Solutions", link: "/service/1" },
      { title: "Commercial Solar Solutions", link: "/service/6" },
      { title: "Solar AMC", link: "/service/2" },
      { title: "Solar Pumps", link: "/service/3" },
      { title: "Solar Street Light", link: "/service/5" },
      { title: " Solar Atta Chakki", link: "/service/4" },
    ],
  },
  {
    title: "Projects",
    link: "/project",
    // submenu: [
    //   {
    //     title: 'Projects',
    //     link: '/project',
    //     submenu: [
    //       { title: 'Project', link: '/project' },
    //       { title: 'Project Carousel', link: '/project-carousel' },
    //       { title: 'Project Details', link: '/project-details' },
    //     ],
    //   },
    //   {
    //     title: 'Team',
    //     link: '/team',
    //     submenu: [
    //       { title: 'Our Team', link: '/team' },
    //       { title: 'Team Carousel', link: '/team-carousel' },
    //       { title: 'Team Details', link: '/team-details' },
    //     ],
    //   },
    //   { title: 'Pricing', link: '/pricing' },
    //   { title: 'Faq\'s', link: '/faq' },
    //   { title: '404 Page', link: '/404' },
    // ],
  },
  {
    title: "Blog",
    link: "/news",
    // submenu: [
    //   { title: 'Blog Grid', link: '/news' },
    //   { title: 'Blog Standard', link: '/news-standard' },
    //   { title: 'Blog Details', link: '/news-details' },
    // ],
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
