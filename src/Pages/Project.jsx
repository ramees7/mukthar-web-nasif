import { useEffect, useState } from "react";
import projectBg from "../assets/aboutus-bg.jpg";
import SEOHelmet from "../SEOHelmet/SEOHelmet";
import { useLocation } from "react-router-dom";

export default function Project() {
  const [activeTab, setActiveTab] = useState("all");

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
  const tabs = [
    { id: "all", title: "All", content: "All content goes here" },
    { id: "interior", title: "Interior", content: "Interior design content" },
    {
      id: "residential",
      title: "Residential",
      content: "Residential design content",
    },
    {
      id: "3d-modelling",
      title: "3D Modelling",
      content: "3D Modelling content",
    },
  ];

  const contentData = [
    {
      id: "interior",
      items: [
        {
          image:
            "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/P35.jpg",
          description: "Interior design 1",
        },
        {
          image:
            "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/P36.jpg",
          description: "Interior design 2",
        },
      ],
    },
    {
      id: "residential",
      items: [
        {
          image:
            "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/P34.jpg",
          description: "Modern house",
        },
        {
          image:
            "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/P33.jpg",
          description: "Villa",
        },
      ],
    },
    {
      id: "3d-modelling",
      items: [
        {
          image:
            "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/P32.jpg",
          description: "3D House",
        },
        {
          image:
            "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/P30.jpg",
          description: "3D Office",
        },
      ],
    },
  ];

  const getItemsToDisplay = () => {
    if (activeTab === "all") {
      // Combine all items into one array when "All" is selected
      return contentData.flatMap((category) => category.items);
    } else {
      // Return items for the selected tab
      return (
        contentData.find((category) => category.id === activeTab)?.items || []
      );
    }
  };

  return (
    <div>
      <SEOHelmet
        title="Projects - Archia Designs"
        description="Browse through the exceptional projects completed by Archia Interiors. From residential to commercial spaces, our projects showcase our commitment to quality and innovation."
        keywords="Archia Designs Projects, Interior Design Projects, Architecture, Residential Projects, Commercial Design, Project Gallery"
        ogImage="https://www.archiadesigns.com/assets/projects-og-image.jpg"
        url="https://www.archiadesigns.com/project"
      />
      <div
        className="relative -top-28 left-0 overflow-hidden bg-cover -z-10 text-white h-[400px] flex items-center"
        style={{ backgroundImage: `url(${projectBg})` }}
      >
        {/* Background overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

        {/* Text moved inside the overlay */}
        <div className="relative z-10 lg:ps-20 ps-10">
          <h1 className="md:text-6xl text-4xl font-semibold ps-8 border-l-2 border-[#d2ac6e]">
            Project.
          </h1>
        </div>
      </div>
      <div className="mt-[-112px] bg-[#f1f1f1] md:py-28 py-10">
        <div className="md:space-y-7 space-y-5 max-w-[900px] px-5 mx-auto text-center">
          <h4 className="md:text-sm text-xs uppercase text-[#d2ac6e]  tracking-[5px]">
            LATEST PROJECT
          </h4>
          <h1 className="md:text-6xl text-4xl  text-black  font-semibold ">
            Archia Architecture Project
          </h1>
          <h3 className="text-[#616161] text-sm md:text-base md:leading-6 leading-6 tracking-wide">
            We combines modern design with sustainability, focusing on
            energy-efficient solutions and eco-friendly materials to create
            functional and aesthetically pleasing spaces.
          </h3>
        </div>
        {/* Tabs */}
        <div className=" mt-10 xl:px-20 md:px-10 px-5 md:gap-10">
          {/* Tabs */}
          <div className="flex space-x-4 justify-center ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-1 px-4 md:text-base text-sm font-semibold tracking-widest  transition-colors duration-300 
              ${
                activeTab === tab.id
                  ? "text-[#d2ac6e] border-b-4 border-[#d2ac6e]"
                  : "text-black border-[#f1f1f1] "
              } hover:text-[#d2ac6e] border-b-4 hover:border-[#d2ac6e]  `}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Grid Content */}
          <div
            className={`grid lg:grid-cols-3 md:grid-cols-2   gap-5  mt-10 items-center`}
          >
            {getItemsToDisplay().map(({ image, description }, index) => (
              <div key={index} className="lg:relative group sticky top-0">
                <img
                  src={image}
                  alt={description}
                  className="w-full h-[450px] object-cover "
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black group-hover:opacity-50 opacity-30 z-0"></div>

                <div className="absolute top-10 left-0 opacity-0 group-hover:opacity-100 group-hover:left-10 transition-all duration-500 ease-in-out">
                  <h1 className="text-2xl font-semibold tracking-widest text-white">
                    {description}
                  </h1>
                  <h1 className="text-lg text-[#d2ac6e]">{description}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
