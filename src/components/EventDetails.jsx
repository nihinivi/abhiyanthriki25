 
import { useState, useRef, useLayoutEffect } from "react";
import EventCard from "./EventSectionCards/EventSectionCard"; 
import EventPopup from "./EventPopup"; 

const allEvents = [ 
  { id: 1, title: "AI & Robotics Expo", category: "technical", description: "Explore the latest advancements in AI and Robotics. A full day of demos, talks, and workshops.", date: "Oct 10, 2025", venue: "Innovation Hall", imageUrl: "https://images.unsplash.com/photo-1677442135755-334341419a4e?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Quantum Computing Summit", category: "technical", description: "A deep dive into the world of quantum computing with leading researchers and industry pioneers.", date: "Oct 12, 2025", venue: "Quantum Auditorium", imageUrl: "https://images.unsplash.com/photo-1532187643623-dbf2670316b8?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "CyberSec Conference", category: "technical", description: "Learn about the latest threats, vulnerabilities, and defense strategies from top security experts.", date: "Oct 15, 2025", venue: "SecureData Center", imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Cloud Native & DevOps", category: "technical", description: "Mastering container orchestration, CI/CD pipelines, and infrastructure as code for modern applications.", date: "Oct 17, 2025", venue: "DevOps Dome", imageUrl: "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Gaming Tournament", category: "non-technical", description: "Compete in the annual e-sports tournament. Featuring popular titles, cash prizes, and a live audience.", date: "Oct 18, 2025", venue: "E-Sports Arena", imageUrl: "https://images.unsplash.com/photo-1609804231297-89024f3645b7?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Startup Pitch Night", category: "non-technical", description: "Watch the brightest new startups pitch their ideas to a panel of venture capitalists.", date: "Oct 20, 2025", venue: "Venture Hub", imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" },
  { id: 7, title: "Tech Industry Social Mixer", category: "non-technical", description: "A casual social event for professionals in the tech industry to connect, share ideas, and build their network.", date: "Oct 22, 2025", venue: "The Network Lounge", imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
  { id: 8, title: "Creative Design Workshop", category: "non-technical", description: "Unlock your creative potential with hands-on sessions on UI/UX design, branding, and digital art.", date: "Oct 25, 2025", venue: "Artisan's Hall", imageUrl: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&q=80&w=800" },
];



export function PillSelector() {
  const [selected, setSelected] = useState(0);
  const pillRefs = [useRef(null), useRef(null)];
  const [highlightStyle, setHighlightStyle] = useState({});
 
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
 
  const handleCardClick = (eventData) => {
    setSelectedEvent(eventData);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedEvent(null);
  };

  useLayoutEffect(() => {
    const el = pillRefs[selected].current;
    if (el) {
      const { offsetWidth, offsetLeft } = el;
      setHighlightStyle({
        width: offsetWidth + "px",
        transform: `translateX(${offsetLeft}px)`
      });
    }
  }, [selected]);
  
  return (
    <> 
      <div className="relative w-screen h-screen flex items-center justify-center"> 
        <div className="relative w-[calc(100%-4rem)] h-[calc(100%-4rem)] border-2 border-[#A4161A] rounded-xl flex flex-col">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex border-2 border-[#A4161A] rounded-full bg-black px-2">
            <div
              className="absolute top-0 left-0 h-full bg-[#A4161A] rounded-full transition-all duration-300"
              style={highlightStyle}
            />
            <button
              ref={pillRefs[0]}
              onClick={() => setSelected(0)}
              className="relative px-4 py-1 text-[clamp(0.75rem,1vw,1rem)] flex flex-col items-center whitespace-nowrap text-white" >
              <span>Technical</span>
              <span>Events</span>
            </button>
            <button
              ref={pillRefs[1]}
              onClick={() => setSelected(1)}
              className="relative px-4 py-1 text-[clamp(0.75rem,1vw,1rem)] flex flex-col items-center whitespace-nowrap text-white">
              <span>Non Technical</span>
              <span>Events</span>
            </button>
          </div>  
          <div className="flex flex-1 mt-10 mb-10 min-h-0 px-1">
            <div className="text-[#A4161A] [writing-mode:vertical-rl] text-[clamp(1rem,6vw,3rem)] flex-none">
              <b>Events</b>
            </div>

            <div className="relative overflow-y-auto gap-8 p-4 grid grid-cols-[repeat(auto-fit,minmax(min(100%,10rem),1fr))] h-full flex-1 min-w-0 justify-items-center">
              {allEvents
                .filter(event => selected === 0 ? event.category === "technical" : event.category === "non-technical")
                .map(event => (  
                  <EventCard
                    key={event.id}
                    title={event.title}
                    desc={event.description}
                    imgurl={event.imageUrl} 
                    onClick={() => handleCardClick(event)}
                  />
                ))}
            </div>
            

            <div className="text-[#A4161A] [writing-mode:vertical-rl] text-[clamp(1rem,6vw,3rem)] rotate-180 flex-none">
              <b>Events</b>
            </div>
          </div>
        </div>
      </div>
 
      <EventPopup event={selectedEvent} onClose={handleClosePopup} />
    </>
  );
}

function EventsPage() {
  return <PillSelector />;
}

export default EventsPage;