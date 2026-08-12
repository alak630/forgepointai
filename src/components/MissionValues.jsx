import React from 'react';
import { Target, Heart, Lightbulb, Mountain, ShieldCheck } from 'lucide-react';

export default function MissionValues() {
  return (
    <section className="py-24 bg-[#07090e] relative border-t border-b border-slate-800/80">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ff5500]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container relative z-10 space-y-16">
        
        {/* Mission Statement Box from Spec Image */}
        <div className="glass-card p-8 md:p-12 border-[#ff5500]/40 max-w-4xl mx-auto text-center space-y-4 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff5500] via-[#ffaa00] to-[#00f0ff]" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5500]/15 text-[#ff5500] text-xs font-bold uppercase tracking-wider">
            <Target className="w-4 h-4" />
            <span>OUR MISSION</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold text-white font-['Outfit'] leading-tight">
            "To reinvent service businesses and the lives they impact through intelligent systems and human potential."
          </h2>
        </div>

        {/* 3 Core Values from Spec Image */}
        <div>
          <div className="text-center mb-10">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              FORGEPOINT FOUNDATIONAL PRINCIPLES
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Value 1: PEOPLE FIRST */}
            <div className="glass-card p-8 text-center space-y-4 border-slate-800 hover:border-[#ff5500]/40">
              <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto border border-rose-500/30 shadow-lg">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-white font-['Outfit']">PEOPLE FIRST</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We safeguard frontline workers, plumbers, laundry operators, salon stylists, and housekeepers. AI empowers our staff—it never replaces them.
              </p>
            </div>

            {/* Value 2: AI WITH PURPOSE */}
            <div className="glass-card p-8 text-center space-y-4 border-slate-800 hover:border-[#00f0ff]/40">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/30 shadow-lg">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-white font-['Outfit']">AI WITH PURPOSE</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We build practical, high-ROI AI tools that solve real everyday friction: answering calls 24/7, routing vans efficiently, and eliminating manual paperwork.
              </p>
            </div>

            {/* Value 3: BUILT TO LAST */}
            <div className="glass-card p-8 text-center space-y-4 border-slate-800 hover:border-emerald-500/40">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30 shadow-lg">
                <Mountain className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-white font-['Outfit']">BUILT TO LAST</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We create durable cash-flowing businesses that deliver exceptional service to local communities for decades to come.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
