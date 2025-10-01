import React, { useState, useMemo } from "react";
// Make sure this path is correct for your project structure
import { allEvents } from "../data/EventData";

// --- SVG SHAPE COMPONENTS ---

const ImageClipPathSVG = () => (
    <svg width="0" height="0" className="absolute">
        <defs>
            <clipPath id="left-card-clip" clipPathUnits="objectBoundingBox">
                <path d="M0.94898 0 C0.977157 0,1 0.0348149,1 0.0777605 V0.92224 V0.92224 C1 0.965185,0.977157 1,0.94898 1 H0.618206 C0.602442 1,0.591837 0.97037,0.591837 0.947123 V0.771384 C0.591837 0.717664,0.563512 0.675,0.528571 0.675 H0.027551 C0.0143694 0.675,0.000092305 0.660493,0 0.640807 V0.177294 C0 0.161833,0.00822335 0.149299,0.0183673 0.149299 H0.0795918 C0.0897358 0.149299,0.0979592 0.13686,0.0979592 0.121306 V0.0280093 C0.0979592 0.0125331,0.106183 0,0.116327 0 H0.94898 Z" />
            </clipPath>
        </defs>
    </svg>
);

const LeftCardBorderSVG = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 980 643" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M930 0C957.614 0 980 22.3858 980 50V593C980 620.614 957.614 643 930 643H605.842C590.393 643 580 624.448 580 609V496C580 461.758 552.242 434 518 434H27C14.082 434 9.04588e-05 425.157 0 412.239V114C0 104.059 8.05888 96 18 96H78C87.9411 96 96 87.9411 96 78V18C96 8.05888 104.059 0 114 0H930Z" stroke="#F64040" strokeWidth="2" />
    </svg>
);

const RightCardSVG = () => (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1057 643" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M495 0C504.941 0 513 8.05888 513 18V78C513 87.9411 521.059 96 531 96H596C605.941 96 614 104.059 614 114V469C614 486.673 628.327 501 646 501H1025C1042.67 501 1057 515.327 1057 533V611C1057 628.673 1042.67 643 1025 643H28C12.536 643 0 630.464 0 615V190.522C0 171.203 21.1801 158 40.5 158H124.5C175.034 158 216 117.034 216 66.5C216 65.1325 215.97 63.7718 215.91 62.4189C214.8 37.1175 232.396 0 257.722 0H495Z" fill="#1C1C1C" stroke="#F64040" strokeWidth="2" />
    </svg>
);

const CardShapeSVG = () => (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 464 636" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 80.5V19C1 9.05888 9.05887 1 19 1H112.169C115.016 1 117.822 1.67525 120.357 2.9703L170.393 28.5297C172.928 29.8248 175.734 30.5 178.581 30.5H285.419C288.266 30.5 291.072 29.8247 293.607 28.5297L343.643 2.9703C346.178 1.67525 348.984 1 351.831 1H445C454.941 1 463 9.05887 463 19V547.07C463 552.122 460.877 556.942 457.148 560.352L406.852 605.648C403.123 609.058 398.303 611 393.25 611H70.75C65.6971 611 60.8766 609.058 57.1484 605.648L6.85163 560.352C3.12343 556.942 1 552.122 1 547.07V80.5Z" fill="#1C1C1C" stroke="#333333" strokeWidth="1" />
    </svg>
);

const DesktopPageBorderSVG = () => (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M556 47L554 47L556 47ZM1253 47H1255H1253ZM1779 3V5C1786.18 5 1792 10.8203 1792 18H1794H1796C1796 8.61116 1788.39 1 1779 1V3ZM1794 18H1792V914H1794H1796V18H1794ZM1794 914H1792C1792 921.18 1786.18 927 1779 927V929V931C1788.39 931 1796 923.389 1796 914H1794ZM1779 929V927H31V929V931H1779V929ZM31 929V927C23.8203 927 18 921.18 18 914H16H14C14 923.389 21.6112 931 31 931V929ZM16 914H18V18H16H14V914H16ZM16 18H18C18 10.8203 23.8203 5 31 5V3V1C21.6112 1 14 8.61116 14 18H16ZM31 3V5H512V3V1H31V3ZM556 47L554 47C554 67.9868 571.013 85 592 85V83V81C573.222 81 558 65.7777 558 47L556 47ZM592 83V85H1217V83V81H592V83ZM1217 83V85C1237.99 85 1255 67.9868 1255 47L1253 47L1251 47C1251 65.7777 1235.78 81 1217 81V83ZM1297 3V5H1779V3V1H1297V3ZM1253 47H1255C1255 23.804 1273.8 5 1297 5V3V1C1271.59 1 1251 21.5949 1251 47H1253ZM512 3V5C535.196 5 554 23.804 554 47H556H558C558 21.5949 537.405 1 512 1V3Z" fill="#F64040" mask="url(#path-1-inside-1_130_60)" />
    </svg>
);

