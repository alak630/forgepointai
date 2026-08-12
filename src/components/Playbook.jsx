import React, { useState } from 'react';
import { Search, Brain, Cpu, TrendingUp, RefreshCw, ChevronRight, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Playbook() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'acquire',
      num: '1',
      title: 'ACQUIRE',
      icon: Search,
      tagline: 'We identify and acquire small or struggling service businesses with strong potential.',
      detail: 'Our proprietary deal pipeline scans local service verticals (plumbing, salons, laundry, housekeeping, HVAC, domestic help). We target businesses with solid local reputation but operational bottlenecks.',
      deliverables: [
        'Fair cash valuation & flexible exit terms for founders',
        'Speedy 14-day diligence & closing timeline',
        '100% operational continuity & job security for frontline staff',
      ],
      aiTool: 'ForgePoint DealScanner AI™ - Proprietary Valuation Engine',
    },
    {
      id: 'assess',
      num: '2',
      title: 'ASSESS',
      icon: Brain,
      tagline: 'AI-driven analysis uncovers inefficiencies, opportunities, and the highest impact areas for improvement.',
      detail: 'Within 7 days of closing, our diagnostic AI suite analyzes historical booking logs, missed call rates, dispatch routes, pricing elasticity, and inventory burn to formulate a turnaround blueprint.',
      deliverables: [
        'Missed Revenue Opportunity Heatmap',
        'Customer Churn & Lead Leakage Audit',
        'Cost Structure & Fleet Optimization Plan',
      ],
      aiTool: 'ForgePoint Diagnostic AI™ - Operational Audit Suite',
    },
    {
      id: 'transform',
      num: '3',
      title: 'TRANSFORM',
      icon: Cpu,
      tagline: 'We implement AI solutions to streamline operations, automate workflows, and empower teams.',
      detail: 'We deploy custom AI receptionists, automated dispatch software, instant quote engines, and digital inventory systems—giving frontline workers super-tools while eliminating backend friction.',
      deliverables: [
        '24/7 AI Voice & SMS Lead Booking Bot (zero missed calls)',
        'Smart Fleet & Technician Route Optimizer',
        'Automated Invoice & Review Generation System',
      ],
      aiTool: 'ForgePoint Core Engine™ - Voice AI & Route Automation',
    },
    {
      id: 'grow',
      num: '4',
      title: 'GROW',
      icon: TrendingUp,
      tagline: 'The business becomes more efficient, customer-focused, and profitable—positioned for long-term growth.',
      detail: 'With operational bottlenecks cleared, we launch targeted hyperlocal AI marketing, dynamic pricing during peak hours, and membership subscriptions to create predictable recurring revenue.',
      deliverables: [
        '3x to 5x EBITDA Expansion',
        'Recurring Annual Service Contract Memberships',
        '4.9 Star Reputation across Google & Yelp',
      ],
      aiTool: 'ForgePoint GrowthAI™ - Dynamic Pricing & Campaign Engine',
    },
    {
      id: 'repeat',
      num: '5',
      title: 'REPEAT',
      icon: RefreshCw,
      tagline: 'We build a portfolio of strong businesses creating lasting value for our team and partners.',
      detail: 'We integrate newly transformed service branches into regional service clusters, lowering supply costs, sharing administrative AI overhead, and building a durable asset portfolio.',
      deliverables: [
        'Regional Service Cluster Synergies',
        'Shared AI Operations Center',
        'Exponential Enterprise Valuation Scaling',
      ],
      aiTool: 'ForgePoint PortfolioOS™ - Multi-Unit Management Platform',
    },
  ];

  return (
    <section id="playbook" className="py-24 bg-[#07090e] relative overflow-hidden">
      
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#ff5500]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-pill">
            <span>OUR PROVEN METHODOLOGY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-['Outfit']">
            OUR AI-POWERED TRANSFORMATION <span className="gradient-forge">PLAYBOOK</span>
          </h2>
          <p className="text-slate-400 text-lg">
            A systematic 5-step blueprint designed to revitalize small service businesses into high-profit market leaders.
          </p>
        </div>

        {/* 5-Step Stepper Cards Header */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-3 sm:p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-b from-[#1c2336] to-[#0e121d] border-[#ff5500] shadow-lg shadow-orange-950/40'
                    : 'bg-[#0d111a]/80 border-slate-800 hover:border-slate-700 hover:bg-[#131926]'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff5500] to-[#ffaa00]" />
                )}
                
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className={`text-[10px] sm:text-xs font-black font-['Outfit'] ${isActive ? 'text-[#ff5500]' : 'text-slate-500'}`}>
                    STEP 0{step.num}
                  </span>
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'text-[#00f0ff]' : 'text-slate-400'}`} />
                </div>

                <div className={`font-extrabold text-xs sm:text-base font-['Outfit'] ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <div className="glass-card p-5 sm:p-8 md:p-12 relative border-[#ff5500]/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left: Step Overview */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/40 flex items-center justify-center font-extrabold text-lg sm:text-xl font-['Outfit'] shrink-0">
                  {steps[activeStep].num}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-['Outfit']">
                    {steps[activeStep].num}. {steps[activeStep].title}
                  </h3>
                  <div className="text-[10px] sm:text-xs font-bold text-[#00f0ff] uppercase tracking-wider">
                    {steps[activeStep].aiTool}
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-xl font-semibold text-slate-100 leading-snug">
                "{steps[activeStep].tagline}"
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {steps[activeStep].detail}
              </p>

              <div className="space-y-2.5 sm:space-y-3 pt-2">
                <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-400">Key Execution Pillars:</div>
                {steps[activeStep].deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 sm:gap-3 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff5500] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right: Visual Card */}
            <div className="lg:col-span-5">
              <div className="p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-[#131927] to-[#0a0d14] border border-slate-700/80 space-y-5 sm:space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-[#00f0ff]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-slate-800 pb-3.5 sm:pb-4">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">Phase Benchmark</span>
                  <span className="text-[10px] sm:text-xs font-extrabold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-emerald-500/30">
                    Active Module
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Implementation Speed</span>
                    <span className="font-bold text-white">Under 14 Days</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#ff5500] to-[#00f0ff] w-4/5 rounded-full" />
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Human Capital Retention</span>
                    <span className="font-bold text-emerald-400">100% Staff Preserved</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Tech Overhead Reduction</span>
                    <span className="font-bold text-[#00f0ff]">-64% Admin Cost</span>
                  </div>
                </div>

                <button 
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="w-full py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                >
                  <span>Explore Next Step</span>
                  <ChevronRight className="w-4 h-4 text-[#ff5500]" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
