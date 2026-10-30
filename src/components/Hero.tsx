import React from 'react';
import { MapPin, Star, ArrowRight, Compass, ThermometerSun, Wind } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreRooms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreRooms }) => {
  return (
    <section className="relative min-h-[90vh] md:min-h-[92vh] flex items-center justify-center px-4 sm:px-6 py-16 md:py-20 overflow-hidden">
      {/* Background Image with Warm Organic Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2200&auto=format&fit=crop"
          alt="Pinecrest Himalayan Homestay Sanctuary"
          className="w-full h-full object-cover object-center filter brightness-[0.85]"
        />
        {/* Soft Multi-Layer Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F5] via-[#FBF9F5]/45 to-black/30"></div>
        <div className="absolute inset-0 bg-[#2D4B3E]/15 mix-blend-multiply"></div>
      </div>

      {/* Hero Text Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center pt-8 md:pt-12">
        {/* Location & Altitude Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md text-[11px] font-bold tracking-widest text-[#2D4B3E] uppercase mb-6 shadow-xs border border-white/80">
          <MapPin className="w-3.5 h-3.5 text-[#C27C58]" />
          <span>Old Almora Hills &bull; Kumaon Himalaya &bull; 6,400 ft</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1D2A24] font-bold leading-[1.15] mb-5 tracking-tight">
          Where the pine trees become your home.
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#1D2A24]/85 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
          An authentic family-run sanctuary nested amidst century-old apple orchards, wholesome home-cooked Kumaoni meals, and panoramic sunrises over the snow-capped Trishul and Nanda Devi peaks.
        </p>

        {/* Social Proof & Altitude badge */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 text-xs font-semibold text-[#1D2A24]/90">
          <div className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/60 shadow-xs">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="font-bold text-[#1D2A24]">4.96 / 5</span>
            <span className="text-gray-500 font-normal">(450+ verified stays)</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/60 text-[11px] text-[#2D4B3E]">
            <ThermometerSun className="w-3.5 h-3.5 text-[#C27C58]" />
            <span>Almora Today: 19°C &bull; Crisp Mountain Sky</span>
          </div>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#2D4B3E] text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#436B59] transition custom-shadow cursor-pointer active:scale-95"
          >
            <span>Check Real-Time Availability</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onExploreRooms}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/90 backdrop-blur-sm text-[#1D2A24] font-semibold text-sm border border-[#E9E3D5] hover:bg-white hover:border-[#2D4B3E] transition cursor-pointer shadow-xs"
          >
            Explore Cottages
          </button>
        </div>
      </div>
    </section>
  );
};
