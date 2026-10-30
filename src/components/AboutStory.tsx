import React from 'react';
import { Heart, Sun, Droplets, Leaf, ShieldAlert, Sparkles } from 'lucide-react';

export const AboutStory: React.FC = () => {
  return (
    <section id="story" className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Image Mosaic */}
        <div className="md:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-[#E9E3D5] custom-shadow aspect-4/5">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop"
              alt="Pinecrest Homestead in Old Almora"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase tracking-widest text-[#E9E3D5] font-bold block">
                Ancestral Estate &bull; Est. 1932
              </span>
              <p className="text-sm font-serif font-bold">The Joshi Homestead in Old Almora</p>
            </div>
          </div>

          {/* Floating host card */}
          <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white p-3.5 rounded-2xl shadow-lg border border-[#E9E3D5] max-w-[210px] hidden sm:block">
            <div className="flex items-center gap-2.5">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                alt="Uncle Bipin & Auntie Kamla"
                className="w-10 h-10 rounded-full object-cover border border-[#C27C58]"
              />
              <div>
                <span className="text-xs font-bold text-[#1D2A24] block">Bipin &amp; Kamla</span>
                <span className="text-[10px] text-gray-500 block">Your Mountain Hosts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Story Copy & Eco Values */}
        <div className="md:col-span-7">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#C27C58] uppercase block mb-1">
            Our Mountain Roots
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1D2A24] font-bold mb-4 leading-tight">
            Restoring an ancestral sanctuary with love and cedar.
          </h2>
          <p className="text-xs sm:text-sm text-[#1D2A24]/80 leading-relaxed mb-4">
            Pinecrest Meadow began in 1932 when our great-grandfather, a botanist and teacher, built a quiet stone retreat on this terraced hillside facing the Nanda Devi sanctuary.
          </p>
          <p className="text-xs sm:text-sm text-[#1D2A24]/80 leading-relaxed mb-6">
            Today, our family preserves this quiet haven without the sterile anonymity of large commercial hotels. When you wake up here, Uncle Bipin has already harvested fresh peppermint for your tea, Auntie Kamla is baking wood-fired flatbreads in the kitchen, and Rocky, our gentle golden retriever, is eager to guide you through the orchard trail.
          </p>

          {/* Eco Principles Badges */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-[#F4EFE6] p-3 rounded-2xl border border-[#E9E3D5] flex items-center gap-2.5">
              <Sun className="w-4 h-4 text-[#C27C58] shrink-0" />
              <div>
                <span className="text-xs font-bold text-[#1D2A24] block">100% Solar Hot Water</span>
                <span className="text-[10px] text-gray-500">Heated by high-altitude sun</span>
              </div>
            </div>

            <div className="bg-[#F4EFE6] p-3 rounded-2xl border border-[#E9E3D5] flex items-center gap-2.5">
              <Leaf className="w-4 h-4 text-[#2D4B3E] shrink-0" />
              <div>
                <span className="text-xs font-bold text-[#1D2A24] block">Zero Single-Use Plastic</span>
                <span className="text-[10px] text-gray-500">Pure copper &amp; glass carafes</span>
              </div>
            </div>

            <div className="bg-[#F4EFE6] p-3 rounded-2xl border border-[#E9E3D5] flex items-center gap-2.5">
              <Droplets className="w-4 h-4 text-[#2D4B3E] shrink-0" />
              <div>
                <span className="text-xs font-bold text-[#1D2A24] block">Rainwater Harvesting</span>
                <span className="text-[10px] text-gray-500">Terraced orchard hydration</span>
              </div>
            </div>

            <div className="bg-[#F4EFE6] p-3 rounded-2xl border border-[#E9E3D5] flex items-center gap-2.5">
              <Heart className="w-4 h-4 text-[#C27C58] shrink-0" />
              <div>
                <span className="text-xs font-bold text-[#1D2A24] block">100% Local Pahari Team</span>
                <span className="text-[10px] text-gray-500">Empowering village youth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
