import React from "react";

const CompanyInfo = () => {
  return (
    <div className="bg-gray-200 p-6 shadow-md w-full">
      <h2 className="text-4xl font-extrabold mb-4 text-blue-950">
        Get in touch.
      </h2>
      <p className="mb-4 text-gray-700">
        Reach out and let’s make things happen.
      </p>
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-blue-950">Address</h3>
          <p>
            Bluvade HQ, Office #5, 1st Floor, HH Tower Ring Road Peshawar
            Pakistan.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-blue-950">Call Us</h3>
          <p>+92-311-113-999-3</p>
        </div>
        <div>
          <h3 className="font-bold text-blue-950">Email Us</h3>
          <p>info@bluvade.com</p>
        </div>
        <p className="text-gray-600">
          For more information or any specific questions, you can contact us
          directly by phone or drop us a message via email.
        </p>
      </div>
    </div>
  );
};

export default CompanyInfo;
