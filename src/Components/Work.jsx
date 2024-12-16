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
  return (
    <div className="bg-[#f1f1f1] md:pt-20 pt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
      {workCategories?.map(({ title, subHead, bgImage, iconImage }, index) => (
        <div
          className="h-screen bg-cover relative group" key={index}
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
      ))}
    </div>
  );
}
