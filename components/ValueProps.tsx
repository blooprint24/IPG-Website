
import React from 'react';
import { Package, Globe, MessageSquare, Star, TrendingUp } from 'lucide-react';

const ValueProps: React.FC = () => {
  const props = [
    {
      title: "Professional Marketing",
      desc: "Proven digital products designed for high-impact results.",
      icon: <Package className="w-8 h-8 text-lime-400" />,
    },
    {
      title: "Smart Websites",
      desc: "Conversion-ready sites built to turn visitors into leads.",
      icon: <Globe className="w-8 h-8 text-orange-400" />,
    },
    {
      title: "Engagement Systems",
      desc: "Voice, text, and chat tools that engage prospects 24/7.",
      icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Reputation Growth",
      desc: "Automated review tools to build social proof instantly.",
      icon: <Star className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "Focused Strategy",
      desc: "Results-driven support tailored to your business goals.",
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-neutral-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-bold mb-4">Outcome-Driven Solutions</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            We provide the tools you need to dominate your local market without the technical headache.
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {props.map((prop, idx) => (
            <div 
              key={idx} 
              className="reveal p-8 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-lime-400/50 transition-all hover:-translate-y-2 group"
            >
              <div className="mb-6 bg-neutral-800 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{prop.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
