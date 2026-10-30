import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/homestayData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="text-center mb-8">
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#C27C58] uppercase block mb-1">
          Everything You Need To Know
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#1D2A24] font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mt-2 leading-relaxed">
          Planning your mountain journey? Here are answers to common questions about roads, weather, and stays.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E9E3D5] overflow-hidden custom-shadow transition"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FBF9F5]"
              >
                <span className="text-xs sm:text-sm font-bold text-[#1D2A24] flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#C27C58] shrink-0" />
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#2D4B3E]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-[#E9E3D5]/50 animate-in fade-in duration-150">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
