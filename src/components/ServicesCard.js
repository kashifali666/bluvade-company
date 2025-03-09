import React from "react";
import { useNavigate } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigating to service with ID:", service.id);
    navigate(`/service-details/${service.id}`);
  };

  return (
    <div
      className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg"
      onClick={handleClick}
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-4">
        <h3 className="text-2xl font-semibold">{service.title}</h3>
        <h4 className="text-xl">{service.subtitle}</h4>
      </div>
    </div>
  );
};

export default ServicesCard;
