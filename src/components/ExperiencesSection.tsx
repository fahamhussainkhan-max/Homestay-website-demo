import React, { useState } from 'react';
import {
  Compass,
  Clock,
  Sparkles,
  CheckCircle,
  Calendar,
  Tag,
  ArrowRight
} from 'lucide-react';
import { EXPERIENCES, Experience } from '../data/homestayData';

interface ExperiencesProps {
  onInquireExperience: (exp: Experience) => void;
}

export const ExperiencesSection: React.FC<ExperiencesProps> = ({ onInquireExperience }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Nature', 'Culture', 'Wellness', 'Culinary'];

  const filteredExperiences = EXPERIENCES.filter(
    (exp) => filter === 'All' || exp.category === filter
  );

  return (
    <section id="experiences" className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="text-center mb-8">
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#C27C58] uppercase block mb-1">
          Himalayan Immersion
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#1D2A24] font-bold">
          Curated Homestay Experiences
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto mt-2 leading-relaxed">
          From silent sunrise pranayama overlooking 7,000m peaks to stargazing through our 8-inch telescope and guided walks through virgin oak forests.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                filter === cat
                  ? 'bg-[#2D4B3E] text-white shadow-xs'
                  : 'bg-[#F4EFE6] text-[#1D2A24]/80 hover:bg-[#E9E3D5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExperiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-3xl overflow-hidden border border-[#E9E3D5] custom-shadow flex flex-col hover:border-[#2D4B3E]/40 transition group"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
              />
              <div className="absolute top-3 left-3 bg-[#2D4B3E] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {exp.category}
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#C27C58] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                {exp.price}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-serif font-bold text-[#1D2A24] mb-2 leading-snug">
                  {exp.title}
                </h3>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-4">
                  {exp.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#1D2A24]/80">
                      <CheckCircle className="w-3 h-3 text-[#2D4B3E] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#E9E3D5] flex items-center justify-between">
                <span className="text-[11px] text-gray-500 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#C27C58]" />
                  <span>{exp.duration}</span>
                </span>
                <button
                  onClick={() => onInquireExperience(exp)}
                  className="text-xs font-bold text-[#2D4B3E] hover:text-[#436B59] flex items-center gap-1 cursor-pointer"
                >
                  <span>Book Activity</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
