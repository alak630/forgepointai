import React, { useState } from 'react';
import { X, Layers, CheckCircle2, ArrowRight, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DealSubmissionModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    vertical: 'plumbing',
    revenue: '$25,000 - $50,000 / mo',
    location: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#c2410c', '#2563eb', '#0f172a']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto overscroll-contain">
      <div className="relative w-full max-w-2xl max-h-[90dvh] overflow-y-auto overscroll-contain bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl my-auto font-['Inter']">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">
              Valuation Request Initiated!
            </h3>

            <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
              Thank you, <strong className="text-slate-900">{formData.ownerName || 'Partner'}</strong>. Our M&A valuation team is evaluating <strong className="text-blue-700">{formData.businessName || 'your business'}</strong>. We will reach out within <strong className="text-orange-700">24 hours</strong> with an initial indicative valuation.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>Strict 100% Confidentiality & Non-Disclosure Protocol Active</span>
            </div>

            <button 
              onClick={() => { setSubmitted(false); onClose(); }}
              className="btn-primary"
            >
              <span>Return to Website</span>
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-800 border border-orange-200 flex items-center justify-center">
                <Layers className="w-5 h-5 text-orange-700" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">
                  Confidential Business Valuation Request
                </h3>
                <p className="text-xs text-slate-500">
                  Receive a non-binding cash acquisition quote within 24 hours.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold text-slate-700">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-slate-700">Business Name *</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Metro Plumbing & Heating"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:border-orange-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-slate-700">Owner / Manager Name *</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. John Miller"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:border-orange-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-slate-700">Phone Number *</label>
                  <input 
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:border-orange-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-slate-700">Email Address *</label>
                  <input 
                    type="email"
                    required
                    placeholder="owner@servicecompany.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:border-orange-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-slate-700">Service Industry Sector *</label>
                  <select 
                    value={formData.vertical}
                    onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:border-orange-600 focus:outline-none"
                  >
                    <option value="plumbing">Plumbing & HVAC</option>
                    <option value="laundry">Laundry & Dry Cleaning</option>
                    <option value="salon">Salon & Beauty Spa</option>
                    <option value="housekeeping">Housekeeping & Cleaning</option>
                    <option value="domestic">Domestic Help & Home Care</option>
                    <option value="electrical">Electrical & Handyman</option>
                    <option value="other">Other Service Business</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-1 text-slate-700">Estimated Monthly Revenue</label>
                  <select 
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:border-orange-600 focus:outline-none"
                  >
                    <option value="Under $25k/mo">Under $25,000 / month</option>
                    <option value="$25k - $50k/mo">$25,000 - $50,000 / month</option>
                    <option value="$50k - $100k/mo">$50,000 - $100,000 / month</option>
                    <option value="$100k+/mo">$100,000+ / month</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-1 text-slate-700">Location (City, State / Country)</label>
                <input 
                  type="text"
                  placeholder="e.g. Austin, TX"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:border-orange-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-700">Owner Goals / Primary Objective</label>
                <textarea 
                  rows="3"
                  placeholder="Describe your current business operations or desired transaction structure..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:border-orange-600 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="btn-primary w-full justify-center text-sm py-3.5 shadow-md">
                  <span>Submit Confidential Business Valuation Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