const MobilePageBorderSVG = () => (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 364 742" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M349 29C357.284 29.0002 364 35.7158 364 44V726.83C364 735.114 357.284 741.83 349 741.83H26C17.7157 741.83 11 735.114 11 726.83V44C11 35.7157 17.7157 29 26 29H54.5879C60.1107 29 64.5879 33.4772 64.5879 39C64.5879 58.8822 80.7056 75 100.588 75H273.588C293.47 75 309.588 58.8822 309.588 39C309.588 33.4772 314.065 29 319.588 29H349Z" stroke="#F64040" strokeWidth="2" />
    </svg>
);

const DetailsRegisterButton = ({ href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="relative w-full max-w-[280px] h-[58px] group text-white font-['KH Interference'] tracking-widest uppercase text-sm flex items-center justify-center mx-auto">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 285 58" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1H275C279.971 1 284 5.02944 284 10V31.1021C284 32.2435 283.606 33.3444 282.88 34.2217L273.231 45.3981L262.041 56.622C261.268 57.47 260.16 58 258.998 58H26.0019C24.8402 58 23.7323 57.47 22.9593 56.622L11.769 45.3981L2.11984 34.2217C1.39383 33.3444 1 32.2435 1 31.1021V10C1 5.02944 5.02944 1 10 1Z" stroke="#F64040" strokeWidth="2" />
        </svg>
        <span className="relative z-10">Register Now</span>
    </a>
);

const ViewDetailsButton = ({ onClick }) => (
    <button onClick={onClick} className="relative w-full h-[50px] group text-white font-['KH Interference'] tracking-widest uppercase text-sm">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 379 84" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1H368C373.523 1 378 5.47716 378 11V37.2012C378 39.9827 376.841 42.639 374.803 44.5312L356.591 61.4326L334.06 80.6143C332.251 82.154 329.953 83 327.577 83H51.4229C49.0474 83 46.7492 82.154 44.9404 80.6143L22.4082 61.4326L4.19727 44.5312C2.15851 42.639 1 39.9827 1 37.2012V11C1 5.47715 5.47715 1 11 1Z" stroke="#F64040" strokeWidth="2" />
        </svg>
        <span className="relative z-10">View Details</span>
    </button>
);

const EventCard = ({ event, onViewDetailsClick }) => (
    <div className="relative w-full aspect-[464/636]">
        <CardShapeSVG />
        <div className="absolute inset-0 p-6 flex flex-col">
            <div className="flex-grow space-y-2 mb-2">
                <h3 className="text-xl font-['KH Interference'] text-white leading-tight">{event.title}</h3>
                <p className="text-neutral-400 text-xs leading-snug">{event.description.substring(0, 150)}...</p>
            </div>
            <div className="flex-shrink-0 mt-auto">
                <ViewDetailsButton onClick={() => onViewDetailsClick(event)} />
            </div>
        </div>
    </div>
);

const FilterNavigation = ({ activeFilter, setActiveFilter }) => (
    <div className="flex justify-center -mt-5 md:-mt-2">
        <div className="relative flex items-center justify-center p-1.5 border-2 border-white rounded-full mx-auto w-full max-w-[300px] md:max-w-md bg-black/30">
            <div className={`absolute top-1/2 -translate-y-1/2 left-1.5 w-[calc(50%-6px)] h-[calc(100%-12px)] bg-red-600 rounded-full transition-transform duration-300 ease-out ${activeFilter === 'non-technical' ? 'translate-x-full' : 'translate-x-0'}`}></div>
            <button
                onClick={() => setActiveFilter("technical")}
                className="relative flex-1 py-2 text-white text-xs md:text-sm uppercase font-['KH Interference'] tracking-wider text-center"
            >
                Technical Events
            </button>
            <button
                onClick={() => setActiveFilter("non-technical")}
                className="relative flex-1 py-2 text-white text-xs md:text-sm uppercase font-['KH Interference'] tracking-wider text-center"
            >
                Non-Technical Events
            </button>
        </div>
    </div>
);

const EventModal = ({ event, onClose }) => {
    if (!event) return null;
    const handleModalContentClick = (e) => e.stopPropagation();

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <ImageClipPathSVG />

            {/* --- DESKTOP LAYOUT --- */}
            <div onClick={handleModalContentClick} className="relative w-full max-w-6xl mx-auto hidden md:flex flex-row items-center animate-scale-in">
                <div className="relative w-1/2 max-w-[500px] aspect-[980/643]">
                    <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" style={{ clipPath: 'url(#left-card-clip)' }} />
                    <LeftCardBorderSVG />
                </div>
                <div className="relative w-1/2 max-w-[550px] aspect-[1057/643] -ml-12">
                    <RightCardSVG />
                    <div className="absolute inset-0 flex flex-col justify-between text-white font-['KH Interference'] p-12 lg:p-20">
                        <div className="space-y-4">
                            <h2 className="text-2xl lg:text-3xl uppercase tracking-wider text-white mb-2">{event.title}</h2>
                            <p className="text-neutral-300 text-sm leading-relaxed max-h-[200px] overflow-y-auto custom-scrollbar pr-2">{event.description}</p>
                        </div>
                        <div className="mt-6">
                            <DetailsRegisterButton href={event.registrationUrl} />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MOBILE LAYOUT --- */}
            <div onClick={handleModalContentClick} className="relative w-full max-w-sm md:hidden bg-[#1C1C1C] border-2 border-[#F64040] rounded-2xl animate-scale-in flex flex-col p-6 space-y-4">
                <img src={event.imageUrl} alt={event.title} className="w-full h-auto aspect-video object-cover rounded-lg" />
                <div className="flex-grow flex flex-col justify-between overflow-hidden">
                    <div className="space-y-2 overflow-y-auto custom-scrollbar pr-2">
                        <h2 className="text-2xl uppercase tracking-wider text-white">{event.title}</h2>
                        <p className="text-neutral-300 text-sm leading-normal">{event.description}</p>
                    </div>
                    <div className="mt-6 flex-shrink-0">
                        <DetailsRegisterButton href={event.registrationUrl} />
                    </div>
                </div>
            </div>

            <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 text-neutral-400 hover:text-white transition-colors z-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};


