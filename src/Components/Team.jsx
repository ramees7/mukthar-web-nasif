import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Team() {
  const teams = [
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
    <div className="bg-[#f1f1f1] ">
      <div className="md:pb-28 pb-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 px-10 lg:px-20 items-center">
        <div className="space-y-5 md:space-y-7">
          <h4 className="md:text-sm text-xs uppercase text-[#d2ac6e]  tracking-[5px]">
            MEET OUR TEAM
          </h4>
          <h1 className="md:text-5xl text-4xl  text-black  font-semibold ">
            We Have Professional
          </h1>
          <h3 className="text-[#616161] text-sm md:text-base md:leading-6 leading-6 tracking-wide ">
            We have a team of skilled professionals dedicated to delivering
            exceptional results. With expertise and creativity, we bring your
            visions to life.
          </h3>
          <div className="uppercase md:p-5 p-3 w-fit border border-[#d2ac6e] bg-[#d2ac6e] text-[#f1f1f1] hover:bg-[#f1f1f1] hover:text-[#d2ac6e] font-semibold tracking-widest">
            <Link to={"/teams"}>discover work</Link>
          </div>
        </div>
        {teams?.map(
          ({ image, name, position, instagram, whatsapp, twitter }, index) => (
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
  );
}
