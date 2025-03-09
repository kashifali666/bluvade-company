import React from "react";
import { useParams, Link } from "react-router-dom";
import ictImg from "../assets/it&ict.jpg";
import electronicImg from "../assets/electronic.jpg";
import bioMedicalImg from "../assets/bioMedical.jpg";
import powerImg from "../assets/power.jpg";
import supplyImg from "../assets/generalOrder.jpg";

const services = [
  {
    id: 1,
    title: "Specialized IT & ICT Equipment",
    description: `<p>In today’s fast-paced digital landscape, having the right IT and ICT equipment is crucial for businesses, organizations, and institutions to operate efficiently. At BLUVADE, we specialize in providing top-tier IT & ICT solutions, ensuring seamless connectivity, enhanced productivity, and secure operations.</p> <br />
      
      <p><strong>Our Offerings</strong></p> <br />
      <p>We supply a wide range of cutting-edge IT and ICT equipment tailored to meet diverse business needs. Whether you're upgrading your office setup, enhancing security, or optimizing communication, we have you covered with:
</p> <br />
      <ul>
        <li>✅ <strong>Laptops & Computers</strong> – High-performance systems for professionals, businesses, and educational institutions.</li>
        <li>✅ <strong>Video Conferencing Equipment</strong> – Advanced solutions for seamless remote collaboration.</li>
        <li>✅ <strong>LED Displays & Screens</strong> – Crystal-clear displays for meetings, presentations, and digital signage.</li>
        <li>✅ <strong>Networking Equipment</strong> – Routers, switches, and access points for uninterrupted connectivity.</li>
        <li>✅ <strong>Servers & Storage Solutions</strong> – Scalable and secure infrastructure for data management.</li>
        <li>✅ <strong>CCTV Cameras & Security Systems</strong> – Smart surveillance solutions for enhanced safety.</li>
        <li>✅ <strong>Allied IT & Electrical Equipment</strong> – Power solutions, accessories, and specialized hardware.</li>
      </ul> <br />
      
      <p><strong>Why Choose BluVade?</strong></p> <br />
      <ul>
        <li>🔹 <strong>Trusted Quality & Reliability</strong> – We source products from globally recognized brands to ensure superior performance.</li>
        <li>🔹 <strong>Competitive Pricing</strong> – Get the best value for your investment without compromising on quality.</li>
        <li>🔹 <strong>Tailored Solutions</strong> – Customized packages to fit your specific business or organizational needs.</li>
        <li>🔹 <strong>Timely Delivery & Support</strong> – We guarantee 100% on-time delivery with professional after-sales support.</li>
      </ul>`,
    image: ictImg,
  },
  {
    id: 2,
    title: "Specialized Electric & Electronic Equipment Supplies",

    description: `<p>At BluVade, we understand that reliable electric and electronic equipment is essential for smooth business operations, workplace efficiency, and a comfortable environment. Our extensive range of high-quality electrical and electronic solutions is designed to meet the evolving needs of offices, businesses, and commercial spaces.
</p> <br />
      
      <p><strong>Our Offerings</strong></p> <br />
      <p>We provide a comprehensive selection of specialized electric and electronic equipment, ensuring energy efficiency, durability, and top performance. Our product range includes:
</p> <br />
      <ul>
        <li>✅ <strong> Air Conditioners & Cooling Solutions</strong> – Energy-efficient cooling systems for offices and commercial spaces.
</li>
        <li>✅ <strong> Water Dispensers & Purifiers</strong> – Clean and hygienic water solutions for a healthy workplace.
</li>
        <li>✅ <strong>Office Electrical Equipment</strong> –  Power backup solutions, voltage stabilizers, and smart electrical accessories.
</li>
        <li>✅ <strong>Commercial & Industrial Fans</strong> – Ceiling, pedestal, and ventilation fans for efficient air circulation.
</li>
        <li>✅ <strong>UPS Systems & Power Solutions</strong> – Reliable backup power for uninterrupted workflow.
</li>
        <li>✅ <strong>Smart Lighting Solutions</strong> – LED lights, panel lights, and energy-efficient office lighting.
</li>
        <li>✅ <strong>Electric Heaters & Climate Control Systems</strong> – Stay comfortable in all seasons with smart temperature control.
</li>
        <li>✅ <strong> Home & Office Automation Equipment</strong> – Modern automation solutions for convenience and security.
</li>
        <li>✅ <strong>Electrical Panels & Distribution Boards</strong> – Safe and efficient power distribution for offices and industries.
</li>
        <li>✅ <strong>Security & Access Control Systems</strong> – Advanced biometric systems, smart locks, and access control solutions.</li>
        
      </ul>`,
    image: electronicImg,
  },
  {
    id: 3,
    title: "Bio Medical & Other Allied Equipment",

    description: `
      <p>The healthcare industry demands precision, reliability, and cutting-edge technology to ensure the best patient care and medical outcomes. At BluVade, we specialize in providing high-quality bio-medical equipment, designed to support healthcare professionals, hospitals, and laboratories with advanced medical solutions.</p> <br />

      <p><strong>Our Offerings</strong></p> <br />
      <p>We supply a wide range of bio-medical equipment that meets international healthcare standards, ensuring accuracy, efficiency, and reliability in medical diagnostics, treatment, and patient monitoring. Our product range includes:
</p> <br />
      <ul>
      <li>✅ <strong>Patient Monitoring Systems</strong> – Real-time monitoring devices for vital signs and critical care.</li>
      <li>✅ <strong>Medical Imaging Equipment</strong> – X-ray machines, ultrasound systems, and diagnostic imaging solutions.</li>
      <li>✅ <strong>Surgical & Operation Theater Equipment</strong> – Advanced surgical instruments, OT lights, and anesthesia machines.</li>
      <li>✅ <strong>ICU & Emergency Care Equipment</strong> – Ventilators, defibrillators, infusion pumps, and emergency response tools.</li>
      <li>✅ <strong>Laboratory & Diagnostic Equipment</strong> – Hematology analyzers, centrifuges, and pathology lab instruments.</li>
      <li>✅ <strong>Dental Equipment & Instruments</strong> – Dental chairs, autoclaves, and precision dental tools.</li>
      <li>✅ <strong>Physiotherapy & Rehabilitation Equipment</strong> – Ultrasound therapy units, TENS machines, and mobility aids.</li>
      <li>✅ <strong>Sterilization & Infection Control Equipment</strong> – Autoclaves, UV sterilizers, and medical waste disposal solutions.</li>
      <li>✅ <strong>Medical Furniture & Hospital Supplies</strong> – Examination tables, patient beds, wheelchairs, and stretchers.</li>
      </ul>
    `,
    image: bioMedicalImg,
  },
  {
    id: 4,
    title: "Power & Energy Solutions",

    description: `<p>In today’s world, reliable and efficient power solutions are essential for businesses, industries, and institutions to operate without disruptions. At BluVade, we specialize in delivering cutting-edge power and energy solutions that ensure uninterrupted operations, energy efficiency, and sustainability.</p><br />
      
      <p><strong>Our Offerings</strong></p><br />
      <p>We provide a comprehensive range of power and energy solutions, designed to meet the demands of commercial, industrial, and residential sectors. Our product lineup includes:</p><br />
      
      <ul>
      <li>✅ <strong>Solar Power Solutions</strong> – Grid-tied, hybrid, and off-grid solar systems for cost-effective and eco-friendly energy.</li>
      <li>✅ <strong>UPS & Backup Power Systems</strong> – Uninterruptible power supply (UPS) solutions to prevent downtime during outages.</li>
      <li>✅ <strong>Generators</strong> – High-performance diesel, gas, and hybrid generators for continuous power supply.</li>
      <li>✅ <strong>Inverters & Batteries</strong> – Smart energy storage solutions to optimize power usage.</li>
      <li>✅ <strong>Voltage Stabilizers & Power Conditioners</strong> – Protecting electrical equipment from voltage fluctuations.</li>
      <li>✅ <strong>Energy-Efficient Lighting Solutions</strong> – LED lighting and automated energy-saving solutions.</li>
      <li>✅ <strong>Smart Power Distribution Systems</strong> – Electrical panels, switchgear, and distribution boards for optimized energy flow.</li>
      <li>✅ <strong>Power Management & Monitoring Systems</strong> – Smart energy monitoring for better efficiency and cost savings.</li>
      </ul>
      `,
    image: powerImg,
  },
  {
    id: 5,
    title: "General Order Supplies",

    description: `
    <p>At BluVade, we provide a comprehensive range of high-quality general order supplies, catering to businesses, industries, and organizations. Our commitment to efficiency, reliability, and cost-effectiveness ensures that our clients receive the best products at competitive prices. Whether you need office essentials, industrial supplies, or specialized kits, we have you covered.</p><br />
      
      <p><strong>Our Offerings</strong></p><br />
      <p>We supply a wide variety of general order supplies, including but not limited to:</p><br />
      
      <ul>
      <li>✅ <strong>Office Supplies & Stationery</strong> – Printers, toners, paper, pens, notebooks, and all essential office materials.</li>
      <li>✅ <strong>Furniture & Fixtures</strong> – Office desks, ergonomic chairs, workstations, storage cabinets, and modular furniture.</li>
      <li>✅ <strong>Safety & Security Equipment</strong> – Fire extinguishers, safety helmets, gloves, first aid kits, and protective gear.</li>
      <li>✅ <strong>Cleaning & Hygiene Products</strong> – Cleaning chemicals, disinfectants, hand sanitizers, tissues, and janitorial supplies.</li>
      <li>✅ <strong>Workwear & Uniforms</strong> – Corporate uniforms, industrial safety wear, and custom branding options.</li>
      <li>✅ <strong>Tools & Hardware Supplies</strong> – Power tools, hand tools, electrical tools, and maintenance equipment.</li>
      <li>✅ <strong>Medical & First Aid Supplies</strong> – Emergency medical kits, bandages, thermometers, and basic healthcare essentials.</li>
      <li>✅ <strong>Winterization Kits</strong> – Blankets, warm clothing, heating equipment, and emergency winter supplies.</li>
      <li>✅ <strong>Technical & Vocational Kits</strong> – Toolkits and equipment for vocational training in various fields.</li>
      <li>✅ <strong>Agriculture Equipment & Seeds</strong> – High-quality farming tools, irrigation solutions, and certified seeds for better yield.</li>
      </ul>
    `,
    image: supplyImg,
  },
];

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="p-2">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{service.title}</h2>

          {/* Rendering the HTML content */}
          <div
            className="text-lg text-gray-700 mb-4"
            dangerouslySetInnerHTML={{ __html: service.description }}
          />
          <Link to="/services" className="text-blue-500">
            Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
