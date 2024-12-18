import SEOHelmet from "../SEOHelmet/SEOHelmet";
import pageNotFoundBg from "../assets/404-page.jpg";

export default function PageNotFound() {
  return (
    <div className="">
      <SEOHelmet
        title="Page Not Found - Mukthar Interiors"
        description="The page you are looking for does not exist."
        keywords="Mukthar Interiors, Page Not Found, 404"
        ogImage="https://www.muktharinteriors.com/assets/404-og-image.jpg"
        url="https://www.muktharinteriors.com/page-not-found"
      />
      <div
        className="relative -top-28 left-0 overflow-hidden bg-cover -z-10 text-white h-[100vh] flex items-center"
        style={{ backgroundImage: `url(${pageNotFoundBg})` }}
      >
        {/* Background overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

        {/* Text moved inside the overlay */}
        <div className="relative z-10 lg:ps-20 ps-10 ">
          <div className="ps-8 border-l-2 border-[#d2ac6e] md:space-y-4 space-y-2">
            <h1 className="md:text-6xl text-4xl font-semibold ">
              Page Not Found
            </h1>
            <h2 className="md:text-lg text-[#d2ac6e]">
              We Could&apos;t Find The Page You Are Looking For
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-[-112px]"></div>
    </div>
  );
}
