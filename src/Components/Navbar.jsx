import { useState } from "react";
import logo from "../assets/logo.png";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLists = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about" },
    { label: "Pages", link: "/pages" },
    { label: "Project", link: "/project" },
    { label: "Blog", link: "/blog" },
    { label: "Contact Us", link: "/contact" },
  ];
  return (
    <div>
      <div className="flex w-full justify-between items-center p-5 lg:px-20 text-white bg-transparent">
        <div className="flex items-center  gap-x-3">
          {/* <img src={logo} alt="logo not found" className="w-48" /> */}
          <div className="">
            <h1 className="text-4xl text-[#d2ac6e] uppercase leading-6">Mukthar</h1>
            <h4 className="text-[#d2ac6e] text-xs text-center">ARCHITECTURE & INTERIOR</h4>
          </div>
        </div>

        {/* Toggle Button for Mobile */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#d2ac6e] focus:outline-none text-3xl"
          >
            {isOpen ? <IoClose /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex md:items-center xl:gap-12 gap-5">
          {navLists.map((item, ind) => (
            <Link key={ind} to={item.link} className="lg:text-lg text-base">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <h2 className="text-[#d2ac6e] lg:text-lg text-base">Call Us</h2>
          <a href="tel:+123-234-1234" className="text-lg font-bold">
            +123-234-1234
          </a>
        </div>

        {/* Off-Canvas Menu for Mobile */}
        <div
          className={`fixed top-0 left-0 w-3/4 h-full bg-white text-black transform ${
            isOpen ? "translate-x-0 z-10" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-x-3">
              <img src={logo} alt="logo not found" className="w-48" />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#d2ac6e] focus:outline-none cursor-pointer text-3xl "
            >
              <IoClose />
            </button>
          </div>
          <div className="flex flex-col p-5 gap-4">
            {navLists.map((item, ind) => (
              <Link key={ind} to={item.link}>
                {item.label}
              </Link>
            ))}
            <div className="mt-4">
              <h2 className="text-[#d2ac6e] text-lg">Call Us</h2>
              <a href="tel:+123-234-1234">+123-234-1234</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
