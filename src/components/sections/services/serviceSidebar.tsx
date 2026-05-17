import Link from "next/link";

const servicesofside = [
  {
    name: "Solar Panel Installation",
    link: "/service/solar-panel-installation-in-lucknow/",
  },
  {
    name: "Residential Solar. ",
    link: "/service/residential-solar-installation-lucknow",
  },
  {
    name: "Commercial Solar",
    link: "/service/commercial-solar-installation-lucknow",
  },
  { name: "Solar AMC", link: "/service/solar-amc-lucknow/" },
  { name: "Solar Pumps", link: "/service/solar-water-pump-lucknow" },
  { name: "Solar Atta Chakki", link: "/service/solar-atta-chakki-lucknow" },
  { name: "Solar Street Light", link: "/service/solar-street-light-lucknow" },
];

const openingHours = [
  { day: "Mon - Sat", time: "10.00 AM - 6.00 PM" },
  { day: "Sun", time: "10.00 AM - 12.00 PM" },
  { day: "Friday", time: "Closed" },
  { day: "Emergency", time: "24 hours" },
];

const ServiceSidebar = ({ service }: { service?: any }) => {
  return (
    <div className="main-sidebar">
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h3>All Services</h3>
        </div>
        <div className="widget-categories">
          <ul>
            {servicesofside.map((servicesofside, index) => (
              <li key={index} >
                <Link href={servicesofside.link}>{servicesofside.name}</Link>
                <i className="fa-solid fa-arrow-right-long" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h3>Opening Hours</h3>
        </div>
        <div className="opening-category">
          <ul>
            {openingHours.map((hour, index) => (
              <li key={index}>
                <i className="fa-regular fa-clock" />
                {hour.day}: {hour.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="single-sidebar-image bg-cover" style={{ backgroundImage: 'url("/img/service/post.jpg")' }}>
                <div className="contact-text">
                    <div className="icon">
                        <i className="fa-solid fa-phone" />
                    </div>
                    <h4>Need Help? Call Here</h4>
                    <h5>
                        <Link href="tel:+2085550112">+91 8840315311</Link>
                    </h5>
                </div>
            </div> */}
      <div>
        <h3 className="mb-3" style={{ color: "var(--header)" }}>
          Why Choose Us?
        </h3>
        <ul className="list-unstyled mb-3 mt-2">
          {/* Use optional chaining and a fallback empty array */}
          {service?.whychooseus?.map((type: string, index: number) => (
            <li
              key={index}
              className="mb-2 d-flex align-items-center"
              style={{ color: "var(--text)" }}
            >
              <i className="fa-solid fa-circle-check text-theme-2 me-2 fs-5" />
              {type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceSidebar;
