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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff5500] to-[#b33600] flex items-center justify-center shadow-lg shadow-orange-950/50 group-hover:scale-105 transition-transform">
            <Flame className="w-6 h-6 text-white animate-pulse" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00f0ff] rounded-full border-2 border-[#07090e] animate-ping" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-2xl tracking-tight text-white font-['Outfit']">forgepoint</span>
              <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/40 uppercase tracking-widest font-['Outfit']">ai</span>
            </div>
            <div className="text-[10px] tracking-[0.25em] text-[#94a3b8] uppercase font-semibold">
              ACQUIRE. TRANSFORM. ELEVATE.
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={onOpenModal} 
            className="btn-primary"
          >
            <span>Sell Your Business</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-800/80 text-white border border-slate-700"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-slate-800 p-6 flex flex-col gap-4 mt-2">
          <a 
            href="#playbook" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-[#ff5500] py-2 border-b border-slate-800"
          >
            Transformation Playbook
          </a>
          <a 
            href="#transformation" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-[#ff5500] py-2 border-b border-slate-800"
          >
            Before & After
          </a>
          <a 
            href="#industries" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-[#ff5500] py-2 border-b border-slate-800"
          >
            Services We Acquire
          </a>
          <a 
            href="#calculator" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#00f0ff] py-2 border-b border-slate-800"
          >
            Valuation Tool
          </a>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}
            className="btn-primary w-full justify-center mt-2"
          >
            <span>Sell Your Business</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
