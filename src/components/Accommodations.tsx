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

        {/* Filter Pills with Mobile Horizontal Scroll */}
        <div className="flex items-center sm:justify-center gap-2 mt-6 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 py-1">
          {[
            { id: 'all', label: 'All Cottages' },
            { id: 'couples', label: 'For Couples (1-2)' },
            { id: 'families', label: 'For Families (3-4+)' },
            { id: 'workation', label: 'Workation & Writing' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 sm:py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition shrink-0 cursor-pointer ${
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

      <div className="space-y-6 sm:space-y-8">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-3xl overflow-hidden border border-[#E9E3D5] custom-shadow hover:border-[#2D4B3E]/40 transition duration-300"
          >
            {/* Image Header with Badges */}
            <div className="relative h-60 sm:h-80 overflow-hidden group">
              <img
                src={room.coverImage}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              {/* Badge */}
              {room.badge && (
                <div
                  className={`absolute top-3 sm:top-4 left-3 sm:left-4 ${
                    room.badgeColor || 'bg-[#2D4B3E]'
                  } text-white text-[9px] sm:text-[10px] font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider shadow-sm`}
                >
                  {room.badge}
                </div>
              )}

              {/* View Overlay Tag */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-md text-[#1D2A24] text-[9px] sm:text-[10px] font-semibold px-2.5 sm:px-3 py-1 rounded-full border border-white/80 shadow-xs flex items-center gap-1 max-w-[65%] truncate">
                <Sparkles className="w-3 h-3 text-[#C27C58] shrink-0" />
                <span className="truncate">{room.view}</span>
              </div>

              {/* Title & Tagline on gradient */}
              <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-5 right-4 sm:right-5 text-white z-10">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold text-[#FBF9F5]/90 block mb-0.5">
                  {room.tagline}
                </span>
                <h3 className="text-lg sm:text-2xl font-serif font-bold text-white drop-shadow-sm">
                  {room.name}
                </h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            </div>

            {/* Room Content */}
            <div className="p-4 sm:p-6">
              <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                {room.description}
              </p>

              {/* Room Key Meta Badges */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-x-5 sm:gap-y-2.5 text-[11px] sm:text-xs text-[#1D2A24]/85 mb-5 sm:mb-6 font-medium bg-[#FBF9F5] p-3 rounded-2xl border border-[#E9E3D5]">
                <span className="flex items-center gap-1.5 truncate">
                  <Users className="w-3.5 h-3.5 text-[#2D4B3E] shrink-0" />
                  <span className="truncate">Up to {room.maxGuests} Guests</span>
                </span>
                <span className="flex items-center gap-1.5 truncate">
                  <BedDouble className="w-3.5 h-3.5 text-[#2D4B3E] shrink-0" />
                  <span className="truncate">{room.bedType}</span>
                </span>
                <span className="flex items-center gap-1.5 truncate">
                  <Wifi className="w-3.5 h-3.5 text-[#2D4B3E] shrink-0" />
                  <span className="truncate">100 Mbps Wi-Fi</span>
                </span>
                <span className="flex items-center gap-1.5 truncate">
                  <Coffee className="w-3.5 h-3.5 text-[#2D4B3E] shrink-0" />
                  <span className="truncate">Breakfast Included</span>
                </span>
              </div>

              {/* Price & Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pt-4 border-t border-[#E9E3D5]">
                <div className="flex sm:block items-baseline justify-between sm:justify-start">
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
                  <span className="text-[10px] sm:text-[11px] text-gray-500 block">
                    / night &bull; all taxes included
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:flex items-center gap-2">
                  <button
                    onClick={() => onSelectRoomDetails(room)}
                    className="w-full sm:w-auto px-3.5 sm:px-4 py-2.5 rounded-full border border-[#2D4B3E] text-[#2D4B3E] text-xs font-bold hover:bg-[#F4EFE6] transition flex items-center justify-center gap-1 cursor-pointer min-h-[42px]"
                  >
                    <span>Details &amp; Photos</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onBookRoom(room)}
                    className="w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-full bg-[#2D4B3E] text-white text-xs font-bold hover:bg-[#436B59] transition flex items-center justify-center gap-1.5 shadow-xs cursor-pointer active:scale-95 min-h-[42px]"
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
