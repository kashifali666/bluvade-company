import React, { useState } from "react";
import image from "../assets/Logo_PNG[1].png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-black px-6 py-4 shadow-md relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="w-[150px] ml-8 flex-shrink-0">
          <img src={image} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Main Navigation Links */}
        <div
          className={`absolute top-[64px] left-0 w-full bg-white z-50 p-4 shadow-md md:static md:flex md:items-center md:justify-between md:w-auto md:p-0 
          ${isMenuOpen ? "block" : "hidden"}`}
        >
          {/* Close Button (Mobile) */}
          {isMenuOpen && (
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-xl text-black md:hidden"
            ></button>
          )}

          {/* Desktop Navigation & Social Icons */}
          <div className="md:flex flex-grow justify-between items-center gap-12">
            {/* Navigation Links */}
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-center">
              <li>
                <Link to="/" className="hover:underline font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:underline font-semibold">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline font-semibold">
                  Product & Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:underline font-semibold">
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="hover:underline font-semibold"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="hidden md:flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-blue-500 cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-blue-500 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
