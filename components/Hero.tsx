
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <div className="inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-lime-400 text-xs font-bold uppercase tracking-widest mb-6">
            Digital Transformation for Small Business
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
            Turn Your Website Into a <span className="text-lime-400">Customer-Generating</span> Machine
          </h1>
          <p className="text-xl text-neutral-400 mb-10 max-w-xl leading-relaxed">
            Smart digital marketing systems that help small businesses attract more customers—without hiring an entire tech team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-lime-400 text-black px-8 py-4 rounded-lg font-extrabold text-lg flex items-center justify-center gap-2 hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)]">
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 border-2 border-neutral-800 hover:bg-neutral-900 transition-all">
              <Play className="w-5 h-5 text-orange-400" />
              See How It Works
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://picsum.photos/seed/${i + 10}/100/100`} className="w-10 h-10 rounded-full border-2 border-black" alt="Customer" />
              ))}
            </div>
            <p className="text-sm text-neutral-500 font-medium">
              Trusted by <span className="text-white font-bold">500+</span> small businesses nationwide
            </p>
          </div>
        </div>

        <div className="reveal relative">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 aspect-video lg:aspect-square flex items-center justify-center">
            <img 
              src="https://picsum.photos/seed/marketing/800/800" 
              className="absolute inset-0 w-full h-full object-cover opacity-60" 
              alt="Technology" 
            />
            <div className="relative z-10 p-8 text-center bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 m-6">
              <h3 className="text-2xl font-bold mb-2">Automated Results</h3>
              <p className="text-neutral-300 text-sm">We build the systems, you handle the growth.</p>
              <div className="mt-4 flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse delay-75"></div>
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
          {/* Floating UI Elements */}
          <div className="absolute -top-6 -right-6 bg-white text-black p-4 rounded-xl font-bold shadow-xl hidden md:block">
            <p className="text-xs uppercase text-neutral-500">Revenue Lift</p>
            <p className="text-2xl font-black">+42%</p>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-4 rounded-xl font-bold shadow-xl hidden md:block">
            <p className="text-xs uppercase opacity-80">Leads Generated</p>
            <p className="text-2xl font-black">1.2k</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
