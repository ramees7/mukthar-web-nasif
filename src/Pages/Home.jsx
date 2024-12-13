import { useState, useEffect } from "react";
import bgImg1 from "../assets/home-bg-1.jpeg";
import bgImg2 from "../assets/home-bg-2.jpg";
import bgImg3 from "../assets/home-bg-3.jpeg";

const images = [bgImg1, bgImg2, bgImg3];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-no-repeat transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="flex items-center justify-center h-full text-white text-4xl font-bold">
        Home
      </div>
    </div>
  );
}
