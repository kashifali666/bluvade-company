import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hb63fu9",
        "template_znuxm3v",
        form.current,
        "OPJyzEcAXVKLeWUt5"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result);
          alert("Email sent successfully!");
          window.location.reload();
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Email sending failed. Check the console for details.");
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-xl text-blue-600 font-semibold">
          Send us a Message
        </h2>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">Let's talk</h1>
        <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                UserEmail
              </label>
              <input
                type="email"
                name="from_email"
                placeholder="useremail"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 px-4 rounded-md flex items-center justify-center text-lg font-semibold hover:bg-blue-800 transition"
          >
            ✉ Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
