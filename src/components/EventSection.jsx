
import techCard from '../assets/figma/Tech Card.png';
import nonTechCard from '../assets/figma/Non Tech.png';
import autoCard from '../assets/figma/Auto.png';
import { useNavigate } from 'react-router-dom';

const COLORS = {
  redAccent: '#F64040',
  darkCard: '#1F1F1F',
  black: '#000000',
}


export default function EventSection() {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate('/eventdetails');
  };
  return (
    <section className="w-screen min-h-screen">
      <div className="mx-auto max-w-[1920px] px-6 py-0 h-full">
        {/* Title */}
        <div className="pt-[100px] md:pt-[188px]">
          <h2
            className="text-center font-[\'KH Interference\'] text-[130px] leading-[1.03]"
            style={{ color: COLORS.redAccent }}
          >
            Events
          </h2>
        </div>

        {/* Cards row */}
        <div className="mt-[40px] md:mt-[60px] flex flex-col md:flex-row md:items-start items-center md:justify-between gap-8 md:gap-6">
          {/* Tech card */}
          <div
            className="relative w-[80vw] md:w-[28%] max-w-[460px] rounded-[18px] overflow-hidden transform-gpu transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_22px_70px_rgba(0,0,0,0.45)] hover:translate-y-[-6px] hover:scale-[1.02] cursor-pointer"
            onClick={handleCardClick}
          >
            <img src={techCard} alt="Tech card" className="w-full h-auto object-contain select-none" draggable={false} />
          </div>

          {/* Non Tech card */}
          <div
            className="relative w-[80vw] md:w-[28%] max-w-[460px] rounded-[18px] overflow-hidden transform-gpu transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_22px_70px_rgba(0,0,0,0.45)] hover:translate-y-[-6px] hover:scale-[1.02] cursor-pointer"
            onClick={handleCardClick}
          >
            <img src={nonTechCard} alt="Non Tech card" className="w-full h-auto object-contain select-none" draggable={false} />
          </div>

          {/* Auto card */}
          <div
            className="relative w-[80vw] md:w-[28%] max-w-[460px] rounded-[18px] overflow-hidden transform-gpu transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_22px_70px_rgba(0,0,0,0.45)] hover:translate-y-[-6px] hover:scale-[1.02] cursor-pointer"
            onClick={handleCardClick}
          >
            <img src={autoCard} alt="Auto card" className="w-full h-auto object-contain select-none" draggable={false} />
          </div>
        </div>
      </div>
    </section>
  );
}


