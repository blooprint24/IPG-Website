
import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-4xl font-bold mb-6">Proven Results for Real Businesses</h2>
            <p className="text-neutral-400 mb-8 text-lg">
              We've helped local service providers, retailers, and entrepreneurs scale their revenue through intelligent automation and high-conversion design.
            </p>
            
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="p-6 bg-black/50 border border-neutral-800 rounded-xl flex gap-6">
                  <div className="w-24 h-24 shrink-0 bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700">
                    <img src={`https://picsum.photos/seed/biz${i}/200/200`} alt="Business" />
                  </div>
                  <div>
                    <div className="flex text-yellow-400 mb-2">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-sm font-medium mb-1">Local HVAC Provider</p>
                    <p className="text-lime-400 font-bold">+280% Inbound Calls</p>
                    <p className="text-neutral-500 text-xs mt-2 italic">"The automated callback system changed everything for our dispatch team."</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-neutral-800 group cursor-pointer bg-black flex items-center justify-center">
              <img src="https://picsum.photos/seed/video/800/450" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform" alt="Testimonial Placeholder" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                </div>
                <p className="font-bold text-xl">Watch Video Testimonials</p>
                <p className="text-neutral-400 text-sm">See the impact we have on small businesses</p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between px-4">
              <div className="text-center">
                <p className="text-3xl font-black text-lime-400">12x</p>
                <p className="text-xs uppercase text-neutral-500 font-bold">Avg. ROI</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-white">50k+</p>
                <p className="text-xs uppercase text-neutral-500 font-bold">Leads Managed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-orange-500">98%</p>
                <p className="text-xs uppercase text-neutral-500 font-bold">Retention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