// --- MAIN PAGE COMPONENT ---
const EventsPage = () => {
    const [activeFilter, setActiveFilter] = useState("technical");
    const [selectedEvent, setSelectedEvent] = useState(null);

    const filteredEvents = useMemo(() => {
        return allEvents.filter(event => event.category === activeFilter);
    }, [activeFilter]);

    return (
        <>
            <style>{`
                .dot-grid { background-image: radial-gradient(circle at 1px 1px, rgba(200, 200, 200, 0.2) 1px, transparent 0); background-size: 20px 20px; }
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #F64040; border-radius: 2px; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes scale-in {
                    from { transform: scale(0.9) translateY(20px); opacity: 0; }
                    to { transform: scale(1) translateY(0); opacity: 1; }
                }
                .animate-scale-in { animation: scale-in 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
            `}</style>

            <main className="h-screen w-screen relative overflow-hidden dot-grid font-['KH Interference'] flex items-center justify-center p-4 sm:p-9">
                <div className="relative w-full h-full max-w-screen-2xl">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="hidden md:block w-full h-full">
                           <DesktopPageBorderSVG />
                        </div>
                        <div className="block md:hidden w-full h-full">
                           <MobilePageBorderSVG />
                        </div>
                    </div>

                    <div className="absolute inset-0 z-10 flex flex-col pt-0">
                        <div className="flex-shrink-0 sticky top-0 bg-transparent z-20 pt-4 md:pt-0">
                            <FilterNavigation activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                        </div>

                        <div className="flex-grow overflow-y-scroll no-scrollbar pt-12 md:pt-16 pb-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-y-24 gap-x-12 px-4 md:px-6">
                                {filteredEvents.map(event => (
                                    <div key={event.id} className="max-w-sm mx-auto w-full">
                                        <EventCard event={event} onViewDetailsClick={setSelectedEvent} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex-shrink-0 h-12 md:h-24"></div>
                    </div>
                </div>
            </main>

            <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        </>
    );
};

export default EventsPage;