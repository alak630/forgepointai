import React from 'react';
import { Flame, ArrowUp, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-slate-800 text-slate-400 py-16 text-sm">
      <div className="container space-y-12">
        
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ff5500] flex items-center justify-center text-white shadow-lg">
                <Flame className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-white font-['Outfit']">forgepoint</span>
                <span className="ml-1 text-xs font-bold px-1.5 py-0.5 rounded bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/40 uppercase tracking-widest font-['Outfit']">ai</span>
                <div className="text-[10px] tracking-[0.25em] text-slate-500 uppercase font-semibold">
                  ACQUIRE. TRANSFORM. ELEVATE.
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              ForgePoint AI is a premier service business acquisition and technology transformation firm. We buy small or struggling local service providers and forge them into high-performing, profitable companies with artificial intelligence.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-[#ff5500]" /> HQ: Austin, TX</span>
              <span className="flex items-center gap-1"><Mail className="w-4 h-4 text-[#00f0ff]" /> deals@forgepoint.ai</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-base font-['Outfit']">Transformation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#playbook" className="hover:text-[#ff5500] transition-colors">5-Step AI Playbook</a></li>
              <li><a href="#transformation" className="hover:text-[#ff5500] transition-colors">Before & After Case Study</a></li>
              <li><a href="#tech" className="hover:text-[#ff5500] transition-colors">AI Voice Receptionist</a></li>
              <li><a href="#tech" className="hover:text-[#ff5500] transition-colors">Smart Fleet Dispatch</a></li>
              <li><a href="#calculator" className="hover:text-[#00f0ff] transition-colors">Valuation Calculator</a></li>
            </ul>
          </div>

          {/* Targeted Verticals */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-base font-['Outfit']">Target Verticals</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#industries" className="hover:text-white">Plumbing & HVAC</a>
              <a href="#industries" className="hover:text-white">Laundry & Dry Cleaning</a>
              <a href="#industries" className="hover:text-white">Salon & Beauty Spas</a>
              <a href="#industries" className="hover:text-white">Housekeeping Services</a>
              <a href="#industries" className="hover:text-white">Domestic Help Services</a>
              <a href="#industries" className="hover:text-white">Electrical & Handyman</a>
            </div>
            
            <button 
              onClick={onOpenModal}
              className="mt-4 w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-[#ff5500] text-slate-200 hover:text-white font-bold text-xs border border-slate-700 transition-all text-center"
            >
              Submit Your Business For Acquisition
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} ForgePoint AI Technologies Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Acquisition</a>
            <a href="#" className="hover:text-slate-300">Non-Disclosure Agreement</a>
          </div>

          <button 
            onClick={scrollToTop} 
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
