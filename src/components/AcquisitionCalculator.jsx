import React, { useState } from 'react';
import { Calculator, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AcquisitionCalculator({ onOpenModal }) {
  const [vertical, setVertical] = useState('plumbing');
  const [revenue, setRevenue] = useState(45000); // monthly revenue
  const [teamSize, setTeamSize] = useState(8);
  const [bottleneck, setBottleneck] = useState('calls');

  // Calculation Logic
  const annualRevenue = revenue * 12;
  
  // Base multiple: 1.8x to 2.8x annual revenue
  const buyoutLow = Math.round((annualRevenue * 1.6) / 5000) * 5000;
  const buyoutHigh = Math.round((annualRevenue * 2.8) / 5000) * 5000;

  // Revived Monthly Revenue under ForgePoint AI
  const revivedRevenue = Math.round(revenue * 2.85);
  const marginJump = 36; // 36% margin

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#c2410c', '#2563eb', '#0f172a']
    });
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200 relative">
      <div className="container px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="badge-pill-blue">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE VALUATION CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">
            Estimate Your Service Business <span className="text-orange-700">Cash Buyout Value</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-['Inter']">
            Use our estimation model to calculate your indicative cash payout and post-acquisition growth targets.
          </p>
        </div>

        {/* Calculator Grid Card */}
        <div className="corporate-card p-5 sm:p-8 md:p-12 bg-white border border-slate-200 shadow-md relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Inputs */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              
              {/* Vertical Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-['Inter']">
                  1. Select Service Industry Sector
                </label>
                <select 
                  value={vertical}
                  onChange={(e) => setVertical(e.target.value)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-semibold text-xs sm:text-sm focus:border-orange-600 focus:outline-none"
                >
                  <option value="plumbing">Plumbing & HVAC Service</option>
                  <option value="laundry">Laundry & Dry Cleaning</option>
                  <option value="salon">Salon & Wellness Spa</option>
                  <option value="housekeeping">Housekeeping & Cleaning</option>
                  <option value="domestic">Home Care & Domestic Help</option>
                  <option value="electrical">Electrical & Handyman</option>
                </select>
              </div>

              {/* Revenue Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider font-['Inter']">
                    2. Monthly Business Revenue
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-blue-700 font-['Plus_Jakarta_Sans']">
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
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-semibold mt-1.5 font-['Inter']">
                  <span>$10,000/mo</span>
                  <span>$125,000/mo</span>
                  <span>$250,000+/mo</span>
                </div>
              </div>

              {/* Team Size */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider font-['Inter']">
                    3. Team & Staff Size
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">
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
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Main Bottleneck */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-['Inter']">
                  4. Primary Operational Challenge
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-['Inter']">
                  <button
                    type="button"
                    onClick={() => setBottleneck('calls')}
                    className={`p-3 rounded-xl border text-left font-semibold transition-all ${
                      bottleneck === 'calls'
                        ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    📞 Unanswered Customer Calls
                  </button>
                  <button
                    type="button"
                    onClick={() => setBottleneck('dispatch')}
                    className={`p-3 rounded-xl border text-left font-semibold transition-all ${
                      bottleneck === 'dispatch'
                        ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    🗺️ Inefficient Technician Routes
                  </button>
                  <button
                    type="button"
                    onClick={() => setBottleneck('pricing')}
                    className={`p-3 rounded-xl border text-left font-semibold transition-all ${
                      bottleneck === 'pricing'
                        ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    💰 Slim Profit Margins
                  </button>
                  <button
                    type="button"
                    onClick={() => setBottleneck('reviews')}
                    className={`p-3 rounded-xl border text-left font-semibold transition-all ${
                      bottleneck === 'reviews'
                        ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    ⭐ Customer Churn
                  </button>
                </div>
              </div>

            </div>

            {/* Right Output Panel */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white space-y-6 shadow-xl relative">
                
                <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider bg-orange-950/60 px-3 py-1 rounded-full border border-orange-800/80">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>FORGEPOINT AI ESTIMATED VALUATION</span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Indicative Cash Buyout Range</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
                    ${buyoutLow.toLocaleString()} - ${buyoutHigh.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-400 font-['Inter']">100% upfront cash payout or custom equity rollover options</div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-slate-800 font-['Inter']">
                  <div className="p-3 sm:p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="text-[11px] text-slate-400 mb-1">Post-Acquisition Target</div>
                    <div className="text-base sm:text-xl font-bold text-emerald-400 font-['Plus_Jakarta_Sans']">
                      ${revivedRevenue.toLocaleString()} / mo
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="text-[11px] text-slate-400 mb-1">Target Margin</div>
                    <div className="text-base sm:text-xl font-bold text-orange-400 font-['Plus_Jakarta_Sans']">
                      ~{marginJump}% EBITDA
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300 pt-1 font-['Inter']">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% frontline team job security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>14 business days diligence & closing</span>
                  </div>
                </div>

                <button 
                  onClick={onOpenModal}
                  className="w-full py-4 rounded-xl btn-primary justify-center font-bold text-sm sm:text-base shadow-md"
                >
                  <span>Submit Business For Valuation</span>
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </button>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
