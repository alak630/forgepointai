import React, { useState } from 'react';
import { Search, Brain, Cpu, TrendingUp, RefreshCw, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Playbook() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'acquire',
      num: '1',
      title: 'ACQUIRE',
      icon: Search,
      tagline: 'Proprietary deal sourcing & 14-day diligence closing timeline.',
      detail: 'We identify and acquire independent service businesses with strong local reputation but operational bottlenecks across HVAC, plumbing, laundry, housekeeping, and home services.',
      deliverables: [
        'Fair cash buyout valuation & flexible owner transition terms',
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
      tagline: '7-day operational diagnostic uncovers revenue leakage & bottlenecks.',
      detail: 'Our diagnostic AI suite analyzes historical booking logs, missed call rates, dispatch routes, pricing elasticity, and inventory burn to formulate an immediate value-creation blueprint.',
      deliverables: [
        'Missed Revenue Opportunity Audit & Call Leakage Report',
        'Customer Churn & Lead Response Analysis',
        'Fleet & Technician Route Optimization Blueprint',
      ],
      aiTool: 'ForgePoint Diagnostic AI™ - Operational Audit Suite',
    },
    {
      id: 'transform',
      num: '3',
      title: 'TRANSFORM',
      icon: Cpu,
      tagline: 'Deploying autonomous AI voice, dispatch, and pricing software.',
      detail: 'We integrate custom AI receptionists, automated dispatch software, instant quote engines, and digital inventory systems—giving frontline workers super-tools while eliminating backend friction.',
      deliverables: [
        '24/7 AI Voice & SMS Booking Agent (zero missed leads)',
        'Smart Fleet & Technician Route Optimizer',
        'Automated Invoicing & Review Booster',
      ],
      aiTool: 'ForgePoint Core Engine™ - Autonomous Dispatch & Voice AI',
    },
    {
      id: 'grow',
      num: '4',
      title: 'GROW',
      icon: TrendingUp,
      tagline: 'Expanding EBITDA margins and building recurring revenue.',
      detail: 'With operational bottlenecks cleared, we launch targeted hyperlocal AI marketing, dynamic pricing during peak hours, and membership subscriptions to create predictable recurring cash flow.',
      deliverables: [
        '3x to 5x EBITDA Expansion',
        'Annual Service Contract Membership Subscriptions',
        '4.9 Star Reputation Across Search & Directory Platforms',
      ],
      aiTool: 'ForgePoint GrowthAI™ - Dynamic Pricing & Campaign Engine',
    },
    {
      id: 'repeat',
      num: '5',
      title: 'REPEAT',
      icon: RefreshCw,
      tagline: 'Building regional multi-unit service clusters.',
      detail: 'We integrate newly transformed service branches into regional service clusters, lowering supply costs, sharing administrative AI overhead, and building a durable institutional asset portfolio.',
      deliverables: [
        'Regional Service Cluster Synergies',
        'Shared AI Operations Center Overhead',
        'Institutional Portfolio Valuation Scaling',
      ],
      aiTool: 'ForgePoint PortfolioOS™ - Multi-Unit Management Platform',
    },
  ];

  return (
    <section id="playbook" className="py-20 sm:py-28 bg-white border-b border-slate-200 relative">
      
      <div className="container relative z-10 px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="badge-pill-blue">
            <span>METHODOLOGY & EXECUTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">
            OUR 5-STEP VALUE CREATION <span className="text-orange-700">PLAYBOOK</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-['Inter']">
            A systematic M&A blueprint designed to modernize small service companies into high-profit market leaders.
          </p>
        </div>

        {/* 5-Step Stepper Cards Header */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8 sm:mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                  isActive
                    ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-orange-600" />
                )}
                
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold ${isActive ? 'text-orange-400' : 'text-slate-500'}`}>
                    PHASE 0{step.num}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
                </div>

                <div className={`font-extrabold text-sm sm:text-base font-['Plus_Jakarta_Sans'] ${isActive ? 'text-white' : 'text-slate-900'}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <div className="corporate-card p-6 sm:p-10 md:p-12 bg-white border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Step Overview */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-xl bg-orange-100 text-orange-800 border border-orange-200 flex items-center justify-center font-extrabold text-xl font-['Plus_Jakarta_Sans'] shrink-0">
                  {steps[activeStep].num}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">
                    Phase {steps[activeStep].num}: {steps[activeStep].title}
                  </h3>
                  <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                    {steps[activeStep].aiTool}
                  </div>
                </div>
              </div>

              <p className="text-lg font-semibold text-slate-800 leading-snug font-['Plus_Jakarta_Sans']">
                "{steps[activeStep].tagline}"
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-['Inter']">
                {steps[activeStep].detail}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Key Execution Pillars:</div>
                {steps[activeStep].deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3 text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-orange-700 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium font-['Inter']">{item}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right: Visual Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6 relative">
                
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phase Benchmark</span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded border border-emerald-200">
                    Active Module
                  </span>
                </div>

                <div className="space-y-4 font-['Inter']">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Implementation Speed</span>
                    <span className="font-bold text-slate-900">Under 14 Days</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-900 w-4/5 rounded-full" />
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 font-medium">Frontline Staff Retention</span>
                    <span className="font-bold text-emerald-700">100% Retained</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 font-medium">Admin Overhead Reduction</span>
                    <span className="font-bold text-blue-700">-64% Admin Cost</span>
                  </div>
                </div>

                <button 
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="w-full py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm flex items-center justify-center gap-2 border border-slate-300 transition-colors shadow-sm"
                >
                  <span>Explore Next Phase</span>
                  <ChevronRight className="w-4 h-4 text-orange-700" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
