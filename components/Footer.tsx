
import React from 'react';
import { Rocket, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-lime-400 p-1.5 rounded-lg">
                <Rocket className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-extrabold tracking-tighter">
                IPG<span className="text-lime-400">.</span>
              </span>
            </div>
            <p className="text-neutral-500 leading-relaxed text-sm">
              Smart digital marketing products and conversion systems for small businesses and entrepreneurs who want real results.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-lime-400">Services</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Smart Website Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Voice AI Agents</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Text-to-Callback Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automated Follow-up</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reputation Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-lime-400">Company</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About IPG</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Strategy Session</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-lime-400">Contact Us</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-lime-400" />
                (555) 234-5678
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-lime-400" />
                hello@idealperformance.group
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-lime-400" />
                Austin, Texas
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs font-medium">
            © {new Date().getFullYear()} Ideal Performance Group (IPG). All rights reserved.
          </p>
          <div className="flex gap-8 text-neutral-600 text-xs font-medium">
            <a href="#" className="hover:text-lime-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-lime-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-lime-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
