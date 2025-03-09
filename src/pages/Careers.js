import React from "react";
import planImg from "../assets/careerPage.jpg";
import backgroundImg from "../assets/plan.jpg";

const Careers = () => {
  return (
    <div className="min-h-screen">
      {/* Main container */}
      <div className="container">
        <div className="relative w-full h-[400px]">
          {/* Image */}
          <img
            src={planImg}
            alt="Example"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-4">
          <h1 className="text-5xl text-center text-blue-800">
            Latest job post
          </h1>
          <p className="text-center text-lg mt-4">
            Looking for a Meaningful Career? Apply Now and Make an Impact
          </p>
        </div>
        <div>
          <p className="text-lg mt-10">We currently have no job openings</p>
        </div>
        {/* Professional Section */}
        <div className="relative w-full mt-4">
          {/* Full-Width Background Image Section */}
          <div className="relative h-[60vh]">
            <img
              src={backgroundImg}
              alt="Background Illustration"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h3 className="text-lg mb-4">Why Choose Us</h3>
              <h2 className="text-2xl font-bold mb-4">
                Chart Your Path, Shape Your Future: Join Us Today
              </h2>
              <p className="text-lg mb-8 text-center">
                Embark on a journey where your ambitions meet limitless
                opportunities. At Mukins, we believe in <br /> empowering
                individuals to shape their own futures.
              </p>
            </div>
          </div>

          {/* Cards Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between text-center">
                <div>
                  <div className="text-blue-500 text-4xl mb-4">🏙️</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Our Work Culture
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Empowering organizations to achieve sustainable development
                    goals, blending environmental conservation, social equity,
                    and economic viability.Empowering organizations to achieve
                    sustainable development goals, blending environmental
                    conservation, social equity, and economic viability.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between text-center">
                <div>
                  <div className="text-blue-500 text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Supporting Growth
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Fostering an inclusive culture where every voice is valued
                    and respected, empowering teams to thrive and reach their
                    potential.Fostering an inclusive culture where every voice
                    is valued and respected, empowering teams to thrive and
                    reach their potential.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between text-center">
                <div>
                  <div className="text-blue-500 text-4xl mb-4">📈</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Our Work Values
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Offering forward-thinking strategies to drive tangible
                    results, ensuring your path to success is clear and
                    achievable.Offering forward-thinking strategies to drive
                    tangible results, ensuring your path to success is clear and
                    achievable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
