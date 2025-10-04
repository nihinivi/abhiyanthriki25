import React from 'react';
import A3KLogo from '../assets/figma/A3K.png';
import JubileeLogo from '../assets/figma/Jubilee.png';
import RSETLogo from '../assets/figma/RSET.png';
// 1. Uncomment the line below after installing emailjs
// import emailjs from '@emailjs/browser'; // 1. Uncomment this line after installing the package

// --- IMPORT YOUR LOGO IMAGES ---
// 2. Uncomment these lines and make sure the paths are correct
// import a3kLogo from '../assets/figma/A3K.png';
// import jubileeLogo from '../assets/figma/Jubilee.png';
// import rsetLogo from '../assets/figma/RSET.png';


const FooterSection = () => {
  const form = React.useRef();
  const [statusMessage, setStatusMessage] = React.useState('');

  // --- EMAILJS CONFIGURATION ---
  // IMPORTANT: Replace these with your actual EmailJS credentials
  const SERVICE_ID = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
  // -----------------------------

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage('Sending...');

    // 3. Uncomment the block below to enable email sending
    /*
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setStatusMessage('Feedback sent successfully!');
        form.current.reset();
        setTimeout(() => setStatusMessage(''), 3000); // Clear message after 3 seconds
      }, (error) => {
        console.log(error.text);
        setStatusMessage('Failed to send feedback. Please try again.');
        setTimeout(() => setStatusMessage(''), 3000);
      });
    */

    // Placeholder logic for demonstration
    console.log('Form submitted. Uncomment emailjs logic to send emails.');
    setStatusMessage('Feedback sent successfully! (Demo)');
    form.current.reset();
    setTimeout(() => setStatusMessage(''), 3000);
  };

  return (
    <footer className="relative w-full bg-black/50 text-neutral-300 py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-16 md:gap-8">

        {/* Left Column: Logos, Address & Map */}
        <div className="w-full max-w-md flex flex-col items-center md:items-start text-center md:text-left">
          {/* Logo Group */}
          <div className="flex flex-col items-center md:items-start">
            {/* 4. Replace placeholder URLs with your image imports */}
            <img src={A3KLogo} alt="A3K 2025 Logo" className="h-auto w-150" />
            <div className="flex items-center gap-6 mt-6">
              <img src={JubileeLogo} alt="Jubilee Logo" className="h-auto w-30" />
              <img src={RSETLogo} alt="RSET Logo" className="h-auto w-50" />
            </div>
          </div>
          
          <p className="mt-6 text-sm text-neutral-400">
            Rajagiri School of Engineering & Technology<br />
            Kochi, Kerala 682039
          </p>
          
          {/* Embedded Google Map */}
          <div className="mt-6 w-full rounded-lg overflow-hidden border-2 border-neutral-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.980695123992!2d76.3533969748992!3d10.01848529008891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080cf5057a1675%3A0x29841f23348682a!2sRajagiri%20School%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1664182848536!5m2!1sen!2sin"
              className="w-full h-48 border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RSET Location"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Nav & Form */}
        <div className="w-full max-w-md flex flex-col items-center md:items-start">
          <div className="flex items-center gap-8 mb-6">
            <a href="#" className="cursor-target cursor-none font-semibold hover:text-red-500 transition-colors uppercase tracking-widest">Home</a>
            <a href="#" className="cursor-target cursor-none font-semibold hover:text-red-500 transition-colors uppercase tracking-widest">Events</a>
            <a href="#" className="cursor-target cursor-none font-semibold hover:text-red-500 transition-colors uppercase tracking-widest">Registration</a>
          </div>

          <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 text-white">Contact</h3>

          <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="bg-neutral-800 border border-neutral-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="bg-neutral-800 border border-neutral-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              name="message"
              placeholder="Your Feedback"
              required
              rows="4"
              className="bg-neutral-800 border border-neutral-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>

            <button
              type="submit"
              className="cursor-target bg-transparent border-2 border-red-500 text-red-500 font-bold py-3 px-6 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 uppercase tracking-widest cursor-none"
            >
              Send Feedback
            </button>
            {statusMessage && <p className="text-center text-sm mt-2">{statusMessage}</p>}
          </form>
        </div>
      </div>
      <div className="text-center mt-16 text-xs text-neutral-500">
        <p>&copy; 2025, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default FooterSection;

