import About from "../Components/About";
import Contact from "../Components/Contact";
import Landing from "../Components/Landing";
import Review from "../Components/Review";
import Team from "../Components/Team";
import Work from "../Components/Work";
import SEOHelmet from "../SEOHelmet/SEOHelmet";

export default function Home() {
  return (
    <div>
      {/* SEO Helmet for Mukthar Interiors Home Page */}
      <SEOHelmet
        title="Mukthar Interiors - Crafting Dream Spaces"
        description="Explore Mukthar Interiors for innovative architecture and interior designs that bring your dream spaces to life."
        keywords="Interior Design, Architecture, Dream Spaces, Mukthar Interiors"
        ogImage="https://www.muktharinteriors.com/assets/og-image.jpg"
        url="https://www.muktharinteriors.com"
      />

      {/* Page Components */}
      <Landing />
      <About />
      <Work />
      <Review />
      <Team />
      <Contact />
    </div>
  );
}
