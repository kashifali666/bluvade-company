import React from "react";
import backgroundImg from "../assets/aboutus.jpg";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">
      {/* Full-Width Background Image Section */}
      <div className="relative h-[60vh]">
        <img
          src={backgroundImg}
          alt="Background Illustration"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Who We Are */}
      <section className="bg-white shadow-md rounded-lg border border-gray-200 p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Who we Are</h2>
        <p className="text-lg text-blue-900 leading-relaxed">
          BluVade was founded with a mission to enhance projects and services in
          Pakistan, driven by a team committed to upholding the highest moral
          and corporate standards. Our expertise spans Information Technology,
          Corporate IT Supplies, Import/Export, Medical Equipment, and General
          Order Supplies. We are the result of a merger of seasoned
          professionals dedicated to delivering superior quality and ensuring
          100% on-time, cost effective deliveries that guarantee customer
          satisfaction.
        </p>
        <blockquote className="flex items-center justify-end mt-10">
          <span className="text-3xl text-blue-400 font-bold mr-2">“</span>
          <p className="text-2xl font-semibold text-blue-900 italic">
            Where Vision Meets Excellence
          </p>
        </blockquote>
      </section>

      {/* Vision and Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-6 border-t-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-950 mb-2">Our Vision</h3>
          <p className="text-gray-600">
            Our vision is to be the most trusted and innovative leader in our
            industry, continuously setting benchmarks for excellence and
            integrity. We aspire to drive positive change and create lasting
            value for our clients and communities through cutting-edge
            solutions, unmatched quality, and unwavering commitment to customer
            satisfaction.
          </p>
        </div>
        <div className="bg-white shadow-md p-6 border-t-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-950 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            Our mission is to advance projects and services by adhering to the
            highest ethical and professional standards. We aim to be at the
            forefront of our industry sectors through a dedication to superior
            quality, reliability, and efficient, cost effective solutions,
            ensuring exceptional customer satisfaction
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
