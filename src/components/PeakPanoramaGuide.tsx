import React, { useState } from 'react';
import { Mountain, Compass, Eye, Sparkles } from 'lucide-react';
import { PEAKS_PANORAMA } from '../data/homestayData';

export const PeakPanoramaGuide: React.FC = () => {
  const [selectedPeak, setSelectedPeak] = useState<number>(1); // Default to Nanda Devi

  return (
    <section id="peaks" className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="bg-[#1D2A24] text-[#FBF9F5] rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden custom-shadow-lg">
        {/* Background Mountain silhouettes with starry glow */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200 via-transparent to-transparent"></div>

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#C27C58] uppercase block mb-1">
                From Our Sun Terrace
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                The Himalayan Peak Panorama
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full text-xs text-[#E9E3D5] border border-white/10">
              <Compass className="w-3.5 h-3.5 text-[#C27C58]" />
              <span>North-East Facing &bull; 6,400 ft Horizon</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#E9E3D5]/80 max-w-xl mb-8 leading-relaxed">
            From the veranda of Pinecrest Meadow, on clear mornings you can see over 300 kilometers of the Great Himalayan Divide. Click a peak below to discover its legends:
          </p>

          {/* Interactive Peak Cards / Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {PEAKS_PANORAMA.map((peak, idx) => (
              <button
                key={peak.name}
                onClick={() => setSelectedPeak(idx)}
                className={`p-3.5 rounded-2xl text-left transition duration-200 cursor-pointer border ${
                  selectedPeak === idx
                    ? 'bg-[#2D4B3E] border-[#C27C58] shadow-md ring-1 ring-[#C27C58]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <Mountain className={`w-4 h-4 ${selectedPeak === idx ? 'text-[#C27C58]' : 'text-gray-400'}`} />
                  <span className="text-[10px] text-amber-300 font-mono font-semibold">
                    {peak.elevation}
                  </span>
                </div>
                <div className="text-xs font-bold text-white truncate">{peak.name}</div>
              </button>
            ))}
          </div>

          {/* Highlighted Peak Detail Box */}
          {PEAKS_PANORAMA[selectedPeak] && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-[#C27C58]" />
                  <span className="text-xs uppercase tracking-widest text-[#C27C58] font-bold">
                    Peak Highlight
                  </span>
                  <span className="text-xs text-amber-200 font-mono font-bold">
                    {PEAKS_PANORAMA[selectedPeak].elevation}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-1">
                  {PEAKS_PANORAMA[selectedPeak].name}
                </h3>
                <p className="text-xs text-[#E9E3D5] leading-relaxed max-w-lg">
                  {PEAKS_PANORAMA[selectedPeak].description}
                </p>
              </div>

              <div className="shrink-0 bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 text-center">
                <span className="text-[10px] uppercase tracking-wider text-gray-300 block">
                  Best Golden Hour
                </span>
                <span className="text-xs font-bold text-amber-300">06:10 AM - 06:45 AM</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
