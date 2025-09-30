 
import React from 'react'; 
function EventPopup({ event, onClose }) { 
  if (!event) {
    return null;
  }
 
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return ( 
  <div 
  className="fixed inset-0  bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50000"
  onClick={onClose}
> 
      <div 
        className="bg-[#1f1f1f] text-white rounded-xl p-6 w-11/12 max-w-lg relative border-2 border-[#A4161A]"
        onClick={handleContentClick}  
      > 
        <button 
          onClick={onClose}
          className="absolute top-2 right-3 text-white text-2xl font-bold hover:text-gray-400"
        >
          &times;
        </button>
         
        <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h2 className="text-2xl font-bold mb-2 text-[#A4161A]">{event.title}</h2>
        <p className="text-gray-300 mb-4">{event.description}</p>
        <div className="text-sm">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Venue:</strong> {event.venue}</p>
        </div>
         <div className="w-full mt-6 flex justify-center">
          <button className="px-6 py-2 bg-[#6E0D25] text-white rounded-full font-medium hover:bg-red-700 transition-colors">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}  
function PopupTest({ title="sss", description="sss", imageUrl="zzz" }) {
 return (
    // Main container using the inline SVG for its background and shape
    <div
      className="relative flex flex-col md:flex-row w-full max-w-6xl mx-auto my-10 min-h-[450px] p-8 md:p-12 text-white bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${customCardShape})` }}
    >
      
      {/* Left Section: Image/Visual Placeholder */}
      <div className="flex-1 min-h-[200px] md:min-h-full bg-gray-900/50 rounded-lg flex items-center justify-center text-gray-400 mb-6 md:mb-0 md:mr-8">
        {/* You can place an actual image here if needed */}
        {/* <img src={imageUrl} alt="Event Visual" className="w-full h-full object-cover rounded-lg" /> */}
        <p className="text-xl">Event Visual Area</p>
      </div>

      {/* Right Section: Content */}
      <div className="flex-1 flex flex-col justify-between z-10">
        
        {/* Top Right: Title and Description */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 uppercase leading-tight text-gray-100">
            {title || "EVENT TITLE HERE"}
          </h2>
          <p className="text-base lg:text-lg text-gray-300">
            {description || "Event large description that provides more details about the event, what attendees can expect, and why they should participate."}
          </p>
        </div>

        {/* Bottom Right: Register Button */}
        <div className="mt-8 self-start md:self-end">
          <button className="px-6 py-2.5 lg:px-8 lg:py-3 bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300 rounded-lg font-semibold text-base lg:text-lg">
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
}
 

export default EventPopup;