import React from 'react';
import { Flame, ArrowRight, ShieldCheck, TrendingUp, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#07090e] via-[#0d121d] to-[#07090e]">
      
      {/* Background Ember Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-[#ff5500]/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[240px] sm:w-[400px] h-[240px] sm:h-[400px] bg-[#00f0ff]/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* Pill Tagline */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/30 text-[#ff5500] text-[10px] sm:text-xs font-bold tracking-wider uppercase">
              <Flame className="w-3 sm:w-3.5 h-3 sm:h-3.5 animate-pulse" />
              <span>ACQUIRE • TRANSFORM • ELEVATE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.15] sm:leading-[1.1] font-['Outfit']">
              We acquire service businesses.{' '}
              <span className="bg-gradient-to-r from-[#ff5500] via-[#ff7700] to-[#ffaa00] bg-clip-text text-transparent">
                We forge them stronger with AI.
              </span>
            </h1>

            {/* Paragraph Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              ForgePoint AI acquires small or struggling service businesses—such as plumbing, laundry, salons, housekeeping, and home care—and transforms them into high-performing, scalable, and profitable companies using artificial intelligence.
            </p>

            {/* Call To Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button 
                onClick={onOpenModal} 
                className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 justify-center"
              >
                <span>Get a Cash Offer for Your Business</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              </button>

              <a 
                href="#calculator" 
                className="btn-outline-cyan text-sm sm:text-base px-5 sm:px-6 py-3.5 sm:py-4 justify-center"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Estimate AI Valuation</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-5 sm:pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-2 sm:gap-4">
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-['Outfit']">3.5x</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Avg Revenue Growth</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#00f0ff] font-['Outfit']">98%</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Customer Retention</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#ff5500] font-['Outfit']">14 Days</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Acquisition Closing</div>
              </div>
            </div>

          </div>

          {/* Right Column Showcase Graphic */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-orange-950/40 group">
              
              {/* Hero Forge Artwork */}
              <img 
                src="/hero_forge.jpg" 
                alt="ForgePoint AI Revitalizing Service Businesses" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Glass Floating Cards */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-slate-950/90 backdrop-blur-md border border-emerald-500/40 rounded-lg sm:rounded-xl p-2 sm:p-3 flex items-center gap-2 sm:gap-3 shadow-lg">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Monthly Profit Surge</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-400">+284% Margin Gain</div>
                </div>
              </div>

              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-slate-950/90 backdrop-blur-md border border-[#ff5500]/40 rounded-lg sm:rounded-xl p-2 sm:p-3 flex items-center gap-2 sm:gap-3 shadow-lg">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#ff5500]/20 text-[#ff5500] flex items-center justify-center font-bold shrink-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-400">AI Automation Active</div>
                  <div className="text-xs sm:text-sm font-bold text-white">24/7 AI Voice & Dispatch</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
