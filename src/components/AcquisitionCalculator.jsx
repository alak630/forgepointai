import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AcquisitionCalculator({ onOpenModal }) {
  const [vertical, setVertical] = useState('plumbing');
  const [revenue, setRevenue] = useState(45000); // monthly revenue
  const [teamSize, setTeamSize] = useState(8);
  const [bottleneck, setBottleneck] = useState('calls');

  // Calculation Logic
  const annualRevenue = revenue * 12;
  
  // Base multiple: 1.8x to 3.2x annual revenue
  const buyoutLow = Math.round((annualRevenue * 1.6) / 5000) * 5000;
  const buyoutHigh = Math.round((annualRevenue * 2.8) / 5000) * 5000;

  // Revived Monthly Revenue under ForgePoint AI (+220% avg)
  const revivedRevenue = Math.round(revenue * 2.85);
  const marginJump = 36; // 36% margin

  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ff5500', '#00f0ff', '#ffffff']
    });
  };

  return (
    <section id="calculator" className="py-24 bg-[#0a0d14] relative">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-pill-cyan">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE ACQUISITION CALCULATOR</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-['Outfit']">
            What Is Your Service Business <span className="gradient-ai">Worth to ForgePoint?</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Use our AI estimation model to see your potential cash payout and post-revival growth potential.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="glass-card p-8 md:p-12 border-[#00f0ff]/30 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Inputs */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Vertical Selector */}
              <div>
                <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider mb-2">
                  1. Select Service Industry
                </label>
                <select 
                  value={vertical}
                  onChange={(e) => setVertical(e.target.value)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-sm focus:border-[#00f0ff] focus:outline-none"
                >
                  <option value="plumbing">Plumbing & HVAC Service</option>
                  <option value="laundry">Laundry & Dry Cleaning</option>
                  <option value="salon">Salon & Beauty Spa</option>
                  <option value="housekeeping">Housekeeping & Cleaning</option>
                  <option value="domestic">Domestic Help & Home Care</option>
                  <option value="electrical">Electrical & Handyman</option>
                </select>
              </div>

              {/* Revenue Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">
                    2. Monthly Business Revenue
                  </label>
                  <span className="text-lg font-extrabold text-[#00f0ff] font-['Outfit']">
                    ${revenue.toLocaleString()} / mo
                  </span>
                </div>
                <input 
                  type="range"
                  min="10000"
                  max="250000"
                  step="5000"
                  value={revenue}
                  onChange={(e) => { setRevenue(Number(e.target.value)); triggerConfetti(); }}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-bold mt-1">
                  <span>$10,000/mo</span>
                  <span>$125,000/mo</span>
                  <span>$250,000+/mo</span>
                </div>
              </div>

              {/* Team Size */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">
                    3. Team & Staff Size
                  </label>
                  <span className="text-lg font-extrabold text-white font-['Outfit']">
                    {teamSize} Staff Members
                  </span>
                </div>
                <input 
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Main Bottleneck */}
              <div>
                <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider mb-2">
                  4. Current Primary Bottleneck
                </label>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <button
                    type="button"
                    onClick={() => setBottleneck('calls')}
                    className={`p-3 rounded-xl border text-left font-bold transition-all ${
                      bottleneck === 'calls'
                        ? 'bg-[#ff5500]/20 border-[#ff5500] text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    📞 Missed Phone Leads
                  </button>
                  <button
                    type="button"
                    onClick={() => setBottleneck('dispatch')}
                    className={`p-3 rounded-xl border text-left font-bold transition-all ${
                      bottleneck === 'dispatch'
                        ? 'bg-[#ff5500]/20 border-[#ff5500] text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    🗺️ Inefficient Dispatch
                  </button>
                  <button
                    type="button"
                    onClick={() => setBottleneck('pricing')}
                    className={`p-3 rounded-xl border text-left font-bold transition-all ${
                      bottleneck === 'pricing'
                        ? 'bg-[#ff5500]/20 border-[#ff5500] text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    💰 Low Profit Margins
                  </button>
                  <button
                    type="button"
                    onClick={() => setBottleneck('reviews')}
                    className={`p-3 rounded-xl border text-left font-bold transition-all ${
                      bottleneck === 'reviews'
                        ? 'bg-[#ff5500]/20 border-[#ff5500] text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    ⭐ Customer Churn
                  </button>
                </div>
              </div>

            </div>

            {/* Right Output Panel */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#121827] to-[#07090e] border border-slate-700 space-y-6 shadow-2xl relative">
                
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00f0ff] uppercase tracking-wider bg-[#00f0ff]/10 px-3 py-1 rounded-full border border-[#00f0ff]/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>FORGEPOINT AI ESTIMATED VALUATION</span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Estimated Cash Buyout Range</div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white font-['Outfit']">
                    ${buyoutLow.toLocaleString()} - ${buyoutHigh.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-400">100% upfront cash or custom equity rollover options available</div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-xs text-slate-400 mb-1">Post-Revival Monthly Target</div>
                    <div className="text-xl font-bold text-emerald-400 font-['Outfit']">
                      ${revivedRevenue.toLocaleString()} / mo
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-xs text-slate-400 mb-1">Target Profit Margin</div>
                    <div className="text-xl font-bold text-[#ff5500] font-['Outfit']">
                      ~{marginJump}% EBITDA
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Current team retention guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Closing within 14 business days</span>
                  </div>
                </div>

                <button 
                  onClick={onOpenModal}
                  className="w-full py-4 rounded-xl btn-primary text-center justify-center font-bold text-base shadow-xl"
                >
                  <span>Submit My Business For This Valuation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
