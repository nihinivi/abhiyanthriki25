// src/components/EventSectionCards/EventSectionCard.jsx

import cardBaseSvg from '../../assets/figma/Vector 7.svg';
import "./EventCard.css";

function EventCard({ title, desc, imgurl, onClick }) {
  return ( 
    <div 
      className="relative w-full max-w-md aspect-[3/4] cursor-pointer group"
      onClick={onClick}
    >
      <img 
        src={cardBaseSvg} 
        alt=""
        className="absolute top-0 left-0 w-full h-full group-hover:scale-105 transition-transform duration-300" 
      />
 
      <div className="relative z-10 w-full h-full flex flex-col items-center @container/card">
        {/* CHANGED: Padding is now container-relative */}
        <div className="w-full h-[40%] p-[4cqi]">
          <img 
            src={imgurl}
            alt="Event"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      
        {/* CHANGED: Margin and padding are now container-relative */}
        <div className="w-full mt-[2cqi] px-[4cqi] text-center">
          <p className="text-[clamp(0.4rem,8cqi,1.2rem)] font-extrabold break-words">
            {title}
          </p>
        </div>
      
        {/* CHANGED: Margin and padding are now container-relative */}
        <div className="w-full mt-[1cqi] px-[4cqi] text-center">
          <p className="text-[#B0B0B0] text-[clamp(0.1rem,3cqi,1rem)] font-semibold break-words">
            {desc}
          </p>
        </div>
      
        {/* CHANGED: Bottom position is now container-relative */}
        <div className="absolute bottom-[6cqi] left-0 w-full flex justify-center">
          <button 
            // CHANGED: Padding is now container-relative, sm: breakpoint removed
            className="px-[4cqi] py-[2cqi] bg-[#6E0D25] text-white text-[clamp(0.3rem,3cqi,1rem)] rounded-full font-medium group-hover:bg-red-700 transition-colors"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;