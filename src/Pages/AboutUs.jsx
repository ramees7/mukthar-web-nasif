import About from "../Components/About";
import Review from "../Components/Review";
import Work from "../Components/Work";
import SEOHelmet from "../SEOHelmet/SEOHelmet";
import aboutUsBg from "../assets/aboutus-bg.jpg";

export default function AboutUs() {
  return (
    <div>
      <SEOHelmet
        title="About Us - Mukthar Interiors"
        description="Discover the story behind Mukthar Interiors. We are passionate about creating beautiful and functional interiors, driven by quality craftsmanship and innovative design solutions."
        keywords="Mukthar Interiors, About Us, Interior Design Story, Architecture, Innovative Design, Quality Craftsmanship, Dream Spaces"
        ogImage="https://www.muktharinteriors.com/assets/about-us-og-image.jpg"
        url="https://www.muktharinteriors.com/about"
      />
      <div
        className="relative -top-28 left-0 overflow-hidden bg-cover -z-10 text-white h-[400px] flex items-center"
        style={{ backgroundImage: `url(${aboutUsBg})` }}
      >
        {/* Background overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

        {/* Text moved inside the overlay */}
        <div className="relative z-10 lg:ps-20 ps-10">
          <h1 className="md:text-6xl text-4xl font-semibold ps-8 border-l-2 border-[#d2ac6e]">
            About Us.
          </h1>
        </div>
      </div>
      <About />
      <Work />
      <Review />
    </div>
  );
}
