import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/image.jpg";
import heroimg1 from "../assets/heroimg1.jpg";
import planImg from "../assets/plan.jpg";
import overviewImg from "../assets/sideImg2.jpg";
import bgimage from "../assets/bgimage.jpg";
import strategyImg from "../assets/sideImg1.jpg";
import jointImg from "../assets/joint.jpg";
import laptopImg from "../assets/laptop.jpg";
import govtImg from "../assets/govt.jpg";
import ngoImg from "../assets/ngo.jpg";
import networkImg from "../assets/network.jpg";
import shopImg from "../assets/shop.jpg";
import bankImg from "../assets/banks.jpg";
import techtImg from "../assets/tech.jpg";
import sonyImg from "../assets/sony.jpg";
import microsoftImg from "../assets/microsoft.jpg";
import appleImg from "../assets/apple.jpg";
import hpImg from "../assets/hp.jpg";
import asusImg from "../assets/asus.jpg";
import dellImg from "../assets/dell.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Main container */}
      <div className="container">
        <div className="relative w-full h-[400px]">
          {/* Image */}
          <img
            src={planImg}
            alt="Example"
            className="w-full h-full object-cover "
          />

          {/* Button */}
          <button>
            <Link
              to="/services"
              className="absolute bottom-8 left-8 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
            >
              Explore Our Services
            </Link>
          </button>
        </div>
        {/* Section Title */}
        <h1 className="text-5xl text-blue-950 font-bold text-center mt-4">
          Services
        </h1>
        <p className="text-center text-lg text-gray-700 mt-2">
          With a wide array of enterprise services, our goal is to empower
          businesses with cutting-edge technology, foster continuous <br />
          learning, provide strategic consulting, and offer efficient
          outsourcing solutions.
        </p>
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 ">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-sm p-6 h-100 w-75 mx-auto">
            <img
              src={heroimg1}
              alt="Managed Services"
              className="w-full h-56 object-cover rounded-sm"
            />
            <h2 className="text-xl text-blue-950 text-center font-bold mt-4 mb-2">
              Specialized IT & ICT Equipment Supplies
            </h2>
            <p className="text-gray-600 text-center">
              In today's globalized economy, outsourcing services have become a
              cornerstone of strategic business operations, offering
              organizations the opportunity to optimize resources, reduce costs,
              and focus on core competencies.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-sm p-6 h-100 w-75 mx-auto">
            <img
              src={image}
              alt="Professional Consulting"
              className="w-full h-56 object-cover rounded-sm"
            />
            <h2 className="text-xl text-blue-950 text-center font-bold mt-4 mb-2">
              Specialized Electric & Electronic Equipment Supplies
            </h2>
            <p className="text-gray-600 text-center">
              Consulting services play a pivotal role in today's dynamic
              business landscape, offering invaluable expertise, insights, and
              guidance to organizations across industries.
            </p>
          </div>
        </div>

        <div className="mt-16">
          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center bg-gray-100 p-8">
            <div>
              <h2 className="text-4xl font-bold text-blue-800">40+</h2>
              <p className="text-gray-600">Projects</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-800">25+</h2>
              <p className="text-gray-600">Clients</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-800">33</h2>
              <p className="text-gray-600">Employees</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-800">4+</h2>
              <p className="text-gray-600">Years</p>
            </div>
          </div>

          {/* Overview Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mt-8 px-8">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-blue-700 mb-4">
                Overview:
              </h2>
              <p className="text-gray-700 mb-4">
                BluVade was founded with a mission to enhance projects and
                services in Pakistan, driven by a team committed to upholding
                the highest moral and corporate standards. Our expertise spans
                Information Technology, Corporate IT Supplies, Import/Export,
                Medical Equipment, and General Order Supplies. We are the result
                of a merger of seasoned professionals dedicated to delivering
                superior quality and ensuring 100% on-time, cost effective
                deliveries that guarantee customer satisfaction.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={overviewImg}
                alt="Overview Illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>
        {/* Professional Section */}
        <div className="relative w-full">
          {/* Full-Width Background Image Section */}
          <div className="relative h-[60vh]">
            <img
              src={bgimage}
              alt="Background Illustration"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h3 className="text-lg font-bold mb-4">What we do</h3>
              <h2 className="text-4xl font-bold mb-4">Professional</h2>
              <p className="text-lg mb-8 text-center">
                Here we desire with Specialized IT & ICT Equipment Supplies,
                Specialized Electric & Electronic Equipment Supplies, Bio
                Medical & Other Allied Equipment, Power & Energy Solution,
                General Order Supplies
              </p>
            </div>
          </div>
        </div>

        {/* Our Client Section */}
        <div className="py-16 px-4 mt-4">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-blue-900 text-center mb-12">
              Our Clients
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              BluVade serves a diverse clientele encompasing government
              agencies, banks, retail businesses, NGOs, universities,
              telecommunication companies, and more. Our broad spectrum of
              clients reflects our capability to meet the varied needs of
              different sectors, delivering tailored solutions that uphold our
              standards of excellence and reliability. Through these
              partnerships, we continuously strive to innovate and provide
              impactful services across various industries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Image 1 */}
              <div className="text-center">
                <div className="bg-white shadow-lg rounded-sm overflow-hidden">
                  <img
                    src={govtImg}
                    alt="Government"
                    className="w-full h-48 object-contain"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-700">
                  Government
                </h3>
              </div>

              {/* Image 2 */}
              <div className="text-center">
                <div className="bg-white shadow-lg rounded-sm overflow-hidden">
                  <img
                    src={bankImg}
                    alt="Government"
                    className="w-full h-48 object-contain"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-700">
                  Banks
                </h3>
              </div>
              {/* Image 3 */}
              <div className="text-center">
                <div className="bg-white shadow-lg rounded-sm overflow-hidden">
                  <img
                    src={networkImg}
                    alt="Government"
                    className="w-full h-48 object-contain"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-700">
                  Teleco's
                </h3>
              </div>
              {/* Image 4 */}
              <div className="text-center">
                <div className="bg-white shadow-lg rounded-sm overflow-hidden">
                  <img
                    src={shopImg}
                    alt="Government"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-700">
                  Retail
                </h3>
              </div>
              {/* Image 5 */}
              <div className="text-center">
                <div className="bg-white shadow-lg rounded-sm overflow-hidden">
                  <img
                    src={ngoImg}
                    alt="Government"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-700">
                  Non Profit Organizations
                </h3>
              </div>
              {/* Image 6 */}
              <div className="text-center">
                <div className="bg-white shadow-lg rounded-sm overflow-hidden">
                  <img
                    src={techtImg}
                    alt="Government"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-700">
                  Technology
                </h3>
              </div>
            </div>
          </div>

          {/* Adding People Strategy Section */}
          <div className=" py-16 px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Illustration */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={strategyImg}
                  alt="People Strategy Illustration"
                  className="w-3/4"
                />
              </div>
              {/* Content */}
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-blue-500 font-semibold text-lg text-start">
                  Solutions
                </h3>
                <h2 className="text-5xl font-bold text-blue-900 my-4 text-start">
                  Adding People Strategy in Every Company
                </h2>
                <p className="text-gray-600 mb-6 text-start">
                  Incorporating a robust people strategy is essential for any
                  company's sustainable growth. At Bluvade, we specialize in
                  tailoring comprehensive people strategies that align with your
                  business objectives, driving long-term success and
                  organizational excellence.
                </p>
                <div class="flex justify-start"></div>
              </div>
            </div>
          </div>
          {/* "Our Partners" Section */}
          <div className=" py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-5xl font-bold text-blue-900 text-center mb-12">
                Our Partners
              </h2>
              <div className="flex flex-col md:flex-row gap-8">
                {/* Card 1 */}
                <div className="bg-white shadow-lg rounded-sm flex flex-col md:flex-row p-4 gap-4">
                  {/* Image Section */}
                  <div className="flex-shrink-0 w-full md:w-1/2">
                    <img
                      src={jointImg}
                      alt="Asgardia Inc."
                      className="w-full h-54 md:h-full object-cover rounded-sm"
                    />
                  </div>
                  {/* Text Section */}
                  <div className="flex flex-col justify-center items-center text-center p-4 md:w-1/2">
                    <h3 className="text-lg font-bold text-blue-900 mb-2 truncate">
                      Partners
                    </h3>

                    <p className="text-gray-700 text-sm mb-4 break-words">
                      BluVade has forged strategic partnerships with various
                      leading OEMs, enabling us to offer a diverse range of
                      high-quality products and solutions. These collaborations
                      enhance our ability to provide cutting-edge technology and
                      services, ensuring our clients receive the best in
                      innovation and reliability. Through these alliances, we
                      continue to strengthen our market presence and deliver
                      exceptional value to our customers.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-sm flex flex-col md:flex-row p-4 gap-4">
                  {/* Image Section */}
                  <div className="flex-shrink-0 w-full md:w-1/2">
                    <img
                      src={laptopImg}
                      alt="Earth 2.0 Org"
                      className="w-full h-54 md:h-full object-cover rounded-sm"
                    />
                  </div>
                  {/* Text Section */}
                  <div className="flex flex-col justify-center items-center text-center p-4 md:w-1/2">
                    <h3 className="text-lg font-bold text-blue-900 mb-2 truncate">
                      Distribution Channel
                    </h3>

                    <p className="text-gray-700 text-sm mb-4 break-words">
                      BluVade operates a robust distribution channel that spans
                      across key regions, ensuring widespread availability of
                      our products and services. Through strategic partnerships
                      and efficient logistics, we maintain a strong presence in
                      the market, catering to diverse sectors including
                      Information Technology, Medical Equipment, and General
                      Order Supplies. Our extensive network allows us to deliver
                      timely solutions and support, reinforcing our commitment
                      to customer satisfaction and market leaderships.
                    </p>
                  </div>
                </div>
              </div>
              {/* "Distribution Channels" Section */}
              <div className="py-16 px-4 mt-4">
                <div className="container mx-auto">
                  <h2 className="text-5xl font-bold text-blue-900 text-center mb-12">
                    Distribution Channels
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Image 1 */}
                    <div className="bg-white shadow-lg rounded-sm overflow-hidden">
                      <img
                        src={appleImg}
                        alt="Distribution Channel 1"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    {/* Image 2 */}
                    <div className="bg-white shadow-lg rounded-sm overflow-hidden">
                      <img
                        src={microsoftImg}
                        alt="Distribution Channel 2"
                        className="w-full h-48 object-contain"
                      />
                    </div>
                    {/* Image 3 */}
                    <div className="bg-white shadow-lg rounded-sm overflow-hidden">
                      <img
                        src={dellImg}
                        alt="Distribution Channel 3"
                        className="w-full h-48 object-contain"
                      />
                    </div>
                    {/* Image 4 */}
                    <div className="bg-white shadow-lg rounded-sm overflow-hidden">
                      <img
                        src={hpImg}
                        alt="Distribution Channel 4"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    {/* Image 5 */}
                    <div className="bg-white shadow-lg rounded-sm overflow-hidden">
                      <img
                        src={asusImg}
                        alt="Distribution Channel 5"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    {/* Image 6 */}
                    <div className="bg-white shadow-lg rounded-sm overflow-hidden">
                      <img
                        src={sonyImg}
                        alt="Distribution Channel 6"
                        className="w-full h-48 object-cotain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
