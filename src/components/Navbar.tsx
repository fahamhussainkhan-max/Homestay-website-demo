import React, { useState, useEffect } from 'react';
import { Home, Menu, X, Phone, Calendar, Globe, Sparkles } from 'lucide-react';
import { Currency } from '../utils/currency';

interface NavbarProps {
  onOpenBooking: () => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  currency,
  onCurrencyChange
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Story', href: '#story' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Pahari Cuisine', href: '#cuisine' },
    { label: 'Peaks View', href: '#peaks' },
    { label: 'Location', href: '#location' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF9F5]/95 backdrop-blur-md shadow-sm border-b border-[#E9E3D5]'
          : 'bg-[#FBF9F5]/90 backdrop-blur-sm border-b border-[#E9E3D5]/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2D4B3E]/10 text-[#2D4B3E] flex items-center justify-center group-hover:bg-[#2D4B3E] group-hover:text-white transition duration-300 shadow-xs shrink-0">
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <span className="block text-lg sm:text-xl font-serif font-bold tracking-tight text-[#1D2A24] leading-tight">
              Pinecrest
            </span>
            <span className="block text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#436B59] font-bold">
              Homestay & Retreat
            </span>
          </div>
        </a>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wide text-[#1D2A24]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#2D4B3E] transition py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C27C58] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Currency Switcher (Desktop) */}
          <div className="hidden sm:flex items-center gap-1.5 bg-[#F4EFE6] px-2.5 py-1.5 rounded-full border border-[#E9E3D5] text-xs font-medium text-[#1D2A24]">
            <Globe className="w-3.5 h-3.5 text-[#C27C58]" />
            <select
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value as Currency)}
              className="bg-transparent border-none focus:outline-none cursor-pointer text-xs font-semibold text-[#1D2A24]"
              aria-label="Select currency"
            >
              <option value="INR">₹ INR</option>
              <option value="USD">$ USD</option>
              <option value="EUR">€ EUR</option>
            </select>
          </div>

          {/* WhatsApp Direct Contact Badge (Desktop) */}
          <a
            href="https://wa.me/919876543210?text=Hello%20Uncle%20Bipin,%20I%20would%20like%20to%20inquire%20about%20staying%20at%20Pinecrest%20Meadow"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-1.5 text-xs text-[#2D4B3E] hover:text-[#436B59] font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-[#C27C58]" />
            <span>+91 98765 43210</span>
          </a>

          {/* Mobile Direct Phone Tap */}
          <a
            href="tel:+919876543210"
            className="lg:hidden p-2 rounded-full bg-[#F4EFE6] text-[#2D4B3E] border border-[#E9E3D5] flex items-center justify-center hover:bg-[#E9E3D5] transition"
            aria-label="Call Host"
          >
            <Phone className="w-4 h-4 text-[#C27C58]" />
          </a>

          {/* Reserve Stay CTA */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold tracking-wide bg-[#2D4B3E] text-white hover:bg-[#436B59] transition shadow-xs cursor-pointer active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Reserve Stay</span>
            <span className="xs:hidden">Book</span>
          </button>

          {/* Hamburger Menu Toggle (Touch target 44px+) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full hover:bg-[#E9E3D5]/60 text-[#1D2A24] transition flex items-center justify-center cursor-pointer active:bg-[#E9E3D5]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[53px] sm:top-[61px] bg-black/40 backdrop-blur-xs z-30 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-40 lg:hidden px-5 pt-3 pb-6 border-t border-[#E9E3D5] bg-[#FBF9F5] shadow-xl flex flex-col gap-3 text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-60px)] overflow-y-auto pb-safe">
            {/* Currency switcher inside mobile menu */}
            <div className="flex items-center justify-between py-2 border-b border-[#E9E3D5]">
              <span className="text-xs font-semibold text-[#436B59] uppercase tracking-wider flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#C27C58]" /> View Currency
              </span>
              <div className="flex gap-1.5">
                {(['INR', 'USD', 'EUR'] as Currency[]).map((cur) => (
                  <button
                    key={cur}
                    onClick={() => onCurrencyChange(cur)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      currency === cur
                        ? 'bg-[#2D4B3E] text-white shadow-xs'
                        : 'bg-[#F4EFE6] text-[#1D2A24] hover:bg-[#E9E3D5]'
                    }`}
                  >
                    {cur}
                  </button>
                ))}
              </div>
            </div>

            {/* Links with comfortable 44px touch targets */}
            <div className="grid grid-cols-2 gap-1 py-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-[#1D2A24] hover:text-[#2D4B3E] hover:bg-[#F4EFE6] font-medium transition text-xs"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5 border-t border-[#E9E3D5]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-2xl bg-[#2D4B3E] text-white font-bold text-center text-xs uppercase tracking-wider shadow-sm active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Stay &bull; Best Rates Direct</span>
              </button>
              <a
                href="https://wa.me/919876543210?text=Hello%20Uncle%20Bipin,%20I%20would%20like%20to%20inquire%20about%20staying%20at%20Pinecrest%20Meadow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl bg-[#F4EFE6] text-[#2D4B3E] font-semibold text-center text-xs flex items-center justify-center gap-2 border border-[#E9E3D5] active:bg-[#E9E3D5] transition"
              >
                <Phone className="w-4 h-4 text-[#C27C58]" />
                <span>WhatsApp Uncle Bipin (+91 98765 43210)</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
