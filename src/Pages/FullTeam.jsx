import { useLocation } from "react-router-dom";
import SEOHelmet from "../SEOHelmet/SEOHelmet";
import teamBg from "../assets/aboutus-bg.jpg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect } from "react";

export default function FullTeam() {

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
  const teamFull = [
    {
      image:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/T-8.jpg",
      name: "Bernad Arnault",
      position: "CEO | Founder",
      instagram: "",
      whatsapp: "",
      twitter: "",
    },
    {
      image:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/T-4.jpg",
      name: "Ellena Malkova",
      position: "Manager | Director",
      instagram: "",
      whatsapp: "",
      twitter: "",
    },
    {
      image:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/T-5.jpg",
      name: "Ryan Smith",
      position: "Architect | Designer",
      instagram: "",
      whatsapp: "",
      twitter: "",
    },
    {
      image:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/T-8.jpg",
      name: "Bernad Arnault",
      position: "CEO | Founder",
      instagram: "",
      whatsapp: "",
      twitter: "",
    },
    {
      image:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/T-4.jpg",
      name: "Ellena Malkova",
      position: "Manager | Director",
      instagram: "",
      whatsapp: "",
      twitter: "",
    },
    {
      image:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/T-5.jpg",
      name: "Ryan Smith",
      position: "Architect | Designer",
      instagram: "",
      whatsapp: "",
      twitter: "",
    },
  ];
  return (
    <div>
      <SEOHelmet
        title="Our Team - Archia Designs"
        description="Meet the talented team behind Archia Interiors. We are a group of passionate architects, designers, and craftsmen dedicated to creating exceptional spaces."
        keywords="Archia Designs Team, Our Team, Interior Designers, Architects, Skilled Professionals, Design Experts"
        ogImage="https://www.archiadesigns.com/assets/team-og-image.jpg"
        url="https://www.archiadesigns.com/our-team"
      />
      <div
        className="relative -top-28 left-0 overflow-hidden bg-cover -z-10 text-white h-[400px] flex items-center"
        style={{ backgroundImage: `url(${teamBg})` }}
      >
        {/* Background overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

        {/* Text moved inside the overlay */}
        <div className="relative z-10 lg:ps-20 ps-10">
          <h1 className="md:text-6xl text-4xl font-semibold ps-8 border-l-2 border-[#d2ac6e]">
            Our Team.
          </h1>
        </div>
      </div>
      <div className="mt-[-112px] bg-[#f1f1f1] md:py-28 py-10">
        <div className="md:space-y-7 space-y-5 max-w-[900px] px-5 mx-auto text-center">
          <h4 className="md:text-sm text-xs uppercase text-[#d2ac6e]  tracking-[5px]">
            MEET OUR TEAM
          </h4>
          <h1 className="md:text-6xl text-4xl  text-black  font-semibold ">
            We Have Professional
          </h1>
          <h3 className="text-[#616161] text-sm md:text-base md:leading-6 leading-6 tracking-wide">
            We have a team of skilled professionals dedicated to delivering
            exceptional results. With expertise and creativity, we bring your
            visions to life.
          </h3>
        </div>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:px-20 md:px-10 px-5 md:gap-10 gap-5 mt-10 items-center">
          {teamFull?.map(
            (
              { image, name, position, instagram, whatsapp, twitter },
              index
            ) => (
              <div
                key={index}
                className="p-5 border-[#d2ac6e] border text-center space-y-2"
              >
                <img
                  src={image}
                  alt={`${name} Image`}
                  loading="lazy"
                  className="md:h-[400px] h-[450px] w-full"
                />
                <h1 className="text-2xl font-semibold">{name}</h1>
                <h1 className=" text-[#d2ac6e]">{position}</h1>
                <div className="flex gap-5 items-center text-xl justify-center">
                  <a href={instagram} target="_blank">
                    <FaInstagram />
                  </a>
                  <a href={whatsapp} target="_blank">
                    <FaWhatsapp />
                  </a>
                  <a href={twitter} target="_blank">
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
