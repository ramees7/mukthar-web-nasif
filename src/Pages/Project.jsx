import projectBg from "../assets/aboutus-bg.jpg";
import SEOHelmet from "../SEOHelmet/SEOHelmet";

export default function Project() {
  return (
    <div>
      <SEOHelmet
        title="Projects - Mukthar Interiors"
        description="Browse through the exceptional projects completed by Mukthar Interiors. From residential to commercial spaces, our projects showcase our commitment to quality and innovation."
        keywords="Mukthar Interiors Projects, Interior Design Projects, Architecture, Residential Projects, Commercial Design, Project Gallery"
        ogImage="https://www.muktharinteriors.com/assets/projects-og-image.jpg"
        url="https://www.muktharinteriors.com/project"
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
      <div className="mt-[-112px]"></div>
    </div>
  );
}
