import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/homestayData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="text-center mb-8">
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#C27C58] uppercase block mb-1">
          Guest Chronicles
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#1D2A24] font-bold">
          Loved by Mountain Seekers
        </h2>
        <div className="flex items-center justify-center gap-2 mt-3 text-xs font-semibold text-[#1D2A24]/90">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <span>4.96 / 5 based on 450+ verified guest stays</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-3xl p-6 border border-[#E9E3D5] custom-shadow flex flex-col justify-between relative"
          >
            <div>
              <Quote className="w-8 h-8 text-[#2D4B3E]/15 mb-3" />
              <div className="flex text-amber-500 mb-3">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-xs text-gray-700 leading-relaxed italic mb-6">
                "{rev.comment}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#E9E3D5] flex items-center gap-3">
              <img
                src={rev.avatar}
                alt={rev.author}
                className="w-10 h-10 rounded-full object-cover border border-[#E9E3D5]"
              />
              <div>
                <h4 className="text-xs font-bold text-[#1D2A24] flex items-center gap-1">
                  <span>{rev.author}</span>
                  <CheckCircle2 className="w-3 h-3 text-[#2D4B3E]" />
                </h4>
                <span className="text-[10px] text-gray-500 block">{rev.location}</span>
                <span className="text-[10px] text-[#C27C58] font-semibold block">{rev.stayType}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
