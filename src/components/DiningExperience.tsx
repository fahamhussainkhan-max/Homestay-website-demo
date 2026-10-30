import React, { useState } from 'react';
import { Utensils, Sparkles, Leaf, Coffee, Award, Clock } from 'lucide-react';
import { CUISINE, Dish } from '../data/homestayData';

export const DiningExperience: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Thali' | 'Breakfast' | 'Snacks & Drinks' | 'Dessert'>('All');

  const categories = ['All', 'Thali', 'Breakfast', 'Snacks & Drinks', 'Dessert'] as const;

  const filteredDishes = CUISINE.filter(
    (dish) => selectedCategory === 'All' || dish.category === selectedCategory
  );

  return (
    <section id="cuisine" className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="text-center mb-8">
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#C27C58] uppercase block mb-1">
          Himalayan Gastronomy
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#1D2A24] font-bold">
          Farm-to-Table Pahari Cuisine
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto mt-2 leading-relaxed">
          Cooked over slow oak embers by Auntie Kamla using organic black soybeans, Himalayan herbs, hand-churned butter, and fragrant finger millet.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#2D4B3E] text-white shadow-xs'
                  : 'bg-[#F4EFE6] text-[#1D2A24]/80 hover:bg-[#E9E3D5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Dishes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredDishes.map((dish, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl overflow-hidden border border-[#E9E3D5] custom-shadow hover:border-[#2D4B3E]/40 transition group"
          >
            <div className="relative h-48 sm:h-52 overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
              />
              <div className="absolute top-3 left-3 bg-[#2D4B3E] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {dish.category}
              </div>
              {dish.isOrganic && (
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#2D4B3E] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                  <Leaf className="w-3 h-3 text-[#2D4B3E]" />
                  <span>100% Organic Farm</span>
                </div>
              )}
            </div>

            <div className="p-5">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#1D2A24]">
                  {dish.name}
                </h3>
              </div>
              <span className="text-[11px] text-[#C27C58] font-bold uppercase tracking-wider block mb-2">
                &bull; {dish.localName}
              </span>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                {dish.description}
              </p>

              {/* Ingredients Tags */}
              <div className="pt-3 border-t border-[#E9E3D5] flex flex-wrap gap-1.5">
                {dish.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-[#F4EFE6] text-[#2D4B3E] font-medium px-2 py-0.5 rounded-md"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Homestay Dining Note */}
      <div className="mt-8 bg-[#F4EFE6] rounded-3xl p-5 sm:p-6 border border-[#E9E3D5] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-[#2D4B3E]/10 text-[#2D4B3E] flex items-center justify-center shrink-0">
            <Utensils className="w-5 h-5 text-[#C27C58]" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[#1D2A24]">
              Custom Meals &amp; Dietary Preferences Welcomed
            </h4>
            <p className="text-xs text-gray-600 mt-0.5">
              Pure vegetarian, Jain options, vegan substitutions, and low-spice dishes for children prepared with joy upon request.
            </p>
          </div>
        </div>
        <div className="shrink-0 text-xs font-bold text-[#2D4B3E] bg-white px-4 py-2 rounded-xl border border-[#E9E3D5]">
          ₹450 / Thali &bull; Breakfast Free
        </div>
      </div>
    </section>
  );
};
