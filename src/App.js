import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-poppins">
        <Navbar />

        <main className="flex-grow pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-details/:id" element={<ServiceDetails />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
