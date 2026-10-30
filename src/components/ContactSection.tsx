import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Heart,
  Sparkles
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="bg-white rounded-3xl border border-[#E9E3D5] custom-shadow overflow-hidden grid grid-cols-1 md:grid-cols-12">
        {/* Left Side: Host Contact Info */}
        <div className="md:col-span-5 bg-[#2D4B3E] text-white p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#C27C58] uppercase block mb-1">
              Direct Host Connect
            </span>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              Speak with the Joshi Family
            </h2>
            <p className="text-xs text-[#E9E3D5]/80 leading-relaxed mb-6">
              Have questions about taxi pickups, mountain road status, pet accommodation, or special anniversary arrangements? We are happy to talk.
            </p>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-amber-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#E9E3D5] block">Direct Calls &amp; WhatsApp</span>
                  <a href="tel:+919876543210" className="font-bold hover:text-amber-200 transition">
                    +91 98765 43210 (Uncle Bipin)
                  </a>
                  <span className="text-[10px] text-gray-300 block">Available 07:00 AM – 09:30 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-amber-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#E9E3D5] block">Email Inquiries</span>
                  <a href="mailto:stay@pinecrestmeadow.in" className="font-bold hover:text-amber-200 transition">
                    stay@pinecrestmeadow.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-amber-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#E9E3D5] block">Sanctuary Address</span>
                  <p className="text-[#E9E3D5] leading-snug">
                    Pinecrest Meadow, Kasar Ridge Spur, Old Almora Hills, Almora, Uttarakhand 263601
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10">
            <a
              href="https://wa.me/919876543210?text=Hello%20Uncle%20Bipin,%20I%20have%20a%20question%20about%20visiting%20Pinecrest%20Meadow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs hover:bg-[#20bd5a] transition w-full justify-center shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <div className="md:col-span-7 p-6 sm:p-8 bg-[#FBF9F5]">
          <h3 className="text-xl font-serif font-bold text-[#1D2A24] mb-1">
            Send an Inquiry
          </h3>
          <p className="text-xs text-gray-500 mb-6">
            Leave your dates and details below, and our family will get back to you within a few hours.
          </p>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-[#F4EFE6] border border-[#E9E3D5] text-center space-y-3 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-[#2D4B3E]/10 text-[#2D4B3E] flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 text-[#2D4B3E]" />
              </div>
              <h4 className="text-base font-serif font-bold text-[#1D2A24]">
                Thank you, {name}!
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed max-w-sm mx-auto">
                Uncle Bipin has received your note and will reach out to you directly at {contact}.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setMessage('');
                }}
                className="text-xs font-bold text-[#2D4B3E] underline cursor-pointer"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] font-bold text-[#1D2A24] block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sundaram"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E3D5] bg-white text-xs text-[#1D2A24] focus:outline-none focus:border-[#2D4B3E]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#1D2A24] block mb-1">
                  Phone / WhatsApp or Email *
                </label>
                <input
                  type="text"
                  required
                  placeholder="+91 98765 43210 or priya@example.com"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E3D5] bg-white text-xs text-[#1D2A24] focus:outline-none focus:border-[#2D4B3E]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#1D2A24] block mb-1">
                  Travel Dates or Questions *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us when you are thinking of visiting, number of guests, or if you need help planning your itinerary..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9E3D5] bg-white text-xs text-[#1D2A24] focus:outline-none focus:border-[#2D4B3E]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#2D4B3E] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#436B59] transition flex items-center justify-center gap-2 custom-shadow cursor-pointer active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Note to Hosts</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
