import { useEffect } from "react";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Landing from "../Components/Landing";
import Review from "../Components/Review";
import Team from "../Components/Team";
import Work from "../Components/Work";
import SEOHelmet from "../SEOHelmet/SEOHelmet";
import { useLocation } from "react-router-dom";

export default function Home() {
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
  return (
    <div>
      {/* SEO Helmet for Archia Interiors Home Page */}
      <SEOHelmet
        title="Archia Interiors - Crafting Dream Spaces"
        description="Explore Archia Interiors for innovative architecture and interior designs that bring your dream spaces to life."
        keywords="Interior Design, Architecture, Dream Spaces, Archia Interiors"
        ogImage="https://www.Archiainteriors.com/assets/og-image.jpg"
        url="https://www.Archiainteriors.com"
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
