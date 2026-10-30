import React, { useState } from 'react';
import {
  X,
  Calendar,
  CheckCircle,
  Users,
  Bed,
  Sparkles,
  Phone,
  Mail,
  User,
  ShieldCheck,
  Printer,
  Share2,
  Clock,
  ArrowRight,
  Car,
  Utensils,
  Flame,
  Compass
} from 'lucide-react';
import { Room, ROOMS } from '../data/homestayData';
import { Currency, formatPrice } from '../utils/currency';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: string;
  currency: Currency;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomId,
  initialCheckIn,
  initialCheckOut,
  initialGuests,
  currency
}) => {
  if (!isOpen) return null;

  const [roomId, setRoomId] = useState(initialRoomId || ROOMS[0].id);
  const [checkIn, setCheckIn] = useState(initialCheckIn || '2026-11-05');
  const [checkOut, setCheckOut] = useState(initialCheckOut || '2026-11-08');
  const [guests, setGuests] = useState(initialGuests || '2');

  // Add-ons
  const [addons, setAddons] = useState<{
    cabPickup: boolean;
    thaliDinner: boolean;
    bonfireBasket: boolean;
    guidedTrek: boolean;
  }>({
    cabPickup: false,
    thaliDinner: true,
    bonfireBasket: false,
    guidedTrek: false
  });

  // Guest details form
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [arrivalTime, setArrivalTime] = useState('Afternoon (1:00 PM - 4:00 PM)');
  const [specialRequests, setSpecialRequests] = useState('');

  // Booking step: 1 = edit details, 2 = confirmed voucher
  const [step, setStep] = useState<1 | 2>(1);
  const [bookingId, setBookingId] = useState('');

  const selectedRoom = ROOMS.find((r) => r.id === roomId) || ROOMS[0];

  // Calculate nights
  const dIn = new Date(checkIn);
  const dOut = new Date(checkOut);
  const diffTime = dOut.getTime() - dIn.getTime();
  const nights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24))) || 3;
  const numGuests = parseInt(guests, 10) || 2;

  // Pricing calculations
  const roomTotal = selectedRoom.pricePerNight * nights;
  const cabCost = addons.cabPickup ? 2400 : 0;
  const thaliCost = addons.thaliDinner ? 450 * numGuests * nights : 0;
  const bonfireCost = addons.bonfireBasket ? 600 : 0;
  const trekCost = addons.guidedTrek ? 1200 : 0;

  const subtotal = roomTotal + cabCost + thaliCost + bonfireCost + trekCost;
  const directDiscount = Math.round(roomTotal * 0.1); // 10% direct booking benefit
  const grandTotal = subtotal - directDiscount;

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) {
      alert('Please provide your name and phone number so Uncle Bipin can confirm your stay.');
      return;
    }
    const generatedId = `PM-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(generatedId);
    setStep(2);
  };

  const whatsappMessage = encodeURIComponent(
    `Namaste Uncle Bipin! I have placed a reservation at Pinecrest Meadow.\n` +
    `Booking ID: ${bookingId}\n` +
    `Name: ${guestName}\n` +
    `Room: ${selectedRoom.name}\n` +
    `Dates: ${checkIn} to ${checkOut} (${nights} nights)\n` +
    `Guests: ${guests}\n` +
    `Estimated Total: ${formatPrice(grandTotal, currency)}\n` +
    `Looking forward to visiting Old Almora!`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm overflow-hidden">
      <div className="bg-[#FBF9F5] w-full max-w-2xl rounded-t-3xl sm:rounded-3xl border sm:border-[#E9E3D5] shadow-2xl overflow-hidden max-h-[92vh] sm:max-h-[88vh] flex flex-col animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200">
        {/* Sticky Modal Header */}
        <div className="bg-[#2D4B3E] px-5 sm:px-6 py-3.5 sm:py-4 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-amber-300 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-serif font-bold text-white">
                {step === 1 ? 'Direct Stay Reservation' : 'Booking Confirmed!'}
              </h3>
              <span className="text-[9px] sm:text-[10px] text-[#E9E3D5] tracking-widest uppercase font-semibold">
                Pinecrest Meadow &bull; Old Almora
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition cursor-pointer flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 1 ? (
          <form onSubmit={handleConfirmReservation} className="flex-1 flex flex-col overflow-hidden">
            <div className="p-4 sm:p-6 space-y-5 overflow-y-auto flex-1">
            {/* Step 1: Stay Details */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C27C58] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> 1. Dates &amp; Cottage
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#F4EFE6] p-3 rounded-2xl border border-[#E9E3D5]">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-[#2D4B3E] block mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-transparent text-[16px] sm:text-xs font-bold text-[#1D2A24] focus:outline-none py-1"
                    required
                  />
                </div>
                <div className="bg-[#F4EFE6] p-3 rounded-2xl border border-[#E9E3D5]">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-[#2D4B3E] block mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-transparent text-[16px] sm:text-xs font-bold text-[#1D2A24] focus:outline-none py-1"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#F4EFE6] p-3 rounded-2xl border border-[#E9E3D5]">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-[#2D4B3E] block mb-1">
                    Cottage Choice
                  </label>
                  <select
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="w-full bg-transparent text-[16px] sm:text-xs font-bold text-[#1D2A24] focus:outline-none cursor-pointer py-1"
                  >
                    {ROOMS.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} ({formatPrice(r.pricePerNight, currency)}/n)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="bg-[#F4EFE6] p-3 rounded-2xl border border-[#E9E3D5]">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-[#2D4B3E] block mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-transparent text-[16px] sm:text-xs font-bold text-[#1D2A24] focus:outline-none cursor-pointer py-1"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Entire Estate</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Mountain Add-ons */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C27C58] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> 2. Optional Mountain Experiences &amp; Meals
              </h4>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E9E3D5] hover:border-[#2D4B3E] cursor-pointer text-xs">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={addons.thaliDinner}
                      onChange={(e) => setAddons({ ...addons, thaliDinner: e.target.checked })}
                      className="accent-[#2D4B3E] w-4 h-4 cursor-pointer"
                    />
                    <div>
                      <span className="font-bold text-[#1D2A24]">
                        Auntie Kamla’s Kumaoni Dinner Thali Plan
                      </span>
                      <span className="text-[10px] text-gray-500 block">
                        Fresh organic black soybean curry, mandua roti &amp; pahari sweets daily
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-[#2D4B3E] shrink-0 text-right text-[11px] sm:text-xs">
                    +₹450 / guest / n
                  </span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E9E3D5] hover:border-[#2D4B3E] cursor-pointer text-xs">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={addons.cabPickup}
                      onChange={(e) => setAddons({ ...addons, cabPickup: e.target.checked })}
                      className="accent-[#2D4B3E] w-4 h-4 cursor-pointer"
                    />
                    <div>
                      <span className="font-bold text-[#1D2A24]">
                        Kathgodam Station Cab Pickup
                      </span>
                      <span className="text-[10px] text-gray-500 block">
                        Scenic 3.5 hr private cab straight to homestay
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-[#2D4B3E] shrink-0 text-right text-[11px] sm:text-xs">+₹2,400</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E9E3D5] hover:border-[#2D4B3E] cursor-pointer text-xs">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={addons.bonfireBasket}
                      onChange={(e) => setAddons({ ...addons, bonfireBasket: e.target.checked })}
                      className="accent-[#2D4B3E] w-4 h-4 cursor-pointer"
                    />
                    <div>
                      <span className="font-bold text-[#1D2A24]">
                        Veranda Bonfire &amp; Spiced Cider
                      </span>
                      <span className="text-[10px] text-gray-500 block">
                        Pine firewood &amp; warm spiced cider
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-[#2D4B3E] shrink-0 text-right text-[11px] sm:text-xs">+₹600</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E9E3D5] hover:border-[#2D4B3E] cursor-pointer text-xs">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={addons.guidedTrek}
                      onChange={(e) => setAddons({ ...addons, guidedTrek: e.target.checked })}
                      className="accent-[#2D4B3E] w-4 h-4 cursor-pointer"
                    />
                    <div>
                      <span className="font-bold text-[#1D2A24]">
                        Guided Binsar Wildlife Trek
                      </span>
                      <span className="text-[10px] text-gray-500 block">
                        Led by resident naturalist with packed picnic
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-[#2D4B3E] shrink-0 text-right text-[11px] sm:text-xs">+₹1,200</span>
                </label>
              </div>
            </div>

            {/* Step 3: Guest Contact Information */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C27C58] flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" /> 3. Guest Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-gray-600 block mb-1">
                    Primary Guest Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E3D5] bg-white text-[16px] sm:text-xs text-[#1D2A24] focus:outline-none focus:border-[#2D4B3E]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-600 block mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E3D5] bg-white text-[16px] sm:text-xs text-[#1D2A24] focus:outline-none focus:border-[#2D4B3E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-gray-600 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="rahul@example.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E3D5] bg-white text-[16px] sm:text-xs text-[#1D2A24] focus:outline-none focus:border-[#2D4B3E]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-600 block mb-1">
                    Expected Arrival Time
                  </label>
                  <select
                    value={arrivalTime}
                    onChange={(e) => setArrivalTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E3D5] bg-white text-[16px] sm:text-xs text-[#1D2A24] focus:outline-none cursor-pointer"
                  >
                    <option>Morning (09:00 AM - 12:00 PM)</option>
                    <option>Afternoon (01:00 PM - 04:00 PM)</option>
                    <option>Evening (05:00 PM - 08:00 PM)</option>
                    <option>Late Night (After 08:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-600 block mb-1">
                  Special Notes / Dietary Preferences (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Vegetarian only, traveling with pet, need room heater..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E3D5] bg-white text-[16px] sm:text-xs text-[#1D2A24] focus:outline-none focus:border-[#2D4B3E]"
                />
              </div>
            </div>

            {/* Bill Summary Breakdown */}
            <div className="bg-[#F4EFE6] p-4 rounded-2xl border border-[#E9E3D5] space-y-2 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>
                  {selectedRoom.name} ({nights}n &times;{' '}
                  {formatPrice(selectedRoom.pricePerNight, currency)})
                </span>
                <span className="font-semibold text-[#1D2A24]">
                  {formatPrice(roomTotal, currency)}
                </span>
              </div>

              {addons.thaliDinner && (
                <div className="flex justify-between text-gray-600">
                  <span>Pahari Dinner ({numGuests} guests &times; {nights}n)</span>
                  <span className="font-semibold text-[#1D2A24]">
                    {formatPrice(thaliCost, currency)}
                  </span>
                </div>
              )}

              {addons.cabPickup && (
                <div className="flex justify-between text-gray-600">
                  <span>Kathgodam Cab Pickup</span>
                  <span className="font-semibold text-[#1D2A24]">
                    {formatPrice(cabCost, currency)}
                  </span>
                </div>
              )}

              {addons.bonfireBasket && (
                <div className="flex justify-between text-gray-600">
                  <span>Bonfire Basket &amp; Cider</span>
                  <span className="font-semibold text-[#1D2A24]">
                    {formatPrice(bonfireCost, currency)}
                  </span>
                </div>
              )}

              {addons.guidedTrek && (
                <div className="flex justify-between text-gray-600">
                  <span>Binsar Guided Nature Trek</span>
                  <span className="font-semibold text-[#1D2A24]">
                    {formatPrice(trekCost, currency)}
                  </span>
                </div>
              )}

              <div className="flex justify-between text-[#2D4B3E] font-medium pt-1 border-t border-[#E9E3D5]">
                <span>Direct Booking Courtesy (10% Off)</span>
                <span>-{formatPrice(directDiscount, currency)}</span>
              </div>

              <div className="flex justify-between items-baseline pt-2 border-t border-[#E9E3D5] text-sm">
                <div>
                  <span className="font-bold text-[#1D2A24]">Total Payable</span>
                  <span className="text-[10px] text-gray-500 block">
                    No advance needed &bull; Pay at check-in
                  </span>
                </div>
                <span className="text-xl font-bold font-serif text-[#2D4B3E]">
                  {formatPrice(grandTotal, currency)}
                </span>
              </div>
            </div>
            </div>

            {/* Sticky Action Footer */}
            <div className="p-4 sm:p-5 bg-white border-t border-[#E9E3D5] pb-safe shrink-0">
              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 rounded-2xl bg-[#2D4B3E] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#436B59] transition flex items-center justify-center gap-2 custom-shadow cursor-pointer active:scale-98 min-h-[46px]"
              >
                <span>Confirm Direct Reservation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] sm:text-[11px] text-center text-gray-500 mt-1.5">
                Uncle Bipin or Auntie Kamla will contact you on WhatsApp to confirm room prep.
              </p>
            </div>
          </form>
        ) : (
          /* Step 2: Confirmed Voucher Card */
          <div className="p-5 sm:p-6 space-y-5 text-center overflow-y-auto flex-1 pb-safe">
            <div className="w-16 h-16 rounded-full bg-[#2D4B3E]/10 text-[#2D4B3E] flex items-center justify-center mx-auto">
              <CheckCircle className="w-9 h-9 text-[#2D4B3E]" />
            </div>

            <div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C27C58] uppercase tracking-widest bg-[#F4EFE6] px-3 py-1 rounded-full border border-[#E9E3D5] mb-2">
                Booking ID: {bookingId}
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#1D2A24]">
                We are eagerly expecting you, {guestName}!
              </h3>
              <p className="text-xs text-gray-600 max-w-md mx-auto mt-2 leading-relaxed">
                Your sanctuary reservation has been registered directly at Pinecrest Meadow. A confirmation message has been queued for your WhatsApp (+{guestPhone}).
              </p>
            </div>

            {/* Voucher Card */}
            <div className="bg-white rounded-2xl p-5 border-2 border-dashed border-[#2D4B3E]/30 text-left space-y-3 custom-shadow">
              <div className="flex justify-between items-center pb-3 border-b border-[#E9E3D5]">
                <div>
                  <span className="text-xs font-serif font-bold text-[#1D2A24] block">
                    {selectedRoom.name}
                  </span>
                  <span className="text-[10px] text-[#C27C58] font-bold">
                    Pinecrest Meadow &bull; Old Almora
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#2D4B3E] block">
                    {formatPrice(grandTotal, currency)}
                  </span>
                  <span className="text-[10px] text-gray-500">Pay on Check-in</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[10px] text-gray-500 block">Check-in</span>
                  <span className="font-semibold text-[#1D2A24]">{checkIn}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block">Check-out</span>
                  <span className="font-semibold text-[#1D2A24]">{checkOut}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block">Guests</span>
                  <span className="font-semibold text-[#1D2A24]">{guests} Guest(s)</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block">Host Phone</span>
                  <span className="font-semibold text-[#2D4B3E]">+91 98765 43210</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Chat with Hosts on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => window.print()}
                className="w-full sm:w-auto px-5 py-3 rounded-full border border-[#2D4B3E] text-[#2D4B3E] font-bold text-xs hover:bg-[#F4EFE6] transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Voucher</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#1D2A24] text-white font-bold text-xs hover:bg-black transition cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
