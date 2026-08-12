import React, { useState } from 'react';
import { AlertCircle, CheckCircle, ArrowRight, Zap, TrendingUp, Users, DollarSign, Cpu, PhoneOff, Calendar, AlertTriangle } from 'lucide-react';

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState('after'); // 'before' | 'after' | 'split'

  const metrics = [
    {
      label: 'Call & Booking Response',
      before: '45% missed calls after hours',
      after: '24/7 AI Voice Agent (0 missed leads)',
      impact: '+120% Booking Rate',
    },
    {
      label: 'Dispatch & Fleet Routing',
      before: 'Manual phone calls & paper maps',
      after: 'Real-time AI Route & Fleet Optimization',
      impact: '35% Gas & Time Saved',
    },
    {
      label: 'Customer Retention & Reviews',
      before: 'Untracked reviews, lost customers',
      after: 'Automated SMS Care & 4.9 Star Booster',
      impact: '98% Retention Rate',
    },
    {
      label: 'Profit Margin',
      before: '8% - 12% slim survival margins',
      after: '38% - 45% high-efficiency margins',
      impact: '3.8x Profit Expansion',
    },
  ];

  return (
    <section id="transformation" className="py-24 bg-[#0a0d14] relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-pill">
            <span>THE FORGEPOINT TRANSFORMATION</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-['Outfit']">
            From Struggling Service Shop to{' '}
            <span className="gradient-forge">Smart Service Powerhouse</span>
          </h2>
          <p className="text-slate-400 text-lg">
            See how ForgePoint AI rewires daily operations, customer acquisition, and profitability.
          </p>
        </div>

        {/* Comparison Graphic Card */}
        <div className="glass-card p-6 md:p-10 mb-12 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Visualizer */}
            <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-slate-700/80">
              <img 
                src="/transformation.jpg" 
                alt="Service Business Before and After AI Transformation" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs font-bold uppercase tracking-wider text-white">
                <span className="bg-red-950/80 px-3 py-1 rounded border border-red-500/40 text-red-300">BEFORE: Struggling Business</span>
                <span className="bg-cyan-950/80 px-3 py-1 rounded border border-cyan-500/40 text-cyan-300">AFTER: Smart Service AI</span>
              </div>
            </div>

            {/* Interactive Metrics Switcher */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Tab Selector */}
              <div className="flex bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
                <button
                  onClick={() => setActiveTab('before')}
                  className={`flex-1 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${
                    activeTab === 'before'
                      ? 'bg-red-500/20 text-red-400 border border-red-500/40 shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  BEFORE FORGEPOINT
                </button>
                <button
                  onClick={() => setActiveTab('after')}
                  className={`flex-1 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${
                    activeTab === 'after'
                      ? 'bg-gradient-to-r from-[#ff5500] to-[#ffaa00] text-white shadow-lg'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  AFTER FORGEPOINT AI
                </button>
              </div>

              {/* Dynamic Content Display */}
              <div className="space-y-4">
                {metrics.map((metric, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 rounded-xl border transition-all ${
                      activeTab === 'before'
                        ? 'bg-red-950/10 border-red-900/30'
                        : 'bg-slate-900/80 border-slate-800 hover:border-[#ff5500]/40'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {metric.label}
                      </span>
                      {activeTab === 'after' && (
                        <span className="text-xs font-extrabold text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded border border-[#00f0ff]/20">
                          {metric.impact}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      {activeTab === 'before' ? (
                        <>
                          <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
                          <span className="text-slate-300 font-medium text-sm md:text-base">
                            {metric.before}
                          </span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                          <span className="text-white font-semibold text-sm md:text-base">
                            {metric.after}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Callout */}
              <div className="p-4 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/30 flex items-center gap-3">
                <Zap className="w-6 h-6 text-[#ff5500] shrink-0" />
                <p className="text-xs md:text-sm text-slate-200">
                  <strong className="text-white">Noticeable Revival within 30 Days:</strong> We preserve existing staff, upgrade their toolkit with AI voice & dispatch agents, and immediately double cash flow.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* 4 Pillars Grid from Spec Image (GROWTH, HAPPIER CUSTOMERS, HIGHER PROFITS, SMARTER OPERATIONS) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-card p-6 text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-2 border border-blue-500/30">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-lg text-white font-['Outfit']">GROWTH</h4>
            <p className="text-xs text-slate-400">Consistent multi-branch scalability</p>
          </div>

          <div className="glass-card p-6 text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-2 border border-emerald-500/30">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-lg text-white font-['Outfit']">HAPPIER CUSTOMERS</h4>
            <p className="text-xs text-slate-400">Instant booking & 5-star service</p>
          </div>

          <div className="glass-card p-6 text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-2 border border-amber-500/30">
              <DollarSign className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-lg text-white font-['Outfit']">HIGHER PROFITS</h4>
            <p className="text-xs text-slate-400">Eliminate wasted overhead</p>
          </div>

          <div className="glass-card p-6 text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-2 border border-cyan-500/30">
              <Cpu className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-lg text-white font-['Outfit']">SMARTER OPERATIONS</h4>
            <p className="text-xs text-slate-400">Autonomous workflow engine</p>
          </div>
        </div>

      </div>
    </section>
  );
}
