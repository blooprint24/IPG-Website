
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 reveal">
            <h2 className="text-4xl font-bold mb-6">Big Brands Use These Tools. <span className="text-lime-400">Now You Can Too.</span></h2>
            <p className="text-xl text-neutral-300 mb-6 font-medium">
              Ideal Performance Group (IPG) was founded with a single mission: to level the playing field for small businesses.
            </p>
            <div className="space-y-6 text-neutral-400 leading-relaxed">
              <p>
                For too long, advanced automation, smart conversation technology, and conversion-ready websites were reserved for companies with enterprise budgets and massive tech teams.
              </p>
              <p>
                At IPG, we package that same "big brand" power into affordable, result-grounded systems designed for the local service business and the independent entrepreneur.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-neutral-800 pt-10">
              <div>
                <p className="text-lime-400 font-bold text-xl mb-1 italic">"Technology that empowers, not complicates."</p>
                <p className="text-sm text-neutral-500">— Our Core Philosophy</p>
              </div>
              <div className="flex flex-col justify-end">
                <img src="https://picsum.photos/seed/sig/150/50" alt="Signature" className="opacity-50 grayscale invert w-32" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 reveal">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/team1/400/500" className="rounded-2xl border border-neutral-800" alt="Office" />
                <div className="bg-orange-500 p-6 rounded-2xl">
                  <p className="text-3xl font-black text-white">100%</p>
                  <p className="text-xs uppercase text-white/80 font-bold">Focus on ROI</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-lime-400 p-6 rounded-2xl">
                  <p className="text-3xl font-black text-black">24/7</p>
                  <p className="text-xs uppercase text-black/80 font-bold">Lead Capture</p>
                </div>
                <img src="https://picsum.photos/seed/team2/400/500" className="rounded-2xl border border-neutral-800" alt="Strategy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
