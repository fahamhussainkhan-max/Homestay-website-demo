import React, { useState } from 'react';
import {
  X,
  Users,
  BedDouble,
  Maximize2,
  Sparkles,
  Check,
  Calendar,
  Flame,
  Wifi,
  Coffee,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Room } from '../data/homestayData';
import { Currency, formatPrice } from '../utils/currency';

interface RoomDetailsModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (room: Room) => void;
  currency: Currency;
}

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({
  room,
  onClose,
  onBookRoom,
  currency
}) => {
  if (!room) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % room.gallery.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + room.gallery.length) % room.gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#FBF9F5] w-full max-w-3xl rounded-3xl border border-[#E9E3D5] shadow-2xl overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        {/* Modal Gallery Header */}
        <div className="relative h-72 sm:h-96 bg-black">
          <img
            src={room.gallery[activeImageIndex]}
            alt={room.name}
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/70 transition cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Carousel Arrows */}
          {room.gallery.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/70 transition cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/70 transition cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Bottom Title on Image */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[10px] uppercase tracking-widest text-[#E9E3D5] font-bold block">
              {room.tagline}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {room.name}
            </h2>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        {room.gallery.length > 1 && (
          <div className="flex gap-2 p-3 bg-[#F4EFE6] border-b border-[#E9E3D5] overflow-x-auto">
            {room.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition cursor-pointer ${
                  activeImageIndex === idx
                    ? 'border-[#2D4B3E] ring-2 ring-[#2D4B3E]/30'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[55vh] overflow-y-auto">
          {/* Key Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3.5 rounded-2xl border border-[#E9E3D5] text-xs">
            <div>
              <span className="text-[10px] text-gray-500 uppercase block">Capacity</span>
              <span className="font-bold text-[#1D2A24] flex items-center gap-1 mt-0.5">
                <Users className="w-3.5 h-3.5 text-[#2D4B3E]" /> {room.maxGuests} Guests
              </span>
            </div>
            <div>
              <span className="text-[10px] text-gray-500 uppercase block">Bed Style</span>
              <span className="font-bold text-[#1D2A24] flex items-center gap-1 mt-0.5 truncate">
                <BedDouble className="w-3.5 h-3.5 text-[#2D4B3E]" /> {room.bedType}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-gray-500 uppercase block">Floor Area</span>
              <span className="font-bold text-[#1D2A24] flex items-center gap-1 mt-0.5">
                <Maximize2 className="w-3.5 h-3.5 text-[#2D4B3E]" /> {room.area}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-gray-500 uppercase block">Terrace View</span>
              <span className="font-bold text-[#1D2A24] flex items-center gap-1 mt-0.5 truncate">
                <Sparkles className="w-3.5 h-3.5 text-[#C27C58]" /> {room.view}
              </span>
            </div>
          </div>

          {/* Long Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C27C58] mb-2">
              About This Cottage
            </h4>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {room.longDescription}
            </p>
          </div>

          {/* Full Amenities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C27C58] mb-3">
              Included Homestay Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1D2A24]">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-[#E9E3D5]">
                  <Check className="w-3.5 h-3.5 text-[#2D4B3E] shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Price & Book CTA */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#E9E3D5] flex flex-col sm:flex-row items-center justify-between gap-4">
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
              / night &bull; Includes organic farm breakfast &amp; all taxes
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-full border border-[#E9E3D5] text-xs font-bold text-[#1D2A24] hover:bg-[#F4EFE6] cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookRoom(room);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-full bg-[#2D4B3E] text-white text-xs font-bold hover:bg-[#436B59] transition flex items-center justify-center gap-1.5 shadow-sm cursor-pointer active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Stay</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
