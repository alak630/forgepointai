import React from 'react';
import { Target, Heart, Lightbulb, Mountain } from 'lucide-react';

export default function MissionValues() {
  return (
    <section className="py-20 sm:py-28 bg-white relative border-b border-slate-200">
      
      <div className="container relative z-10 space-y-16 px-4 sm:px-6">
        
        {/* Mission Statement Box */}
        <div className="corporate-card p-8 sm:p-12 max-w-4xl mx-auto text-center space-y-4 bg-slate-50 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-orange-700" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            <Target className="w-4 h-4 text-orange-700" />
            <span>OUR MISSION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans'] leading-tight">
            "To modernize legacy service companies and elevate frontline teams through intelligent operations and human potential."
          </h2>
        </div>

        {/* 3 Core Values */}
        <div>
          <div className="text-center mb-10">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest font-['Inter']">
              FORGEPOINT FOUNDATIONAL PRINCIPLES
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Value 1: PEOPLE FIRST */}
            <div className="corporate-card p-8 text-center space-y-4 bg-white border border-slate-200 shadow-sm hover:border-slate-300">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center mx-auto border border-rose-200 shadow-xs">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">PEOPLE FIRST</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-['Inter']">
                We safeguard frontline workers, technicians, dry cleaners, salon stylists, and housekeepers. AI empowers our staff—it never replaces them.
              </p>
            </div>

            {/* Value 2: AI WITH PURPOSE */}
            <div className="corporate-card p-8 text-center space-y-4 bg-white border border-slate-200 shadow-sm hover:border-slate-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto border border-blue-200 shadow-xs">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">PRACTICAL AI</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-['Inter']">
                We deploy high-ROI operational AI software that solves real friction: 24/7 call booking, dynamic van routing, and instant billing.
              </p>
            </div>

            {/* Value 3: BUILT TO LAST */}
            <div className="corporate-card p-8 text-center space-y-4 bg-white border border-slate-200 shadow-sm hover:border-slate-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200 shadow-xs">
                <Mountain className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">BUILT FOR SCALE</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-['Inter']">
                We build durable cash-flowing service businesses that deliver exceptional 5-star service to local communities for decades.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
