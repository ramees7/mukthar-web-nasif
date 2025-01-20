import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  const navLists = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about" },
    { label: "Services", link: "/services" },
    { label: "Project", link: "/project" },
    { label: "Our Team", link: "/our-team" },
    { label: "Contact Us", link: "/contact" },
  ];
  const socialMediaLists = [
    {
      icon: <FaFacebook />,
      link: "",
    },
    {
      icon: <FaInstagram />,
      link: "",
    },
    {
      icon: <FaXTwitter />,
      link: "",
    },
    {
      icon: <FaYoutube />,
      link: "",
    },
  ];
  return (
    <div className="bg-[#e7e7e7] md:pt-28 pt-10 px-10 ">
      {/* <img src="" alt="" /> */}
      <div className="text-center max-w-[850px] mx-auto ">
        <h1 className="text-4xl text-[#d2ac6e] uppercase leading-6">Archia</h1>
        <h4 className="text-[#d2ac6e] text-xs ">Designs</h4>
        <h4 className="mt-5 text-[#616161] text-sm md:text-base md:leading-6 leading-6 tracking-wide ">
          We are a leading design and development company dedicated to
          transforming visions into reality. With a focus on innovation,
          precision, and creativity, we deliver exceptional solutions tailored
          to meet our clients unique needs and aspirations
        </h4>
        <div className="flex md:gap-8 gap-5 justify-center text-[#d2ac6e] mt-10 md:text-lg text-base">
          {navLists?.map(({ label, link }, index) => (
            <Link key={index} to={link}>
              {label}
            </Link>
          ))}
        </div>
        <div className="flex gap-5 md:gap-8 justify-center text-[#d2ac6e] mt-10 md:text-3xl text-xl pb-5">
          {socialMediaLists?.map(({ icon, link }, index) => (
            <a href={link} key={index}>
              {icon}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-[#d2ac6e38] py-5 text-[#61616181] text-center md:text-base text-sm relative">
        <div className="absolute right-3 text-sm text-[#abaeb1]  md:block hidden">
          <h4>Designed By Ramees</h4>
          <a href="tel:+919207424420">9207424420</a>
        </div>
        <h2>Copyright 2024 © All Right Reserved By Archia Designs</h2>
        <div className="text-xs  text-[#abaeb1]  md:hidden   flex gap-3 justify-center w-full pt-1">
          <h4>Designed By Ramees</h4>
          <a href="tel:+919207424420">9207424420</a>
        </div>
      </div>
    </div>
  );
}
