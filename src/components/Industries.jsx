import React from 'react';
import { Wrench, Shirt, Scissors, Sparkles, Home, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Industries({ onOpenModal }) {
  const verticals = [
    {
      title: 'Plumbing & HVAC',
      icon: Wrench,
      accent: '#ff5500',
      description: 'Emergency repair, pipe fitting, seasonal maintenance, and residential heating/cooling.',
      beforePain: 'Emergency calls missed at night, manual route dispatching, delayed invoices.',
      aiFix: '24/7 Voice AI dispatches closest technician instantly, automated mobile payments on-site.',
      uplift: '+310% Revenue Expansion',
    },
    {
      title: 'Laundry & Dry Cleaning',
      icon: Shirt,
      accent: '#00f0ff',
      description: 'Commercial laundry, dry cleaning, garment alteration, and wash-and-fold pickup delivery.',
      beforePain: 'High equipment downtime, unoptimized pickup routes, high manual counter staffing cost.',
      aiFix: 'Automated locker kiosks, smart route optimization for laundry van pickup, AI washer diagnostics.',
      uplift: '+240% Profit Margin',
    },
    {
      title: 'Salons & Beauty Spas',
      icon: Scissors,
      accent: '#ec4899',
      description: 'Hair salons, nail spas, skincare clinics, massage centers, and barber shops.',
      beforePain: 'Last-minute appointment cancellations, unorganized chair rentals, zero re-booking automation.',
      aiFix: 'AI WhatsApp/SMS automated appointment filler, dynamic pricing for peak slots, loyalty engine.',
      uplift: '+88% Chair Utilization',
    },
    {
      title: 'Housekeeping & Cleaning',
      icon: Sparkles,
      accent: '#10b981',
      description: 'Residential home cleaning, commercial janitorial, deep carpet cleaning, and move-out service.',
      beforePain: 'High cleaner turnover, unverified job completion photos, inefficient supply usage.',
      aiFix: 'AI Quality Control photo verification, cleaner dispatch scheduling, subscription home plans.',
      uplift: '+195% Recurring Revenue',
    },
    {
      title: 'Domestic Help & Home Care',
      icon: Home,
      accent: '#8b5cf6',
      description: 'Elderly care, domestic helpers, babysitting agencies, and home maintenance support.',
      beforePain: 'Paper background checks, manual shifts matching, zero client family updates.',
      aiFix: 'AI skills-matching platform, automated GPS clock-in verification, real-time family portals.',
      uplift: '99% Client Satisfaction',
    },
    {
      title: 'Electrical & Handyman',
      icon: Zap,
      accent: '#f59e0b',
      description: 'Residential electrical wiring, fixture installation, drywall repair, and maintenance.',
      beforePain: 'Inaccurate phone job estimations, unpaid quotes, long response times.',
      aiFix: 'Instant AI photo quote generator, upfront deposit collection, smart inventory re-ordering.',
      uplift: '4x Job Closure Rate',
    },
  ];

  return (
    <section id="industries" className="py-24 bg-[#090c13] relative">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-pill-cyan">
            <span>SERVICE VERTICALS WE ACQUIRE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-['Outfit']">
            Small Service Businesses <span className="gradient-ai">We Revive & Scale</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Whether you own a local plumbing shop, a neighborhood salon, or a housekeeping firm, ForgePoint AI turns traditional operations into thriving digital powerhouses.
          </p>
        </div>

        {/* Vertical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {verticals.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div 
                key={idx}
                className="glass-card p-5 sm:p-8 flex flex-col justify-between relative group hover:border-[#ff5500]/50"
              >
                <div>
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div 
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border shadow-lg"
                      style={{ 
                        backgroundColor: `${v.accent}15`, 
                        borderColor: `${v.accent}40`,
                        color: v.accent
                      }}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>

                    <span 
                      className="text-[10px] sm:text-xs font-black px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider border"
                      style={{ 
                        backgroundColor: `${v.accent}10`, 
                        borderColor: `${v.accent}30`,
                        color: v.accent 
                      }}
                    >
                      {v.uplift}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 font-['Outfit']">
                    {v.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                    {v.description}
                  </p>

                  {/* Problem vs AI Solution */}
                  <div className="space-y-3 pt-4 border-t border-slate-800 text-[11px] sm:text-xs">
                    <div>
                      <span className="font-extrabold text-red-400 uppercase tracking-wider block mb-1">Bottlenecks We Solve:</span>
                      <span className="text-slate-400">{v.beforePain}</span>
                    </div>

                    <div className="pt-1.5">
                      <span className="font-extrabold text-[#00f0ff] uppercase tracking-wider block mb-1">ForgePoint AI Upgrade:</span>
                      <span className="text-slate-200 font-medium">{v.aiFix}</span>
                    </div>
                  </div>

                </div>

                <button 
                  onClick={onOpenModal}
                  className="mt-6 sm:mt-8 w-full py-3 rounded-xl bg-slate-900 hover:bg-[#ff5500] text-slate-300 hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-800 hover:border-[#ff5500] transition-all group-hover:shadow-lg"
                >
                  <span>Submit {v.title} Business</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
