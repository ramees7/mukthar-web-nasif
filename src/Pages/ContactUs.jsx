import Contact from "../Components/Contact";
import SEOHelmet from "../SEOHelmet/SEOHelmet";
import contactUsBg from "../assets/aboutus-bg.jpg";

export default function ContactUs() {
  return (
    <div>
      <SEOHelmet
        title="Contact Us - Mukthar Interiors"
        description="Get in touch with Mukthar Interiors for expert advice on interior design and architecture. Let’s create inspiring spaces together!"
        keywords="Mukthar Interiors, Contact Us, Interior Design Support, Architecture Consultation, Dream Spaces, Customer Support"
        ogImage="https://www.muktharinteriors.com/assets/contact-us-og-image.jpg"
        url="https://www.muktharinteriors.com/contact-us"
      />
      <div
        className="relative  -top-28 left-0 overflow-hidden bg-cover -z-10 text-white h-[400px] flex items-center"
        style={{ backgroundImage: `url(${contactUsBg})` }}
      >
        {/* Background overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

        {/* Text moved inside the overlay */}
        <div className="relative z-10 lg:ps-20 ps-10">
          <h1 className="md:text-6xl text-4xl font-semibold ps-8 border-l-2 border-[#d2ac6e]">
            Contact Us.
          </h1>
        </div>
      </div>
      <Contact contactPage={true} />
      <div className="mt-[-112px]"></div>
    </div>
  );
}
