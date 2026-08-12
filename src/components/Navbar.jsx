import React, { useState, useEffect } from 'react';
import { Flame, Cpu, ArrowRight, Menu, X, ChevronRight } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-4 md:py-5'}`}>
      <div className="container flex items-center justify-between px-4 sm:px-6">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group text-decoration-none">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#ff5500] to-[#b33600] flex items-center justify-center shadow-lg shadow-orange-950/50 group-hover:scale-105 transition-transform">
            <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#00f0ff] rounded-full border-2 border-[#07090e] animate-ping" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white font-['Outfit']">forgepoint</span>
              <span className="text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/40 uppercase tracking-widest font-['Outfit']">ai</span>
            </div>
            <div className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-[#94a3b8] uppercase font-semibold">
              ACQUIRE. TRANSFORM. ELEVATE.
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <a href="#playbook" className="text-sm font-medium text-slate-300 hover:text-[#ff5500] transition-colors">
            Transformation Playbook
          </a>
          <a href="#transformation" className="text-sm font-medium text-slate-300 hover:text-[#ff5500] transition-colors">
            Before & After
          </a>
          <a href="#industries" className="text-sm font-medium text-slate-300 hover:text-[#ff5500] transition-colors">
            Services We Acquire
          </a>
          <a href="#tech" className="text-sm font-medium text-slate-300 hover:text-[#ff5500] transition-colors">
            AI Engine
          </a>
          <a href="#calculator" className="text-sm font-medium text-[#00f0ff] hover:text-white transition-colors flex items-center gap-1">
            <Cpu className="w-4 h-4" /> Valuation Tool
          </a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={onOpenModal} 
            className="btn-primary"
          >
            <span>Sell Your Business</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2.5 rounded-xl bg-slate-800/90 text-white border border-slate-700/80 active:scale-95 transition-transform"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#ff5500]" /> : <Menu className="w-6 h-6 text-slate-200" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#07090e]/95 backdrop-blur-2xl border-b border-slate-800/80 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <a 
            href="#playbook" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-semibold text-slate-200 hover:text-[#ff5500] py-3 border-b border-slate-800/80"
          >
            <span>Transformation Playbook</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </a>
          <a 
            href="#transformation" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-semibold text-slate-200 hover:text-[#ff5500] py-3 border-b border-slate-800/80"
          >
            <span>Before & After</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </a>
          <a 
            href="#industries" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-semibold text-slate-200 hover:text-[#ff5500] py-3 border-b border-slate-800/80"
          >
            <span>Services We Acquire</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </a>
          <a 
            href="#tech" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-semibold text-slate-200 hover:text-[#ff5500] py-3 border-b border-slate-800/80"
          >
            <span>AI Engine</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </a>
          <a 
            href="#calculator" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-semibold text-[#00f0ff] py-3 border-b border-slate-800/80"
          >
            <span className="flex items-center gap-2">
              <Cpu className="w-4 h-4" /> AI Valuation Tool
            </span>
            <ChevronRight className="w-4 h-4 text-[#00f0ff]/60" />
          </a>
          
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}
            className="btn-primary w-full justify-center text-center py-3.5 mt-2 text-base shadow-lg shadow-orange-950/50"
          >
            <span>Sell Your Business</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </header>
  );
}
