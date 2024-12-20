import servicesBg from "../assets/aboutus-bg.jpg";
import SEOHelmet from "../SEOHelmet/SEOHelmet";
import servicesArchitecture from "../assets/services-architecture.png";
import servicesInteriorExterior from "../assets/services-Interior-Exterior.png";
import servicesModernCorporate from "../assets/services-Modern-Corporate.png";
import servicesResidentialDesign from "../assets/services-Residential-Design.png";
import services3DModelling from "../assets/services-3D-Modelling.png";
import servicesMinimalistHome from "../assets/services-Minimalist-Home.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Services() {
  const location = useLocation();

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, [location]);
  const servicesList = [
    {
      title: "Architecture",
      description:
        "Our services tortor vel orci efficitur, in venenatis felis molestie. In lobortis odio augue.",
      image: servicesArchitecture,
    },
    {
      title: "Interior & Exterior",
      description:
        "Our services tortor vel orci efficitur, in venenatis felis molestie. In lobortis odio augue.",
      image: servicesInteriorExterior,
    },
    {
      title: "Modern Corporate",
      description:
        "Our services tortor vel orci efficitur, in venenatis felis molestie. In lobortis odio augue.",
      image: servicesModernCorporate,
    },
    {
      title: "Residential Design",
      description:
        "Our services tortor vel orci efficitur, in venenatis felis molestie. In lobortis odio augue.",
      image: servicesResidentialDesign,
    },
    {
      title: "3D Modelling",
      description:
        "Our services tortor vel orci efficitur, in venenatis felis molestie. In lobortis odio augue.",
      image: services3DModelling,
    },
    {
      title: "Minimalist Home",
      description:
        "Our services tortor vel orci efficitur, in venenatis felis molestie. In lobortis odio augue.",
      image: servicesMinimalistHome,
    },
  ];

  return (
    <div>
      <SEOHelmet
        title="Services - Mukthar Interiors"
        description="Explore the wide range of interior design services offered by Mukthar Interiors. From concept to completion, we provide expert solutions to bring your dream spaces to life."
        keywords="Interior Design Services, Mukthar Interiors, Residential Design, Commercial Design, Architecture, Home Decor, Space Planning"
        ogImage="https://www.muktharinteriors.com/assets/services-og-image.jpg"
        url="https://www.muktharinteriors.com/services"
      />
      <div
        className="relative -top-28 left-0 overflow-hidden bg-cover -z-10 text-white h-[400px] flex items-center"
        style={{ backgroundImage: `url(${servicesBg})` }}
      >
        {/* Background overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

        {/* Text moved inside the overlay */}
        <div className="relative z-10 lg:ps-20 ps-10">
          <h1 className="md:text-6xl text-4xl font-semibold ps-8 border-l-2 border-[#d2ac6e]">
            Services.
          </h1>
        </div>
      </div>
      <div className="mt-[-112px] bg-[#f1f1f1] md:py-28 py-10">
        <div className="md:space-y-7 space-y-5 max-w-[900px] px-5 mx-auto text-center">
          <h4 className="md:text-sm text-xs uppercase text-[#d2ac6e]  tracking-[5px]">
            OUR SERVICES
          </h4>
          <h1 className="md:text-6xl text-4xl  text-black  font-semibold ">
            Best Services From Mukthar
          </h1>
          <h3 className="text-[#616161] text-sm md:text-base md:leading-6 leading-6 tracking-wide">
            We specialize in creating stylish, functional spaces with a focus on
            quality craftsmanship and innovative design. Let us bring your
            vision to life.
          </h3>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:px-20 md:px-10 px-5 md:gap-10 gap-5 mt-10">
          {servicesList?.map(({ title, description, image }, index) => (
            <div
              className="border-[#d2ac6e] border w-full lg:min-h-[250px] min-h-[200px] flex flex-col md:items-start items-center space-y-4 p-10"
              key={index}
            >
              <img src={image} alt={`${title} Image`} loading="lazy"  className="h-32"/>
              <h2 className="text-2xl font-semibold">{title}</h2>
              <h3 className="leading-7 text-[#616161] text-sm md:text-base ">
                {description}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
