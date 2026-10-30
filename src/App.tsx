/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingWidget } from './components/BookingWidget';
import { FeatureHighlights } from './components/FeatureHighlights';
import { Accommodations } from './components/Accommodations';
import { PeakPanoramaGuide } from './components/PeakPanoramaGuide';
import { AboutStory } from './components/AboutStory';
import { DiningExperience } from './components/DiningExperience';
import { ExperiencesSection } from './components/ExperiencesSection';
import { AttractionsMap } from './components/AttractionsMap';
import { SeasonsGuide } from './components/SeasonsGuide';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { RoomDetailsModal } from './components/RoomDetailsModal';
import { Room, ROOMS, Experience } from './data/homestayData';
import { Currency } from './utils/currency';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('INR');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeRoomForDetails, setActiveRoomForDetails] = useState<Room | null>(null);

  // Selected booking search parameters
  const [bookingParams, setBookingParams] = useState({
    checkIn: '2026-11-05',
    checkOut: '2026-11-08',
    guests: '2',
    roomId: ROOMS[0].id,
  });

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleBookFromWidget = (details: {
    checkIn: string;
    checkOut: string;
    guests: string;
    roomId: string;
    nights: number;
  }) => {
    setBookingParams({
      checkIn: details.checkIn,
      checkOut: details.checkOut,
      guests: details.guests,
      roomId: details.roomId,
    });
    setIsBookingOpen(true);
  };

  const handleBookSpecificRoom = (room: Room) => {
    setBookingParams((prev) => ({
      ...prev,
      roomId: room.id,
    }));
    setIsBookingOpen(true);
  };

  const handleInquireExperience = (exp: Experience) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreRooms = () => {
    const roomsElem = document.getElementById('rooms');
    if (roomsElem) {
      roomsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1D2A24] font-sans antialiased selection:bg-[#2D4B3E] selection:text-white flex flex-col">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        currency={currency}
        onCurrencyChange={setCurrency}
      />

      {/* Main Content Sections */}
      <main className="pt-16 sm:pt-20 flex-1">
        {/* 1. Hero */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onExploreRooms={handleExploreRooms}
        />

        {/* 2. Interactive Booking Widget Card */}
        <BookingWidget
          onBookNow={handleBookFromWidget}
          currency={currency}
        />

        {/* 3. Feature Highlight Tiles */}
        <FeatureHighlights />

        {/* 4. Accommodations (Cottages & Suites) */}
        <Accommodations
          onSelectRoomDetails={setActiveRoomForDetails}
          onBookRoom={handleBookSpecificRoom}
          currency={currency}
        />

        {/* 5. Interactive Peak Panorama Guide */}
        <PeakPanoramaGuide />

        {/* 6. Ancestral Story & Eco Values */}
        <AboutStory />

        {/* 7. Farm-to-Table Pahari Dining */}
        <DiningExperience />

        {/* 8. Curated Mountain Experiences */}
        <ExperiencesSection
          onInquireExperience={handleInquireExperience}
        />

        {/* 9. Nearby Attractions & Travel Route Guide */}
        <AttractionsMap />

        {/* 10. Seasonal Weather & Packing Planner */}
        <SeasonsGuide />

        {/* 11. Guest Chronicles / Reviews */}
        <Testimonials />

        {/* 12. Frequently Asked Questions */}
        <FaqSection />

        {/* 13. Direct Host Contact & Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Connect Button */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-30">
        <a
          href="https://wa.me/919876543210?text=Hello%20Uncle%20Bipin,%20I%20would%20like%20to%20inquire%20about%20staying%20at%20Pinecrest%20Meadow"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs shadow-xl hover:bg-[#20bd5a] hover:scale-105 transition duration-200"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">Chat with Hosts</span>
        </a>
      </aside>

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialRoomId={bookingParams.roomId}
        initialCheckIn={bookingParams.checkIn}
        initialCheckOut={bookingParams.checkOut}
        initialGuests={bookingParams.guests}
        currency={currency}
      />

      <RoomDetailsModal
        room={activeRoomForDetails}
        onClose={() => setActiveRoomForDetails(null)}
        onBookRoom={handleBookSpecificRoom}
        currency={currency}
      />
    </div>
  );
}
