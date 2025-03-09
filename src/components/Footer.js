import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/Logo_PNG[1].png";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img src={image} alt="Logo" className="h-16 w-auto max-w-full" />
          </div>

          {/* Links */}
          <ul className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-2 md:space-y-0 md:space-x-8 text-gray-800 text-sm">
            <li>
              <Link to="/about-us" className="hover:text-blue-800">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-blue-800">
                Term of Use
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-blue-800">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:text-blue-800">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link to="/help-center" className="hover:text-blue-800">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-800">
          © {new Date().getFullYear()} Bluvade, All rights reserved. Powered by
          Bluvade.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
