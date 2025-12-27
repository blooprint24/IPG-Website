
import React from 'react';
import { CheckCircle2, Zap, Phone, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      id: "smart-websites",
      title: "Smart Websites Built to Convert",
      subtitle: "More than just a pretty design. Our sites are engineered for one goal: conversion.",
      desc: "We build digital storefronts that guide your visitors toward taking action—whether that's booking an appointment, calling your team, or filling out a form.",
      points: ["Conversion-Optimized Layouts", "Mobile-First Experience", "Integrated Booking Tools"],
      image: "https://picsum.photos/seed/web/800/600",
      accent: "lime-400",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: "conversation-tech",
      title: "Conversation Technology",
      subtitle: "Voice AI and intelligent chat that never sleep.",
      desc: "Engage prospects instantly. Our voice AI agents and text systems handle inquiries in real-time, ensuring you never miss a lead again.",
      points: ["AI Voice Agents", "Text-to-Callback Systems", "Smart Chat Engagement"],
      image: "https://picsum.photos/seed/tech/800/600",
      accent: "orange-500",
      icon: <Phone className="w-6 h-6" />,
      reverse: true
    },
    {
      id: "reputation",
      title: "Automated Reputation Growth",
      subtitle: "Let your happy customers do the selling for you.",
      desc: "Build authority automatically. Our system sends review requests to your best customers and showcases your social proof where it matters most.",
      points: ["Review Generation Engine", "Social Proof Integration", "Negative Feedback Filters"],
      image: "https://picsum.photos/seed/stars/800/600",
      accent: "blue-500",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <section id="features" className="py-24 space-y-32">
      <div className="container mx-auto px-6">
        {features.map((f, idx) => (
          <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 ${f.reverse ? 'lg:flex-row-reverse' : ''} mb-32 last:mb-0`}>
            <div className="flex-1 reveal">
              <div className={`flex items-center gap-2 mb-6 text-${f.accent} font-bold tracking-wider uppercase text-sm`}>
                <span className={`p-2 bg-${f.accent}/10 rounded-lg`}>{f.icon}</span>
                {f.title.split(' ')[0]} Focus
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">{f.title}</h2>
              <p className="text-xl text-neutral-300 font-semibold mb-6">{f.subtitle}</p>
              <p className="text-neutral-400 mb-8 leading-relaxed max-w-lg">{f.desc}</p>
              <ul className="space-y-4">
                {f.points.map((p, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className={`w-5 h-5 text-${f.accent}`} />
                    {p}
                  </li>
                ))}
              </ul>
              <button className={`mt-10 px-8 py-3 rounded-lg border-2 border-neutral-800 hover:border-${f.accent} transition-all font-bold group`}>
                Learn More <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
            <div className="flex-1 reveal relative group">
              <div className={`absolute -inset-4 bg-${f.accent}/20 rounded-2xl blur-2xl group-hover:bg-${f.accent}/30 transition-all`}></div>
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 aspect-[4/3]">
                <img src={f.image} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
