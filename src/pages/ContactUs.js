import React from "react";
import backgroundImg from "../assets/contact.jpg";
import ContactForm from "../components/ContactForm";
import CompanyInfo from "../components/CompanyInfo";

function ContactUs() {
  return (
    <div className="relative w-full">
      {/* Full-Width Background Image Section */}
      <div className="relative h-[60vh]">
        <img
          src={backgroundImg}
          alt="Background Illustration"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h2 className="text-5xl font-extrabold mb-4">Contact Us</h2>
          <p className="text-2xl font-bold mb-8 text-center">
            Feel free to keep in touch
          </p>
        </div>
      </div>

      {/* Contact Form and Company Info Section */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-12 mt-12">
        {/* Contact Form */}
        <div className="lg:w-8/12 w-full ml-2">
          <ContactForm />
        </div>

        {/* Company Info */}
        <div className=" lg:w-4/12 w-full mr-2">
          <CompanyInfo />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
