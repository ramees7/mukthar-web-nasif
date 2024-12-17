import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";
import about3 from "../assets/about-3.jpg";
import about4 from "../assets/about-4.jpg";

export default function About() {
  const aboutList = [
    {
      count: 28,
      content: "Years Experience",
    },
    {
      count: 894,
      content: "Project Completed",
    },
    {
      count: 10,
      content: "Best Partners",
    },
  ];

  const companyList = [
    {
      title: "creasturent",
      image:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/C1.png",
    },
    {
      title: "deepay",
      image:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/C5.png",
    },
    {
      title: "Alexander durham",
      image:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/C2.png",
    },
    {
      title: "Sky cloud",
      image:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/C3.png",
    },
    {
      title: "Ruby",
      image:
        "https://kfkit.rometheme.pro/emporium/wp-content/uploads/sites/17/2022/02/C4.png",
    },
  ];

  return (
    <div className="bg-[#f1f1f1] relative -top-28">
      <div className="grid lg:grid-cols-2 grid-cols-1 md:py-28 pt-16  xl:ps-16 lg:ps-10 ps-10 md:pe-0 pe-10 gap-16">
        <div className="flex items-center">
          <div className="md:space-y-7 space-y-5">
            <h4 className="md:text-sm text-xs uppercase text-[#d2ac6e]  tracking-[5px] md:text-start text-center">
              ABOUT Mukthar
            </h4>
            <h1 className="md:text-6xl text-4xl  text-black  font-semibold md:text-start text-center">
              We&apos;re Experienced in This Field
            </h1>
            <h3 className="text-[#616161] text-sm md:text-base leading-8 tracking-wide">
              Mukthar Architecture & Interior specializes in crafting innovative
              and functional spaces that blend modern aesthetics with timeless
              designs. Our expert team is dedicated to transforming your dreams
              into reality, ensuring every detail reflects your unique style.
              Discover the perfect harmony of architecture and interiors with
              Mukthar.
            </h3>
            <div className="flex justify-evenly">
              {aboutList?.map(({ count, content }, index) => (
                <div key={index} className="text-center">
                  <h1 className="md:text-5xl text-3xl text-[#d2ac6e] font-bold mb-1">
                    {count}+
                  </h1>
                  <h3 className="text-[#616161]">{content}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-5 ">
          <div className="md:block hidden col-span-1"></div>
          <div className="md:col-span-2 col-span-3 flex items-end">
            <img src={about1} alt="about image" className="h-[170px] w-full" />
          </div>
          <div className="col-span-5  flex items-end">
            <img src={about2} alt="about image" className="h-[240px] w-full" />
          </div>
          <div className="col-span-4 row-span-1">
            <img src={about3} alt="about image" className="h-[240px] w-full" />
          </div>
          <div className="md:col-span-3 col-span-4 row-span-2">
            <img src={about4} alt="about image" className="h-[360px] w-full" />
          </div>
        </div>
      </div>
      <div className="h-28 -bottom-28 absolute bg-[#f1f1f1] w-full">
        <div className="flex md:justify-around justify-between h-full items-center gap-1 md:gap-5 overflow-hidden px-2 md:px-5">
          {companyList?.map(({ title, image }, index) => (
            <img
              src={image}
              key={index}
              alt={title}
              title={title}
              className="xl:h-16 lg:h-12 md:h-9 h-7 "
            />
          ))}
        </div>
      </div>
    </div>
  );
}
