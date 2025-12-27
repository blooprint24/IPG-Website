
import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Launchpad",
      type: "Project-Based",
      price: "$2,997",
      desc: "Perfect for getting your professional presence online quickly.",
      features: ["Smart Website Build", "Reputation Setup", "Basic Automation", "CRM Integration", "30 Days Support"]
    },
    {
      name: "Growth Engine",
      type: "Monthly System",
      price: "$497",
      unit: "/mo",
      recommended: true,
      desc: "The complete system to scale your customer engagement.",
      features: ["Voice AI Agents", "Text-to-Callback", "Automated Follow-up", "Ongoing Management", "Strategic Consulting", "Priority Support"]
    },
    {
      name: "Enterprise",
      type: "Custom Hybrid",
      price: "Custom",
      desc: "Bespoke systems for businesses with multiple locations.",
      features: ["Full Marketing Suite", "Dedicated Support", "Custom API Integrations", "Advanced Analytics", "Quarterly Strategy Audits"]
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-bold mb-4">Straightforward Pricing</h2>
          <p className="text-neutral-400">No hidden fees. No complicated tiers. Just growth-focused packages.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, idx) => (
            <div key={idx} className={`reveal p-8 rounded-3xl border ${p.recommended ? 'border-lime-400 bg-neutral-900 shadow-[0_0_30px_rgba(163,230,53,0.1)]' : 'border-neutral-800 bg-black'} relative`}>
              {p.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-400 text-black px-4 py-1 rounded-full text-xs font-black uppercase">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <p className="text-neutral-500 text-sm font-bold uppercase tracking-widest">{p.type}</p>
                <h3 className="text-3xl font-black mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-lime-400">{p.price}</span>
                  {p.unit && <span className="text-neutral-500">{p.unit}</span>}
                </div>
                <p className="text-sm text-neutral-400 mt-4">{p.desc}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-lime-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${p.recommended ? 'bg-lime-400 text-black hover:bg-lime-300' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
