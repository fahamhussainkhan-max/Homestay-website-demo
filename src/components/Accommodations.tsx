import React, { useState } from 'react';
import {
  Users,
  BedDouble,
  Wifi,
  Coffee,
  Flame,
  ArrowUpRight,
  Maximize2,
  Check,
  Calendar,
  Sparkles
} from 'lucide-react';
import { Room, ROOMS } from '../data/homestayData';
import { Currency, formatPrice } from '../utils/currency';

interface AccommodationsProps {
  onSelectRoomDetails: (room: Room) => void;
  onBookRoom: (room: Room) => void;
  currency: Currency;
}

export const Accommodations: React.FC<AccommodationsProps> = ({
  onSelectRoomDetails,
  onBookRoom,
  currency
}) => {
  const [filter, setFilter] = useState<'all' | 'couples' | 'families' | 'workation'>('all');

  const filteredRooms = ROOMS.filter((room) => {
    if (filter === 'couples') return room.maxGuests <= 2;
    if (filter === 'families') return room.maxGuests >= 4;
    if (filter === 'workation') return room.id === 'nanda-devi-sunrise-studio' || room.id === 'orchard-cedar-suite';
    return true;
  });

  return (
    <section id="rooms" className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="text-center mb-8">
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#C27C58] uppercase block mb-1">
          Accommodations
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#1D2A24] font-bold">
          Cottages &amp; Suites
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto mt-2 leading-relaxed">
          Each room is handcrafted with local deodar pine, hand-woven woolens, and floor-to-ceiling glass framing snow peaks.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {[
            { id: 'all', label: 'All Cottages' },
            { id: 'couples', label: 'For Couples (1-2)' },
            { id: 'families', label: 'For Families (3-4+)' },
            { id: 'workation', label: 'Workation & Writing' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#2D4B3E] text-white shadow-xs'
                  : 'bg-[#F4EFE6] text-[#1D2A24]/80 hover:bg-[#E9E3D5]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-3xl overflow-hidden border border-[#E9E3D5] custom-shadow hover:border-[#2D4B3E]/40 transition duration-300"
          >
            {/* Image Header with Badges */}
            <div className="relative h-64 sm:h-80 overflow-hidden group">
              <img
                src={room.coverImage}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              {/* Badge */}
              {room.badge && (
                <div
                  className={`absolute top-4 left-4 ${
                    room.badgeColor || 'bg-[#2D4B3E]'
                  } text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm`}
                >
                  {room.badge}
                </div>
              )}

              {/* View Overlay Tag */}
              <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-md text-[#1D2A24] text-[10px] font-semibold px-3 py-1 rounded-full border border-white/80 shadow-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#C27C58]" />
                <span>{room.view}</span>
              </div>

              {/* Title & Tagline on gradient */}
              <div className="absolute bottom-4 left-5 right-5 text-white z-10">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#FBF9F5]/90 block">
                  {room.tagline}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white drop-shadow-sm">
                  {room.name}
                </h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
            </div>

            {/* Room Content */}
            <div className="p-6">
              <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                {room.description}
              </p>

              {/* Room Key Meta Badges */}
              <div className="flex flex-wrap gap-x-5 gap-y-2.5 text-xs text-[#1D2A24]/85 mb-6 font-medium bg-[#FBF9F5] p-3 rounded-2xl border border-[#E9E3D5]">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#2D4B3E]" />
                  <span>Up to {room.maxGuests} Guests</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <BedDouble className="w-3.5 h-3.5 text-[#2D4B3E]" />
                  <span>{room.bedType}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Wifi className="w-3.5 h-3.5 text-[#2D4B3E]" />
                  <span>100 Mbps Wi-Fi</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-[#2D4B3E]" />
                  <span>Pahari Breakfast Included</span>
                </span>
              </div>

              {/* Price & Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#E9E3D5]">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-serif text-[#2D4B3E]">
                      {formatPrice(room.pricePerNight, currency)}
                    </span>
                    {room.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {formatPrice(room.originalPrice, currency)}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-gray-500 block">
                    / night (all taxes included &bull; free breakfast)
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => onSelectRoomDetails(room)}
                    className="px-4 py-2.5 rounded-full border border-[#2D4B3E] text-[#2D4B3E] text-xs font-bold hover:bg-[#F4EFE6] transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Details &amp; Gallery</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onBookRoom(room)}
                    className="px-5 py-2.5 rounded-full bg-[#2D4B3E] text-white text-xs font-bold hover:bg-[#436B59] transition flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Direct</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
