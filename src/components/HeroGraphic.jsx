import WebHero from '../assets/figma/webbg.svg';

export default function HeroGraphic() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <img
        src={WebHero}
        alt="Hero Graphic"
        className="min-w-full min-h-full object-contain"
      />
    </div>
  );
}
