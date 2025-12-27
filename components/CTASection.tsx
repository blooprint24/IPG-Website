
import React from 'react';
import { Calendar, FileText } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-lime-400/5 pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center reveal bg-black border-2 border-lime-400/30 p-12 lg:p-20 rounded-[40px] shadow-[0_0_50px_rgba(163,230,53,0.05)]">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
            Ready to Grow? Let’s Build Your <span className="text-lime-400">Smart Marketing System.</span>
          </h2>
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
            Stop losing leads to outdated tech. Start capturing, engaging, and converting your traffic automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-lime-400 text-black px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-lime-300 transition-all hover:scale-105 active:scale-95 shadow-xl">
              <Calendar className="w-6 h-6" />
              Book a Strategy Call
            </button>
            <button className="bg-white text-black px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-xl">
              <FileText className="w-6 h-6" />
              Get a Quote
            </button>
          </div>
          <p className="mt-10 text-neutral-500 font-bold uppercase tracking-widest text-sm">
            Free Consultation • No Commitment • 100% Transparency
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
