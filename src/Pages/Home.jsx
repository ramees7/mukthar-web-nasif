// import { useState, useEffect } from "react";
// import bgImg1 from "../assets/home-bg-1.jpeg";
// import bgImg2 from "../assets/home-bg-2.jpg";
// import bgImg3 from "../assets/home-bg-3.jpeg";

// const images = [bgImg1, bgImg2, bgImg3];

// export default function Home() {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 5000); // Change image every 5 seconds
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div
//       className="h-screen w-screen bg-cover bg-center bg-no-repeat absolute top-0 left-0 -z-10 animate-zoom text-white"
//       style={{ backgroundImage: `url(${images[currentImage]})` }}
//     >
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

//       <div className="grid lg:grid-cols-7 h-full">
//         <div className="col-span-3 lg:block hidden"></div>
//         <div className="col-span-4 h-full flex items-center">
//           <div>
//             <h4 className="text-sm  uppercase text-[#d2ac6e] tracking-[5px] md:text-start text-center">
//               ARCHITECTURE & INTERIOR
//             </h4>
//             <h1 className="md:text-start text-center lg:text-[80px] md:text-[60px] text-[50px] lg:leading-[80px] leading-[50px] font-semibold">
//               We Design Dream Buildings
//             </h1>
//             <div>
//               <button className="uppercase p-5 border border-[#d2ac6e] font-semibold mt-10">
//                 discover work
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat absolute top-0 left-0 -z-10 animate-zoom text-white"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      {/* Background overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>

      {/* Content */}
      <div className="grid lg:grid-cols-7 h-full">
        <div className="col-span-3 lg:block hidden"></div>
        <div className="col-span-4 h-full flex items-center lg:px-0 md:px-10 px-5">
          <div className="relative z-10">
            <h4 className="text-sm uppercase text-[#d2ac6e]  -[5px] md:text-start text-center">
              ARCHITECTURE & INTERIOR
            </h4>
            <h1 className="md:text-start text-center lg:text-[80px] md:text-[60px] text-[50px] lg:leading-[80px] leading-[50px] font-semibold">
              We Design Dream Buildings
            </h1>
            <div className="md:block flex justify-center">
              <button className="uppercase md:p-5 p-3 border border-[#d2ac6e] font-semibold mt-10 tracking-widest">
                discover work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
