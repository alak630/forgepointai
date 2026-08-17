import React from 'react';
import { Wrench, Shirt, Scissors, Sparkles, Home, Zap, ArrowRight } from 'lucide-react';

export default function Industries({ onOpenModal }) {
  const verticals = [
    {
      title: 'Plumbing & HVAC',
      icon: Wrench,
      accent: '#c2410c',
      bgLight: '#fff7ed',
      borderLight: '#ffedd5',
      description: 'Emergency repair, pipe fitting, seasonal maintenance, and residential heating/cooling.',
      beforePain: 'Unanswered calls after business hours, manual route dispatching, delayed invoices.',
      aiFix: '24/7 Voice AI dispatches closest technician instantly, automated mobile payments on-site.',
      uplift: '+310% Revenue Expansion',
    },
    {
      title: 'Commercial Laundry',
      icon: Shirt,
      accent: '#2563eb',
      bgLight: '#eff6ff',
      borderLight: '#dbeafe',
      description: 'Commercial laundry, dry cleaning, garment alteration, and wash-and-fold pickup delivery.',
      beforePain: 'High equipment downtime, unoptimized pickup routes, high manual counter staffing cost.',
      aiFix: 'Automated locker kiosks, smart route optimization for laundry van pickup, AI washer diagnostics.',
      uplift: '+240% Profit Margin',
    },
    {
      title: 'Salons & Wellness Spas',
      icon: Scissors,
      accent: '#be185d',
      bgLight: '#fdf2f8',
      borderLight: '#fce7f3',
      description: 'Hair salons, nail spas, skincare clinics, massage centers, and barber shops.',
      beforePain: 'Last-minute appointment cancellations, unorganized chair rentals, zero re-booking automation.',
      aiFix: 'AI automated appointment filler, dynamic pricing for peak slots, recurring membership engine.',
      uplift: '+88% Chair Utilization',
    },
    {
      title: 'Housekeeping & Cleaning',
      icon: Sparkles,
      accent: '#047857',
      bgLight: '#ecfdf5',
      borderLight: '#d1fae5',
      description: 'Residential home cleaning, commercial janitorial, deep carpet cleaning, and move-out service.',
      beforePain: 'High cleaner turnover, unverified job completion photos, inefficient supply usage.',
      aiFix: 'AI Quality Control photo verification, cleaner dispatch scheduling, subscription home plans.',
      uplift: '+195% Recurring Revenue',
    },
    {
      title: 'Home Care & Domestic Help',
      icon: Home,
      accent: '#6d28d9',
      bgLight: '#f5f3ff',
      borderLight: '#ede9fe',
      description: 'Elderly care, domestic helpers, babysitting agencies, and home maintenance support.',
      beforePain: 'Paper background checks, manual shift matching, zero client family updates.',
      aiFix: 'AI skills-matching platform, automated GPS clock-in verification, real-time family portals.',
      uplift: '99% Client Satisfaction',
    },
    {
      title: 'Electrical & Handyman',
      icon: Zap,
      accent: '#b45309',
      bgLight: '#fffbeb',
      borderLight: '#fef3c7',
      description: 'Residential electrical wiring, fixture installation, drywall repair, and maintenance.',
      beforePain: 'Inaccurate phone job estimations, unpaid quotes, long response times.',
      aiFix: 'Instant AI photo quote generator, upfront deposit collection, smart inventory re-ordering.',
      uplift: '4x Job Closure Rate',
    },
  ];

  return (
    <section id="industries" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200 relative">
      <div className="container px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="badge-pill-blue">
            <span>TARGET ACQUISITION SECTORS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">
            Local Service Verticals <span className="text-orange-700">We Acquire & Scale</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-['Inter']">
            Whether you own a local plumbing shop, a dry cleaning business, or a housekeeping firm, ForgePoint AI turns traditional operations into thriving digital powerhouses.
          </p>
        </div>

        {/* Vertical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {verticals.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div 
                key={idx}
                className="corporate-card p-6 sm:p-8 flex flex-col justify-between bg-white border border-slate-200 hover:border-slate-300 shadow-sm relative group"
              >
                <div>
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-xs"
                      style={{ 
                        backgroundColor: v.bgLight, 
                        borderColor: v.borderLight,
                        color: v.accent
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span 
                      className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border"
                      style={{ 
                        backgroundColor: v.bgLight, 
                        borderColor: v.borderLight,
                        color: v.accent 
                      }}
                    >
                      {v.uplift}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 font-['Plus_Jakarta_Sans']">
                    {v.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm mb-5 leading-relaxed font-['Inter']">
                    {v.description}
                  </p>

                  {/* Problem vs AI Solution */}
                  <div className="space-y-3 pt-4 border-t border-slate-100 text-xs font-['Inter']">
                    <div>
                      <span className="font-bold text-rose-700 uppercase tracking-wider block mb-1">Bottlenecks We Solve:</span>
                      <span className="text-slate-500">{v.beforePain}</span>
                    </div>

                    <div className="pt-1.5">
                      <span className="font-bold text-slate-900 uppercase tracking-wider block mb-1">ForgePoint AI Upgrade:</span>
                      <span className="text-slate-700 font-medium">{v.aiFix}</span>
                    </div>
                  </div>

                </div>

                <button 
                  onClick={onOpenModal}
                  className="mt-6 w-full py-3 rounded-xl bg-slate-900 hover:bg-orange-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
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
