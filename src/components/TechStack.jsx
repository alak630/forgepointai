import React from 'react';
import { PhoneCall, Navigation, DollarSign, Star, Bot, Cpu } from 'lucide-react';

export default function TechStack() {
  const modules = [
    {
      title: '24/7 AI Voice Receptionist',
      icon: PhoneCall,
      desc: 'Never miss a late-night plumbing leak or weekend customer request. Our natural human voice AI answers within 2 rings, provides quotes, and books calendar slots directly.',
      badge: '100% Lead Capture',
      accent: '#c2410c',
      bgLight: '#fff7ed',
      borderLight: '#ffedd5',
    },
    {
      title: 'Smart Fleet & Dispatch AI',
      icon: Navigation,
      desc: 'Dynamic GPS route planning calculates real-time traffic, technician skills, and parts availability to assign the fastest route, reducing fuel costs by 35%.',
      badge: '35% Less Fuel Expense',
      accent: '#2563eb',
      bgLight: '#eff6ff',
      borderLight: '#dbeafe',
    },
    {
      title: 'Dynamic Pricing Engine',
      icon: DollarSign,
      desc: 'Smart yield algorithms automatically adjust service pricing during peak demand or emergency weekend slots, maximizing revenue per job.',
      badge: '+42% Margin Boost',
      accent: '#059669',
      bgLight: '#ecfdf5',
      borderLight: '#d1fae5',
    },
    {
      title: 'Automated CRM & 5-Star Booster',
      icon: Star,
      desc: 'Post-service automated SMS sends digital receipts and prompts satisfied customers for 5-star Google/Yelp reviews, multiplying local search ranking.',
      badge: '4.9 Star Rating Average',
      accent: '#d97706',
      bgLight: '#fffbeb',
      borderLight: '#fef3c7',
    },
  ];

  return (
    <section id="tech" className="py-20 sm:py-28 bg-white border-b border-slate-200 relative">
      
      <div className="container relative z-10 px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="badge-pill">
            <Bot className="w-3.5 h-3.5" />
            <span>OPERATIONAL TECHNOLOGY PLATFORM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">
            Proprietary AI Systems That <span className="text-orange-700">Drive Value Creation</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-['Inter']">
            We don't replace frontline staff—we equip them with enterprise AI tools that handle scheduling, route planning, billing, and customer acquisition.
          </p>
        </div>

        {/* 4 Tech Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {modules.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div 
                key={idx}
                className="corporate-card p-6 sm:p-8 flex flex-col justify-between bg-white border border-slate-200 hover:border-slate-300 shadow-sm relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-xs"
                      style={{ 
                        backgroundColor: m.bgLight,
                        borderColor: m.borderLight,
                        color: m.accent
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span 
                      className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border"
                      style={{ 
                        backgroundColor: m.bgLight,
                        borderColor: m.borderLight,
                        color: m.accent
                      }}
                    >
                      {m.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">
                    {m.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-['Inter']">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500 font-['Inter']">
                  <Cpu className="w-4 h-4 text-blue-700" />
                  <span>Fully integrated upon ForgePoint acquisition</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
