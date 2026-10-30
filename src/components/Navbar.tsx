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
          : 'bg-[#FBF9F5]/85 backdrop-blur-sm border-b border-[#E9E3D5]/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#2D4B3E]/10 text-[#2D4B3E] flex items-center justify-center group-hover:bg-[#2D4B3E] group-hover:text-white transition duration-300 shadow-xs">
            <Home className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-xl font-serif font-bold tracking-tight text-[#1D2A24]">
              Pinecrest
            </span>
            <span className="block text-[10px] tracking-[0.22em] uppercase text-[#436B59] font-bold">
              Homestay & Retreat
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="flex items-center gap-6">
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

          {/* Currency Switcher */}
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

          {/* WhatsApp Direct Contact Badge */}
          <a
            href="https://wa.me/919876543210?text=Hello%20Uncle%20Bipin,%20I%20would%20like%20to%20inquire%20about%20staying%20at%20Pinecrest%20Meadow"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-1.5 text-xs text-[#2D4B3E] hover:text-[#436B59] font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-[#C27C58]" />
            <span>+91 98765 43210</span>
          </a>

          {/* Reserve Stay CTA */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold tracking-wide bg-[#2D4B3E] text-white hover:bg-[#436B59] transition shadow-xs cursor-pointer active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve Stay</span>
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-[#E9E3D5]/60 text-[#1D2A24] transition cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pt-3 pb-6 border-t border-[#E9E3D5] bg-[#FBF9F5]/98 backdrop-blur-lg flex flex-col gap-3 text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#E9E3D5]">
            <span className="text-xs font-semibold text-[#436B59] uppercase tracking-wider">Currency</span>
            <div className="flex gap-2">
              {(['INR', 'USD', 'EUR'] as Currency[]).map((cur) => (
                <button
                  key={cur}
                  onClick={() => onCurrencyChange(cur)}
                  className={`px-2.5 py-1 rounded text-xs font-bold ${
                    currency === cur
                      ? 'bg-[#2D4B3E] text-white'
                      : 'bg-[#F4EFE6] text-[#1D2A24]'
                  }`}
                >
                  {cur}
                </button>
              ))}
            </div>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-[#1D2A24] hover:text-[#2D4B3E] font-medium border-b border-[#E9E3D5]/40"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-2xl bg-[#2D4B3E] text-white font-semibold text-center text-sm shadow-sm"
            >
              Book Direct &bull; Best Rates Guaranteed
            </button>
            <a
              href="https://wa.me/919876543210?text=Hello%20Uncle%20Bipin,%20I%20would%20like%20to%20inquire%20about%20staying%20at%20Pinecrest%20Meadow"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-2xl bg-[#F4EFE6] text-[#2D4B3E] font-medium text-center text-xs flex items-center justify-center gap-1.5 border border-[#E9E3D5]"
            >
              <Phone className="w-3.5 h-3.5 text-[#C27C58]" />
              WhatsApp Hosts (+91 98765 43210)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
