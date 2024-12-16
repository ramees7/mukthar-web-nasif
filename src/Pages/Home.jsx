import { useState, useEffect } from "react";
import bgImg1 from "../assets/home-bg-1.jpeg";
import bgImg2 from "../assets/home-bg-2.jpg";
import bgImg3 from "../assets/home-bg-3.jpeg";
import { FaFacebook, FaInstagram, FaPlay, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const images = [bgImg1, bgImg2, bgImg3];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  const socialMediaLists = [
    {
      title: "Facebook",
      icon: <FaFacebook />,
      link: "",
    },
    {
      title: "Instgram",
      icon: <FaInstagram />,
      link: "",
    },
    {
      title: "Twitter",
      icon: <FaXTwitter />,
      link: "",
    },
    {
      title: "Youtube",
      icon: <FaYoutube />,
      link: "",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Calculate indices of images to display
  const getVisibleImages = () => {
    return [
      images[currentIndex % images.length],
      images[(currentIndex + 1) % images.length],
      images[(currentIndex + 2) % images.length],
    ];
  };

  return (
    // <div
    //   className="lg:h-[1000px] h-[700px] w-screen bg-cover bg-center bg-no-repeat absolute top-0 left-0 -z-10  text-white"
    //   style={{ backgroundImage: url(${images[currentImage]}) }}
    // >

    //   {/* Background overlay */}
    //   <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10 " ></div>
    <div className="lg:h-[1000px] h-[700px] w-screen  absolute top-0 left-0 overflow-hidden -z-10 text-white">
      {/* Background Image with Zoom Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom lg:h-[1000px] h-[700px] w-screen"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>

      {/* Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="grid lg:grid-cols-7 xl:h-[70%] md:h-[60%] h-[70%] mt-5 md:mt-0 ">
        <div className="col-span-3 lg:block hidden"></div>
        <div className="col-span-4 h-full flex items-center lg:px-0 md:px-10 px-5">
          <div className="relative z-10">
            <h4 className="md:text-sm text-xs uppercase text-[#d2ac6e]  tracking-[5px] md:text-start text-center">
              ARCHITECTURE & INTERIOR
            </h4>
            <h1 className="md:text-start text-center lg:text-[80px] md:text-[60px] text-[40px] lg:leading-[80px] leading-[50px] font-semibold">
              We Design Dream Buildings
            </h1>
            <div className="md:block flex justify-center hover:text-[#d2ac6e]">
              <button className="uppercase md:p-5 p-3 border border-[#d2ac6e] font-semibold md:mt-10 mt-5 tracking-widest">
                discover work
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative xl:h-[30%] md:h-[40%] h-[30%] bg-transparent grid grid-cols-8 px-16 xl:py-10 py-5 gap-10">
        {/* Background overlay with opacity */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative md:col-span-3 col-span-full md:pe-10 flex items-center">
          <div className="space-y-6">
            <div className="flex gap-8 lg:text-2xl text-lg text-[#d2ac6e] md:justify-normal justify-center">
              {socialMediaLists?.map(({ title, icon, link }) => (
                <a href={link} key={title}>
                  {icon}
                </a>
              ))}
            </div>
            <h1 className="lg:text-lg  text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </h1>
            <div className="md:flex items-center gap-5 hidden">
              <div className="text-xl p-4 border-2 w-fit rounded-full flex items-center justify-center">
                <FaPlay />
              </div>
              <h1 className="uppercase lg:text-xl text-lg font-semibold">
                PLAY VIDEO
              </h1>
            </div>
          </div>
        </div>
        <div className="relative col-span-5 overflow-hidden md:flex items-center hidden ">
          <div className="flex gap-5 transition-transform duration-700 ease-in-out xl:h-[80%] lg:h-[60%] h-[80%]">
            {getVisibleImages().map((img, index) => (
              <div
                key={index}
                className="xl:w-1/3 lg:w-1/2 w-full flex-shrink-0"
              >
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
