import React, { useState } from 'react';
import { AlertCircle, CheckCircle, ArrowRight, Zap, TrendingUp, Users, DollarSign, Cpu, AlertTriangle } from 'lucide-react';

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState('after'); // 'before' | 'after'

  const metrics = [
    {
      label: 'Call & Booking Response',
      before: '45% missed calls after business hours & weekends',
      after: '24/7 Voice AI Agent (100% lead capture & instant booking)',
      impact: '+120% Booking Growth',
    },
    {
      label: 'Dispatch & Fleet Routing',
      before: 'Manual dispatch calls, paper schedules & wasted fuel',
      after: 'Real-time AI Fleet & Route Optimization',
      impact: '35% Reduced Overhead',
    },
    {
      label: 'Customer Retention & Reviews',
      before: 'Untracked feedback, unmanaged customer churn',
      after: 'Automated Post-Service Care & 4.9 Star Reputation Engine',
      impact: '98% Client Retention',
    },
    {
      label: 'EBITDA Profit Margin',
      before: '8% - 12% survival margins, high administrative drag',
      after: '36% - 42% operational margins post-AI integration',
      impact: '3.5x EBITDA Expansion',
    },
  ];

  return (
    <section id="transformation" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200 relative">
      <div className="container px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="badge-pill">
            <span>OPERATIONAL VALUE CREATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">
            Transforming Legacy Operations into{' '}
            <span className="text-orange-700">High-Margin Enterprises</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-['Inter']">
            See how ForgePoint AI rewires customer acquisition, dispatch workflow, and profitability within 30 days of acquisition.
          </p>
        </div>

        {/* Comparison Graphic Card */}
        <div className="corporate-card p-5 sm:p-8 md:p-10 mb-12 relative overflow-hidden bg-white border border-slate-200 shadow-md">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Visualizer */}
            <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <img 
                src="/transformation.jpg" 
                alt="Service Business Before and After AI Transformation" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-col sm:flex-row justify-between gap-2 text-xs font-bold uppercase tracking-wider text-white">
                <span className="bg-slate-900/90 px-3 py-1.5 rounded border border-slate-700 text-slate-200 text-center">BEFORE: Legacy Operation</span>
                <span className="bg-orange-800/90 px-3 py-1.5 rounded border border-orange-600 text-white text-center">AFTER: Operational AI Integration</span>
              </div>
            </div>

            {/* Interactive Metrics Switcher */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Tab Selector */}
              <div className="flex bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                <button
                  onClick={() => setActiveTab('before')}
                  className={`flex-1 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${
                    activeTab === 'before'
                      ? 'bg-rose-100 text-rose-800 border border-rose-200 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  LEGACY OPERATIONS
                </button>
                <button
                  onClick={() => setActiveTab('after')}
                  className={`flex-1 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${
                    activeTab === 'after'
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  FORGEPOINT AI INTEGRATION
                </button>
              </div>

              {/* Dynamic Content Display */}
              <div className="space-y-3.5">
                {metrics.map((metric, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 rounded-xl border transition-all ${
                      activeTab === 'before'
                        ? 'bg-rose-50/50 border-rose-200'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {metric.label}
                      </span>
                      {activeTab === 'after' && (
                        <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                          {metric.impact}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      {activeTab === 'before' ? (
                        <>
                          <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                          <span className="text-slate-700 font-medium text-sm sm:text-base">
                            {metric.before}
                          </span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                          <span className="text-slate-900 font-semibold text-sm sm:text-base">
                            {metric.after}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Callout */}
              <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 flex items-center gap-3">
                <Zap className="w-5 h-5 text-orange-700 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-800 font-['Inter']">
                  <strong className="text-slate-900 font-bold">100% Employee Retention:</strong> We preserve frontline staff, upgrade their toolkit with AI receptionists & dispatch agents, and expand enterprise margins.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="corporate-card p-6 text-center space-y-2 bg-white">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto mb-2 border border-blue-200">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-base sm:text-lg text-slate-900 font-['Plus_Jakarta_Sans']">SCALABILITY</h4>
            <p className="text-xs text-slate-500 font-['Inter']">Multi-branch cluster expansion</p>
          </div>

          <div className="corporate-card p-6 text-center space-y-2 bg-white">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-2 border border-emerald-200">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-base sm:text-lg text-slate-900 font-['Plus_Jakarta_Sans']">CLIENT EXPERIENCE</h4>
            <p className="text-xs text-slate-500 font-['Inter']">Instant response & 5-star service</p>
          </div>

          <div className="corporate-card p-6 text-center space-y-2 bg-white">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-800 flex items-center justify-center mx-auto mb-2 border border-orange-200">
              <DollarSign className="w-6 h-6 text-orange-700" />
            </div>
            <h4 className="font-extrabold text-base sm:text-lg text-slate-900 font-['Plus_Jakarta_Sans']">MARGIN EXPANSION</h4>
            <p className="text-xs text-slate-500 font-['Inter']">Eliminate operational drag</p>
          </div>

          <div className="corporate-card p-6 text-center space-y-2 bg-white">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mx-auto mb-2 border border-slate-200">
              <Cpu className="w-6 h-6 text-slate-700" />
            </div>
            <h4 className="font-extrabold text-base sm:text-lg text-slate-900 font-['Plus_Jakarta_Sans']">AUTONOMOUS ENGINE</h4>
            <p className="text-xs text-slate-500 font-['Inter']">Standardized operational workflow</p>
          </div>
        </div>

      </div>
    </section>
  );
}
