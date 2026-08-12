import React from 'react';
import { PhoneCall, Navigation, DollarSign, Star, Bot, Cpu, Zap, ShieldCheck } from 'lucide-react';

export default function TechStack() {
  const modules = [
    {
      title: '24/7 AI Voice Receptionist',
      icon: PhoneCall,
      desc: 'Never miss a late-night plumbing leak or weekend salon request. Our natural human voice AI answers within 2 rings, provides quotes, and books calendar slots directly.',
      badge: 'Zero Missed Leads',
      color: '#ff5500',
    },
    {
      title: 'Smart Fleet & Dispatch AI',
      icon: Navigation,
      desc: 'Dynamic GPS route planning calculates real-time traffic, technician skills, and parts availability to assign the fastest route, reducing fuel costs by 35%.',
      badge: '35% Less Fuel Expense',
      color: '#00f0ff',
    },
    {
      title: 'Dynamic Pricing Engine',
      icon: DollarSign,
      desc: 'Smart yield algorithms automatically adjust service pricing during peak demand or emergency weekend slots, maximizing revenue per job.',
      badge: '+42% Margin Boost',
      color: '#10b981',
    },
    {
      title: 'Automated CRM & 5-Star Booster',
      icon: Star,
      desc: 'Post-service automated SMS sends digital receipts and prompts satisfied customers for 5-star Google/Yelp reviews, multiplying local search ranking.',
      badge: '4.9 Star Rating Average',
      color: '#ffaa00',
    },
  ];

  return (
    <section id="tech" className="py-24 bg-[#07090e] relative overflow-hidden">
      
      {/* Background ambient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-pill">
            <Bot className="w-3.5 h-3.5" />
            <span>THE FORGEPOINT PROPRIETARY ENGINE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-['Outfit']">
            AI Technology That <span className="gradient-forge">Powers The Revival</span>
          </h2>
          <p className="text-slate-400 text-lg">
            We don't replace frontline staff—we equip them with high-powered AI systems that handle scheduling, route planning, billing, and customer acquisition.
          </p>
        </div>

        {/* 4 Tech Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {modules.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div 
                key={idx}
                className="glass-card p-8 flex flex-col justify-between border-slate-800 hover:border-[#ff5500]/40 relative overflow-hidden group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-lg"
                      style={{ 
                        backgroundColor: `${m.color}15`,
                        borderColor: `${m.color}40`,
                        color: m.color
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span 
                      className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border"
                      style={{ 
                        backgroundColor: `${m.color}10`,
                        borderColor: `${m.color}30`,
                        color: m.color
                      }}
                    >
                      {m.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white font-['Outfit']">
                    {m.title}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs font-bold text-slate-400">
                  <Cpu className="w-4 h-4 text-[#00f0ff]" />
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
