import React, { useState } from 'react';
import { Calendar, CalendarCheck, Users, Bed, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { ROOMS } from '../data/homestayData';
import { Currency, formatPrice } from '../utils/currency';

interface BookingWidgetProps {
  onBookNow: (bookingDetails: {
    checkIn: string;
    checkOut: string;
    guests: string;
    roomId: string;
    nights: number;
  }) => void;
  currency: Currency;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({ onBookNow, currency }) => {
  // Set intelligent defaults for today + 3 days
  const today = new Date().toISOString().split('T')[0];
  const nextThreeDays = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState('2026-11-05');
  const [checkOut, setCheckOut] = useState('2026-11-08');
  const [guests, setGuests] = useState('2');
  const [roomId, setRoomId] = useState(ROOMS[0].id);

  // Calculate nights
  const dIn = new Date(checkIn);
  const dOut = new Date(checkOut);
  const diffTime = dOut.getTime() - dIn.getTime();
  const calculatedNights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24))) || 3;

  const selectedRoom = ROOMS.find((r) => r.id === roomId) || ROOMS[0];
  const estimatedTotal = selectedRoom.pricePerNight * calculatedNights;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onBookNow({
      checkIn,
      checkOut,
      guests,
      roomId,
      nights: calculatedNights,
    });
  };

  return (
    <section id="booking" className="px-4 sm:px-6 -mt-10 sm:-mt-14 relative z-20 max-w-4xl mx-auto">
      <div className="glass-card rounded-3xl p-5 sm:p-7 md:p-8 custom-shadow border border-white">
        {/* Header Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-5 pb-3 border-b border-[#E9E3D5]/80">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#C27C58] uppercase inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            Reserve Your Stay &bull; Best Rates Direct
          </span>
          <div className="flex items-center gap-2 text-[11px] text-[#2D4B3E] font-semibold bg-[#2D4B3E]/10 px-3 py-1 rounded-full">
            <Sparkles className="w-3 h-3 text-[#C27C58]" />
            <span>Complimentary Farm Breakfast & Wi-Fi</span>
          </div>
        </div>

        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
          {/* Check In */}
          <div className="bg-[#F4EFE6]/80 rounded-2xl p-3 border border-[#E9E3D5] hover:border-[#2D4B3E]/40 transition">
            <label className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-[#2D4B3E] flex items-center gap-1.5 mb-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C27C58]" /> Check-in
            </label>
            <input
              type="date"
              className="w-full bg-transparent text-[16px] sm:text-xs font-semibold text-[#1D2A24] focus:outline-none cursor-pointer py-1"
              value={checkIn}
              min={today}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </div>

          {/* Check Out */}
          <div className="bg-[#F4EFE6]/80 rounded-2xl p-3 border border-[#E9E3D5] hover:border-[#2D4B3E]/40 transition">
            <label className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-[#2D4B3E] flex items-center gap-1.5 mb-1.5">
              <CalendarCheck className="w-3.5 h-3.5 text-[#C27C58]" /> Check-out
            </label>
            <input
              type="date"
              className="w-full bg-transparent text-[16px] sm:text-xs font-semibold text-[#1D2A24] focus:outline-none cursor-pointer py-1"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>

          {/* Guests */}
          <div className="bg-[#F4EFE6]/80 rounded-2xl p-3 border border-[#E9E3D5] hover:border-[#2D4B3E]/40 transition">
            <label className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-[#2D4B3E] flex items-center gap-1.5 mb-1.5">
              <Users className="w-3.5 h-3.5 text-[#C27C58]" /> Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent text-[16px] sm:text-xs font-semibold text-[#1D2A24] focus:outline-none cursor-pointer py-1"
            >
              <option value="1">1 Guest (Solo / Workation)</option>
              <option value="2">2 Guests (Couples)</option>
              <option value="3">3 Guests (Friends / Family)</option>
              <option value="4">4 Guests (Family Group)</option>
              <option value="5">5+ Guests (Entire Homestead)</option>
            </select>
          </div>

          {/* Cottage Choice */}
          <div className="bg-[#F4EFE6]/80 rounded-2xl p-3 border border-[#E9E3D5] hover:border-[#2D4B3E]/40 transition">
            <label className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-[#2D4B3E] flex items-center gap-1.5 mb-1.5">
              <Bed className="w-3.5 h-3.5 text-[#C27C58]" /> Cottage Type
            </label>
            <select
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="w-full bg-transparent text-[16px] sm:text-xs font-semibold text-[#1D2A24] focus:outline-none cursor-pointer truncate py-1"
            >
              {ROOMS.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name} ({formatPrice(room.pricePerNight, currency)}/n)
                </option>
              ))}
            </select>
          </div>

          {/* Bottom Bar: Price Summary and Submit Button */}
          <div className="sm:col-span-2 lg:col-span-4 mt-2 pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 bg-[#FBF9F5] p-3.5 rounded-2xl border border-[#E9E3D5]">
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-full bg-[#2D4B3E]/10 text-[#2D4B3E] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#2D4B3E]" />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs text-gray-500 font-medium">
                  {calculatedNights} Night{calculatedNights > 1 ? 's' : ''} Stay &bull; {selectedRoom.name}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#2D4B3E]">
                  Estimated: {formatPrice(estimatedTotal, currency)}{' '}
                  <span className="text-[10px] sm:text-[11px] font-normal text-gray-500 block sm:inline">(Taxes incl. &bull; Free breakfast)</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 sm:py-3 rounded-xl bg-[#2D4B3E] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#436B59] transition flex items-center justify-center gap-2 custom-shadow cursor-pointer active:scale-98 shrink-0 min-h-[44px]"
            >
              <span>Instant Reserve</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
