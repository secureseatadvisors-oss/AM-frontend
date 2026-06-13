import React from 'react';
import { Link } from 'react-router-dom';

const Check = () => (
  <svg className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

export default function Pricing() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-tag">Pricing</div>
          <h1 className="section-heading text-3xl sm:text-4xl mb-3">One Plan. Everything Included.</h1>
          <p className="text-slate-400 max-w-lg mx-auto">No tiers. No upsells. One registration covers you through the entire 2026 counselling process.</p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-br from-teal-700 to-teal-600 p-8 text-center">
              <div className="text-white/80 text-sm font-medium mb-2">MHT-CET 2026 Complete Counselling</div>
              <div className="flex items-end justify-center gap-2">
                <span className="text-white/50 text-xl line-through">₹2,999</span>
                <span className="text-white font-bold leading-none" style={{fontFamily:'Syne,sans-serif', fontSize:'52px'}}>₹999</span>
              </div>
              <div className="text-teal-100 text-sm mt-2">One-time · All inclusive</div>
            </div>

            {/* Features */}
            <div className="p-8">
              <div className="flex flex-col gap-3 mb-8">
                {[
                  'Personalised college shortlisting',
                  'CAP Round 1, 2 & 3 guidance',
                  'Choice filling strategy',
                  'Branch selection counselling',
                  'Category-wise seat analysis',
                  'Document checklist & support',
                  'WhatsApp support throughout',
                  'Spot round & direct admission guidance',
                  'Previous year cutoff analysis',
                  'Unique Counselling ID (MHCETAM____)',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <Check />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/register" className="btn-primary w-full justify-center py-4 text-base">
                Register Now — ₹999
              </Link>
              <p className="text-center text-slate-500 text-xs mt-3">
                Secure payment via Razorpay · Instant Counselling ID
              </p>
            </div>
          </div>
        </div>

        {/* FAQ nudge */}
        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
          <p className="text-slate-400 text-sm mb-3">Have questions before registering?</p>
          <div className="flex gap-3 justify-center">
            <Link to="/faq" className="btn-outline text-sm py-2">Read FAQ</Link>
            <Link to="/contact" className="btn-outline text-sm py-2">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
