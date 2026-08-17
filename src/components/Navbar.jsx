import React, { useState, useEffect } from 'react';
import { Layers, Calculator, ArrowRight, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-white/80 backdrop-blur-md py-4'}`}>
      <div className="container flex items-center justify-between px-4 sm:px-6">
        
        {/* Corporate Logomark */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-10 h-10 rounded-xl bg-[#0f172a] text-white flex items-center justify-center shadow-md group-hover:bg-[#c2410c] transition-colors">
            <Layers className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 font-['Plus_Jakarta_Sans']">ForgePoint</span>
              <span className="text-[11px] font-extrabold px-1.5 py-0.5 rounded bg-orange-100 text-orange-800 border border-orange-200 uppercase tracking-widest font-['Plus_Jakarta_Sans']">AI</span>
            </div>
            <div className="text-[9px] tracking-[0.2em] text-slate-500 uppercase font-semibold">
              CAPITAL & OPERATIONAL AI
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#playbook" className="text-sm font-semibold text-slate-700 hover:text-orange-700 transition-colors">
            M&A Playbook
          </a>
          <a href="#transformation" className="text-sm font-semibold text-slate-700 hover:text-orange-700 transition-colors">
            Value Creation
          </a>
          <a href="#industries" className="text-sm font-semibold text-slate-700 hover:text-orange-700 transition-colors">
            Target Sectors
          </a>
          <a href="#tech" className="text-sm font-semibold text-slate-700 hover:text-orange-700 transition-colors">
            AI Platform
          </a>
          <a href="#calculator" className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
            <Calculator className="w-4 h-4 text-blue-600" /> Valuation Calculator
          </a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={onOpenModal} 
            className="btn-primary"
          >
            <span>Request Valuation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 active:scale-95 transition-transform"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-orange-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <a 
            href="#playbook" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-semibold text-slate-800 hover:text-orange-700 py-3 border-b border-slate-100"
          >
            <span>M&A Playbook</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
          <a 
            href="#transformation" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-semibold text-slate-800 hover:text-orange-700 py-3 border-b border-slate-100"
          >
            <span>Value Creation</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
          <a 
            href="#industries" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-semibold text-slate-800 hover:text-orange-700 py-3 border-b border-slate-100"
          >
            <span>Target Sectors</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
          <a 
            href="#tech" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-semibold text-slate-800 hover:text-orange-700 py-3 border-b border-slate-100"
          >
            <span>AI Platform</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
          <a 
            href="#calculator" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-semibold text-blue-700 py-3 border-b border-slate-100"
          >
            <span className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-blue-600" /> Valuation Calculator
            </span>
            <ChevronRight className="w-4 h-4 text-blue-400" />
          </a>
          
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}
            className="btn-primary w-full justify-center text-center py-3.5 mt-2 text-base shadow-md"
          >
            <span>Request Valuation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </header>
  );
}
