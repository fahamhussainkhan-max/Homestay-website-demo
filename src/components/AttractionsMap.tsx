import React, { useState } from 'react';
import { MapPin, Navigation, Car, Train, Plane, Clock, Info, ExternalLink } from 'lucide-react';
import { ATTRACTIONS } from '../data/homestayData';

export const AttractionsMap: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'attractions' | 'directions'>('attractions');

  return (
    <section id="location" className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="text-center mb-8">
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#C27C58] uppercase block mb-1">
          Himalayan Geography
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#1D2A24] font-bold">
          Location &amp; Nearby Wonders
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto mt-2 leading-relaxed">
          Situated on a quiet forested spur in Old Almora, comfortably away from crowded town centers while positioned ideally for day excursions.
        </p>

        {/* Tab switch */}
        <div className="inline-flex p-1 bg-[#F4EFE6] rounded-full border border-[#E9E3D5] mt-6">
          <button
            onClick={() => setActiveTab('attractions')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
              activeTab === 'attractions'
                ? 'bg-[#2D4B3E] text-white shadow-xs'
                : 'text-[#1D2A24]/70 hover:text-[#1D2A24]'
            }`}
          >
            Nearby Gems &bull; Temples &amp; Treks
          </button>
          <button
            onClick={() => setActiveTab('directions')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
              activeTab === 'directions'
                ? 'bg-[#2D4B3E] text-white shadow-xs'
                : 'text-[#1D2A24]/70 hover:text-[#1D2A24]'
            }`}
          >
            How To Reach Us &bull; Transit Guide
          </button>
        </div>
      </div>

      {activeTab === 'attractions' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ATTRACTIONS.map((spot, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-[#E9E3D5] custom-shadow hover:border-[#2D4B3E]/40 transition group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#2D4B3E] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {spot.type}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#1D2A24] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                  <Navigation className="w-3 h-3 text-[#C27C58]" />
                  <span>{spot.distance} &bull; {spot.driveTime}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-serif font-bold text-[#1D2A24] mb-1.5">
                  {spot.name}
                </h3>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                  {spot.description}
                </p>

                <div className="p-3 bg-[#FBF9F5] rounded-xl border border-[#E9E3D5] text-[11px] text-[#2D4B3E] flex items-start gap-2">
                  <Info className="w-3.5 h-3.5 text-[#C27C58] shrink-0 mt-0.5" />
                  <span><strong>Insider tip:</strong> {spot.tips}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E9E3D5] custom-shadow space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#C27C58] uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>Pinecrest Meadow, Kasar Ridge Spur, Old Almora Hills, Uttarakhand 263601</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#FBF9F5] p-4 rounded-2xl border border-[#E9E3D5]">
              <div className="w-8 h-8 rounded-full bg-[#2D4B3E]/10 text-[#2D4B3E] flex items-center justify-center mb-3">
                <Train className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-[#1D2A24] uppercase tracking-wider mb-1">
                By Train (Kathgodam)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">
                Kathgodam Railway Station is 92 km away (3.5 hours drive). Trains like Shatabdi Express and Ranikhet Express connect directly from Delhi.
              </p>
              <span className="text-[11px] font-semibold text-[#2D4B3E]">
                Cab pickup arranged: ₹2,400 direct
              </span>
            </div>

            <div className="bg-[#FBF9F5] p-4 rounded-2xl border border-[#E9E3D5]">
              <div className="w-8 h-8 rounded-full bg-[#2D4B3E]/10 text-[#2D4B3E] flex items-center justify-center mb-3">
                <Plane className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-[#1D2A24] uppercase tracking-wider mb-1">
                By Air (Pantnagar)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">
                Pantnagar Airport (PGH) is 125 km away (4 hours drive) with daily flights from New Delhi and Dehradun.
              </p>
              <span className="text-[11px] font-semibold text-[#2D4B3E]">
                Homestay cab pickup: ₹3,500
              </span>
            </div>

            <div className="bg-[#FBF9F5] p-4 rounded-2xl border border-[#E9E3D5]">
              <div className="w-8 h-8 rounded-full bg-[#2D4B3E]/10 text-[#2D4B3E] flex items-center justify-center mb-3">
                <Car className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-[#1D2A24] uppercase tracking-wider mb-1">
                By Road (From Delhi)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">
                Scenic 8-hour drive (370 km) from New Delhi via Moradabad, Rampur, Haldwani, Bhimtal, and Bhowali on well-paved hill roads.
              </p>
              <span className="text-[11px] font-semibold text-[#2D4B3E]">
                Free private guest parking inside estate
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
