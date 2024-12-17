import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "../src/assets/logo.png";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Home = React.lazy(() => import("./Pages/Home"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="loading flex justify-center items-center h-screen">
            <img src={logo} alt="logo imagee " className="w-[200px]" />
          </div>
        }
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
