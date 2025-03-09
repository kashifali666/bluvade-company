import React from "react";
import ServicesCard from "../components/ServicesCard";
import ictImg from "../assets/it&ict.jpg";
import electronicImg from "../assets/electronic.jpg";
import bioMedicalImg from "../assets/bioMedical.jpg";
import powerImg from "../assets/power.jpg";
import supplyImg from "../assets/generalOrder.jpg";

const services = [
  {
    id: 1,
    title: "Specialized IT & ICT Equipment",

    image: ictImg,
  },
  {
    id: 2,
    title: "Specialized Electric & Electronic Equipment Supplies",

    image: electronicImg,
  },
  {
    id: 3,
    title: "Bio Medical & Other Allied Equipment",

    image: bioMedicalImg,
  },
  {
    id: 4,
    title: "Power & Energy Solutions",

    image: powerImg,
  },
  {
    id: 5,
    title: "General Order Supplies",

    image: supplyImg,
  },
];

const Services = () => {
  return (
    <div className="pt-0 px-8">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        Our Services
      </h2>
      <p className="text-xl text-center text-white mb-12">
        Explore our range of services designed to empower your business
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
