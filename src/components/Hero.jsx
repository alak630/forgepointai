import React from 'react';
import { Layers, ArrowRight, TrendingUp, Zap, Sparkles, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/60 border-b border-slate-200">
      
      {/* Background Soft Mesh Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-bold tracking-wider uppercase shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-orange-700" />
              <span>PRIVATE EQUITY & OPERATIONAL AI PLATFORM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-['Plus_Jakarta_Sans']">
              We acquire service companies.{' '}
              <span className="text-orange-700">
                We scale them with Artificial Intelligence.
              </span>
            </h1>

            {/* Paragraph Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl font-['Inter']">
              ForgePoint AI acquires independent service businesses—including HVAC & plumbing, commercial laundry, beauty salons, housekeeping, and home care—and transforms them into high-margin market leaders using proprietary operational AI.
            </p>

            {/* Call To Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button 
                onClick={onOpenModal} 
                className="btn-primary text-sm sm:text-base px-7 py-4 justify-center"
              >
                <span>Request Acquisition Valuation</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </button>

              <a 
                href="#calculator" 
                className="btn-secondary text-sm sm:text-base px-6 py-4 justify-center"
              >
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Estimate Valuation</span>
              </a>
            </div>

            {/* Key Trust Metrics */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-3 sm:gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">3.5x</div>
                <div className="text-xs text-slate-500 font-medium">Avg EBITDA Expansion</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-700 font-['Plus_Jakarta_Sans']">98%</div>
                <div className="text-xs text-slate-500 font-medium">Client Retention Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-orange-700 font-['Plus_Jakarta_Sans']">14 Days</div>
                <div className="text-xs text-slate-500 font-medium">Acquisition Diligence</div>
              </div>
            </div>

          </div>

          {/* Right Column Institutional Dashboard Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl group">
              
              {/* Artwork Image */}
              <img 
                src="/hero_forge.jpg" 
                alt="ForgePoint AI Revitalizing Service Businesses" 
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
              />
              
              {/* Floating Overlay Corporate Badges */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-emerald-200 rounded-xl p-3 flex items-center gap-3 shadow-md">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">EBITDA Gain</div>
                  <div className="text-xs sm:text-sm font-extrabold text-emerald-700">+284% Margin Growth</div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md border border-orange-200 rounded-xl p-3 flex items-center gap-3 shadow-md">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-bold shrink-0">
                  <Zap className="w-5 h-5 text-orange-700" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Operational Engine</div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900">24/7 Autonomous Dispatch</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
