import React, { useState } from 'react';
import {
  Heart,
  MountainSnow,
  BadgePercent,
  Utensils,
  Flame,
  Wifi,
  Sparkles,
  Info
} from 'lucide-react';

interface FeatureHighlightsProps {
  onLearnMore?: (topic: string) => void;
}

export const FeatureHighlights: React.FC<FeatureHighlightsProps> = () => {
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  const tiles = [
    {
      icon: Heart,
      title: 'Warm',
      subtitle: 'Family Care',
      detail: 'Hosted by three generations of the Joshi family. You arrive as a guest and leave as kin.',
      color: 'text-[#C27C58]'
    },
    {
      icon: MountainSnow,
      title: 'Valley',
      subtitle: 'Panoramas',
      detail: 'Direct front-row views of 7,000m+ peaks: Trishul, Nanda Devi, and Panchachuli ridge.',
      color: 'text-[#C27C58]'
    },
    {
      icon: BadgePercent,
      title: 'Fair',
      subtitle: 'Direct Pricing',
      detail: 'Zero middleman commissions. Guaranteed best rates and flexible dates directly with our family.',
      color: 'text-[#C27C58]'
    },
    {
      icon: Utensils,
      title: 'Organic',
      subtitle: 'Pahari Food',
      detail: 'Heirloom Kumaoni recipes prepared using grains and vegetables from our pesticide-free terraced farm.',
      color: 'text-[#C27C58]'
    },
    {
      icon: Flame,
      title: 'Bonfire',
      subtitle: 'Evenings',
      detail: 'Nightly gathering under sparkling stars with roasted mountain corn, pine nuts, and acoustic music.',
      color: 'text-[#C27C58]'
    },
    {
      icon: Wifi,
      title: 'Fast Wi-Fi',
      subtitle: 'Workation',
      detail: '100 Mbps dedicated optical fiber backed by solar inverters so you never drop an important meeting.',
      color: 'text-[#C27C58]'
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
        {tiles.map((tile, idx) => {
          const Icon = tile.icon;
          const isSelected = activeHighlight === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveHighlight(isSelected ? null : idx)}
              className={`bg-white/85 rounded-2xl p-4 text-center border transition-all duration-300 custom-shadow cursor-pointer relative group ${
                isSelected
                  ? 'border-[#2D4B3E] ring-2 ring-[#2D4B3E]/20 -translate-y-1 bg-[#F4EFE6]'
                  : 'border-[#E9E3D5] hover:-translate-y-1 hover:border-[#2D4B3E]/50'
              }`}
            >
              <Icon className={`w-6 h-6 mx-auto ${tile.color} mb-2 transition-transform group-hover:scale-110`} />
              <span className="block text-xs font-bold text-[#1D2A24] uppercase tracking-wider">
                {tile.title}
              </span>
              <span className="block text-[10px] text-gray-500 font-semibold mt-0.5">
                {tile.subtitle}
              </span>
            </div>
          );
        })}
      </div>

      {/* Expanded detail box when clicked */}
      {activeHighlight !== null && (
        <div className="mt-4 p-4 rounded-2xl bg-[#F4EFE6] border border-[#E9E3D5] flex items-start gap-3 animate-in fade-in duration-200">
          <div className="p-2 rounded-xl bg-[#2D4B3E]/10 text-[#2D4B3E] shrink-0">
            <Sparkles className="w-4 h-4 text-[#C27C58]" />
          </div>
          <div className="text-xs">
            <span className="font-bold text-[#1D2A24]">
              {tiles[activeHighlight].title} {tiles[activeHighlight].subtitle}:
            </span>{' '}
            <span className="text-[#1D2A24]/80">{tiles[activeHighlight].detail}</span>
          </div>
          <button
            onClick={() => setActiveHighlight(null)}
            className="text-[11px] text-gray-400 hover:text-gray-700 ml-auto font-bold px-2 py-0.5 rounded cursor-pointer"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};
