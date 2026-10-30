import React, { useState } from 'react';
import { Home, Heart, ArrowUp, Send, CheckCircle, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1D2A24] text-[#FBF9F5] pt-16 pb-12 border-t border-white/10 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#C27C58]">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xl font-serif font-bold text-white tracking-tight">
                  Pinecrest Meadow
                </span>
                <span className="block text-[10px] tracking-[0.22em] uppercase text-[#C27C58] font-bold">
                  Himalayan Homestay &bull; Old Almora
                </span>
              </div>
            </div>
            <p className="text-xs text-[#E9E3D5]/80 leading-relaxed max-w-sm">
              An authentic family-run Himalayan homestay nestled amidst ancient deodar forests, apple orchards, and front-row sunrises over Nanda Devi and Trishul.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#C27C58] font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-[#C27C58]" />
              <span>Registered Uttarakhand Tourism Homestay #UK-ALM-1932</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C27C58] font-bold">
              Explore Sanctuary
            </h4>
            <ul className="space-y-2 text-xs text-[#E9E3D5]/80">
              <li>
                <a href="#story" className="hover:text-white transition">Our 1932 Story</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition">Cottages &amp; Suites</a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-white transition">Guided Mountain Treks</a>
              </li>
              <li>
                <a href="#cuisine" className="hover:text-white transition">Organic Pahari Cuisine</a>
              </li>
              <li>
                <a href="#peaks" className="hover:text-white transition">Himalayan Peak Map</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition">Getting Here &bull; Kathgodam Cab</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition">Guest FAQs &bull; Pet Policy</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Mountain Dispatches Newsletter */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C27C58] font-bold">
              Mountain Dispatches
            </h4>
            <p className="text-xs text-[#E9E3D5]/80 leading-relaxed">
              Receive seasonal reflections from Almora: spring apple blossom dates, autumn snow peak forecasts, and quiet-season retreat offers.
            </p>

            {subscribed ? (
              <div className="p-3 bg-white/10 rounded-xl border border-white/20 text-xs text-amber-200 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C27C58]" />
                <span>You’re on Uncle Bipin’s quiet mountain dispatch list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 px-3.5 py-2.5 rounded-xl text-xs text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-[#C27C58] flex-1"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#2D4B3E] hover:bg-[#436B59] text-white text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2 text-[10px] text-gray-400">
              Zero spam. We write only 3 to 4 times a year when the seasons change.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E9E3D5]/60">
          <p className="flex items-center gap-1 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Pinecrest Meadow Homestay &bull; Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#C27C58] inline" />
            <span>in Kumaon, Uttarakhand</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition cursor-pointer text-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
