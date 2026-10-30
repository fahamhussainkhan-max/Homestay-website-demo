import React, { useState } from 'react';
import { CloudSun, Sparkles, Thermometer, Shirt, Compass } from 'lucide-react';
import { SEASONS_DATA } from '../data/homestayData';

export const SeasonsGuide: React.FC = () => {
  const [activeSeason, setActiveSeason] = useState<number>(3); // Default Autumn

  const current = SEASONS_DATA[activeSeason];

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="bg-[#F4EFE6] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E9E3D5] custom-shadow">
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#C27C58] uppercase block mb-1">
            Weather &amp; Seasons
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1D2A24] font-bold">
            When Should You Visit Almora?
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto mt-2 leading-relaxed">
            Every season in Kumaon brings a distinct wonder, from springtime fruit blossoms to autumn snow views and cozy winter hearths.
          </p>

          {/* Season Switcher Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {SEASONS_DATA.map((s, idx) => (
              <button
                key={s.season}
                onClick={() => setActiveSeason(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                  activeSeason === idx
                    ? 'bg-[#2D4B3E] text-white shadow-xs'
                    : 'bg-white text-[#1D2A24]/80 hover:bg-[#E9E3D5] border border-[#E9E3D5]'
                }`}
              >
                {s.season}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Season Card */}
        <div className="bg-white rounded-2xl p-6 border border-[#E9E3D5] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <span className="text-[10px] font-bold tracking-widest text-[#C27C58] uppercase block">
              Overview
            </span>
            <h3 className="text-xl font-serif font-bold text-[#1D2A24]">
              {current.season}
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              {current.vibe}
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EFE6] text-xs font-bold text-[#2D4B3E]">
              <Thermometer className="w-3.5 h-3.5 text-[#C27C58]" />
              <span>{current.temp}</span>
            </div>
          </div>

          <div className="space-y-3 border-t md:border-t-0 md:border-l border-[#E9E3D5] md:pl-6 pt-4 md:pt-0">
            <span className="text-[10px] font-bold tracking-widest text-[#C27C58] uppercase block">
              Landscape &amp; Peak Clarity
            </span>
            <div className="text-xs font-semibold text-[#1D2A24]">
              {current.landscape}
            </div>
            <div className="p-3 bg-[#FBF9F5] rounded-xl border border-[#E9E3D5]">
              <span className="text-[10px] text-gray-500 uppercase block mb-1">
                Himalayan Peak Visibility
              </span>
              <span className="text-xs font-bold text-[#2D4B3E]">
                {current.peakVisibility}
              </span>
            </div>
          </div>

          <div className="space-y-3 border-t md:border-t-0 md:border-l border-[#E9E3D5] md:pl-6 pt-4 md:pt-0">
            <span className="text-[10px] font-bold tracking-widest text-[#C27C58] uppercase block">
              What To Pack
            </span>
            <div className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
              <Shirt className="w-4 h-4 text-[#2D4B3E] shrink-0 mt-0.5" />
              <span>{current.clothing}</span>
            </div>
            <div className="pt-2 text-[11px] text-[#C27C58] font-semibold">
              &bull; Electric blankets &amp; firewood are always available at Pinecrest.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
