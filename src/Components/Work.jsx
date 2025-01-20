import { Link } from "react-router-dom";

export default function Work() {
  const workCategories = [
    {
      title: "ARCHITECTURE",
      subHead: "Architecture ipsum dolor sit amet consectetur adipiscing.",
      bgImage:
        "https://www.pikespeak.edu/_images-universal/vertical-images/architecture-800x1200-3.jpg",
      iconImage:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/I7-2048x2048.png",
    },
    {
      title: "INTERIOR & EXTERIOR",
      subHead: "Interior & Exterior dolor sit amet consectetur adipiscing.",
      bgImage:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/P6.jpg",
      iconImage:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/I5-2048x2048.png",
    },
    {
      title: "3D MODELLING",
      subHead: "3D Modelling ipsum dolor sit amet consectetur adipiscing.",
      bgImage:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/P5.jpg",
      iconImage:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/I6-2048x2048.png",
    },
    {
      title: "RESIDENTIAL",
      subHead: "Residential ipsum dolor sit amet consectetur adipiscing.",
      bgImage:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/P1.jpg",
      iconImage:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/I8.png",
    },
  ];

  const workStructure = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We provide expert consultation to understand your needs and deliver tailored design solutions that align with your vision and lifestyle.",
    },
    {
      step: "02",
      title: "Get Offers",
      description:
        "Receive customized design proposals and offers that suit your requirements and budget.",
    },
    {
      step: "03",
      title: "Pay and Monitor",
      description:
        "Make secure payments and track project progress seamlessly with regular updates.",
    },
    {
      step: "04",
      title: "Project completed",
      description:
        "Your dream space is delivered with precision, quality, and complete satisfaction.",
    },
  ];
  return (
    <div className="bg-[#f1f1f1] ">
      <div className="md:pt-20 pt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {workCategories?.map(
          ({ title, subHead, bgImage, iconImage }, index) => (
            <div
              className="h-screen bg-cover lg:relative group sticky top-0"
              key={index}
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              {/* Background overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 pointer-events-none"></div>

              {/* Icon Section */}
              <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0">
                <img src={iconImage} alt="" className="w-[40%]" />
              </div>

              {/* Content Section */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end h-full p-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                <h1 className="text-3xl">{title}</h1>
                <h3 className="mt-2">{subHead}</h3>
                <Link
                  to={"/project"}
                  className="uppercase md:p-5 w-fit p-3 border hover:text-[#d2ac6e] border-[#d2ac6e] font-semibold md:mt-10 mt-5 tracking-widest"
                >
                  VIEW PROJECT
                </Link>
              </div>
            </div>
          )
        )}
      </div>
      <div className="md:py-28 py-10 md:space-y-7 space-y-5">
        <div className="md:space-y-7 space-y-5 max-w-[900px] px-5 mx-auto text-center">
          <h4 className="md:text-sm text-xs uppercase text-[#d2ac6e]  tracking-[5px]">
            HOW WE WORK
          </h4>
          <h1 className="md:text-6xl text-4xl  text-black  font-semibold ">
            How Does Archia Work
          </h1>
          <h3 className="text-[#616161] text-sm md:text-base md:leading-6 leading-6 tracking-wide">
            We blend innovative design with functionality to create spaces that
            inspire. Our collaborative approach ensures each project reflects
            our clients vision, crafted with precision and creativity.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:px-20 md:px-10 px-5 md:gap-10 gap-5">
          {workStructure?.map(({ step, title, description }, index) => (
            <div
              className="border-[#d2ac6e] border w-full lg:min-h-[250px] min-h-[200px] flex flex-col items-center space-y-4 p-10 "
              key={index}
            >
              <h1 className="md:text-6xl text-5xl text-[#d2ac6e]">{step}</h1>
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
