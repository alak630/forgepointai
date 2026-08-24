import React from 'react';
import { Layers, ArrowUp, Mail, MapPin } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f172a] text-slate-300 py-16 text-sm font-['Inter']">
      <div className="container space-y-12 px-4 sm:px-6">
        
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-white flex items-center justify-center shadow-md overflow-hidden p-0.5">
                <img src="/logo.jpg" alt="GetForgePointAI Logo" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-white font-['Plus_Jakarta_Sans']">
                  GetForgePoint<span className="text-orange-500">AI</span>
                </span>
                <div className="text-[10px] tracking-[0.2em] text-slate-400 uppercase font-semibold">
                  CAPITAL & OPERATIONAL AI
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              ForgePoint AI is a premier service business acquisition and operational technology firm. We acquire small or struggling local service providers and scale them into high-margin market leaders using artificial intelligence.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-orange-500" /> HQ: Austin, TX</span>
              <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-blue-400" /> deals@forgepoint.ai</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-base font-['Plus_Jakarta_Sans']">M&A & Platform</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#playbook" className="hover:text-white transition-colors">5-Step M&A Playbook</a></li>
              <li><a href="#transformation" className="hover:text-white transition-colors">Operational Value Creation</a></li>
              <li><a href="#tech" className="hover:text-white transition-colors">Autonomous Voice AI</a></li>
              <li><a href="#tech" className="hover:text-white transition-colors">Smart Route Optimization</a></li>
              <li><a href="#calculator" className="hover:text-blue-400 transition-colors">Valuation Calculator</a></li>
            </ul>
          </div>

          {/* Targeted Verticals */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-base font-['Plus_Jakarta_Sans']">Target Sectors</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <a href="#industries" className="hover:text-white">Plumbing & HVAC</a>
              <a href="#industries" className="hover:text-white">Commercial Laundry</a>
              <a href="#industries" className="hover:text-white">Salons & Spas</a>
              <a href="#industries" className="hover:text-white">Housekeeping Services</a>
              <a href="#industries" className="hover:text-white">Home Care Services</a>
              <a href="#industries" className="hover:text-white">Electrical & Handyman</a>
            </div>
            
            <button 
              onClick={onOpenModal}
              className="mt-4 w-full py-2.5 px-4 rounded-lg bg-orange-700 hover:bg-orange-800 text-white font-bold text-xs transition-all text-center shadow-sm"
            >
              Submit Your Business For Acquisition
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} ForgePoint AI Technologies Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Acquisition</a>
            <a href="#" className="hover:text-white">Confidentiality Protocol</a>
          </div>

          <button 
            onClick={scrollToTop} 
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
