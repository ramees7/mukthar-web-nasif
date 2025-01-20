// import React, { Suspense } from "react";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import "./App.css";
// import logo from "../src/assets/logo.png";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import AboutUs from "./Pages/AboutUs";
// import ContactUs from "./Pages/ContactUs";
// import Project from "./Pages/Project";
// import Services from "./Pages/Services";
// import FullTeam from "./Pages/FullTeam";
// import PageNotFound from "./Pages/PageNotFound";

// const Home = React.lazy(() => import("./Pages/Home"));

// function App() {
//   return (
//     <BrowserRouter>
//       <Suspense
//         fallback={
//           <div className="loading flex justify-center items-center h-screen">
//             <img src={logo} alt="logo imagee " className="w-[200px]" />
//           </div>
//         }
//       >
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/project" element={<Project />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/our-team" element={<FullTeam />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/page-not-found" element={<PageNotFound />} />

//           <Route path="*" element={<Navigate to="/page-not-found" replace />} />
//         </Routes>
//         <Footer />
//       </Suspense>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// import logo from "../src/assets/logo.png";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Project from "./Pages/Project";
import Services from "./Pages/Services";
import FullTeam from "./Pages/FullTeam";
import PageNotFound from "./Pages/PageNotFound";

const Home = React.lazy(() => import("./Pages/Home"));

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Simulate 5-second loading delay
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  if (isInitialLoading) {
    return (
      <div className="loading flex justify-center items-center h-screen">
        <div className="">
          <h1 className="md:text-7xl text-6xl text-[#d2ac6e] uppercase">
            ARCHIA
          </h1>
          <h4 className="text-[#d2ac6e] md:text-2xl text-base text-center">
            Designs
          </h4>
        </div>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="loading flex justify-center items-center h-screen">
            <div className="">
              <h1 className="md:text-7xl text-6xl text-[#d2ac6e] uppercase">
                ARCHIA
              </h1>
              <h4 className="text-[#d2ac6e] md:text-2xl text-base text-center">
                Designs
              </h4>
            </div>
          </div>
        }
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-team" element={<FullTeam />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/page-not-found" element={<PageNotFound />} />

          <Route path="*" element={<Navigate to="/page-not-found" replace />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
