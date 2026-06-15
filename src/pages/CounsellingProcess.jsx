import React from 'react';
import { Link } from 'react-router-dom';

const steps = [
  {
    n: '01', title: 'Register & Pay ₹2499',
    desc: 'Fill your name, mobile, email, and CET percentile. Complete secure payment via Razorpay.',
    points: ['Takes under 5 minutes', 'Pay via UPI, card, or net banking', 'Receive Counselling ID (e.g. MHCETAM0001) instantly', 'Confirmation email sent to your inbox'],
  },
  {
    n: '02', title: 'WhatsApp Onboarding',
    desc: 'After registration, check WhatsApp on your registered number. Ankush Mayachari will reach out directly.',
    points: ['Share your category, domicile, and preferences', 'Discuss college and branch priorities', 'Get added to counselling guidance flow', 'Receive personalised college shortlist'],
  },
  {
    n: '03', title: 'CAP Round Strategy',
    desc: 'Get a clear, data-backed strategy for choice filling in CAP Round 1, 2, and 3.',
    points: ['5-year cutoff analysis for shortlisted colleges', 'Category-wise seat availability', 'Recommended choice order', 'Realistic vs reach vs safe categories'],
  },
  {
    n: '04', title: 'CAP Round 1 Choice Filling',
    desc: 'Guided step-by-step through the MHT-CET CAP portal for Round 1 submission.',
    points: ['Portal walkthrough support', 'Exact priority order guidance', 'Last-minute adjustments before deadline', 'What to expect after allotment'],
  },
  {
    n: '05', title: 'Round 2 & 3 (if needed)',
    desc: 'Based on Round 1 results, strategy is adjusted — whether to freeze, float, or upgrade.',
    points: ['Round 1 allotment analysis', 'Upgrade vs freeze guidance', 'New choices for Round 2 if needed', 'Round 3 final strategy'],
  },
  {
    n: '06', title: 'Admission & Document Verification',
    desc: 'Final guidance for reporting to the college and completing the formal admission process.',
    points: ['Document checklist provided', 'Reporting process guidance', 'Fee payment walkthrough', 'Spot round support if still needed'],
  },
];

export default function CounsellingProcess() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-tag">The Process</div>
          <h1 className="section-heading text-3xl sm:text-4xl mb-3">Step-by-Step Counselling</h1>
          <p className="text-slate-400 max-w-md mx-auto">A clear roadmap — from registration to confirmed admission.</p>
        </div>

        <div className="flex flex-col gap-0">
          {steps.map(({ n, title, desc, points }, idx) => (
            <div key={n} className="flex gap-5">
              {/* Stepper */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center shrink-0">
                  <span className="text-white font-mono font-bold text-sm">{n}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-px flex-1 mt-2 mb-0 bg-slate-800" style={{minHeight:'32px'}} />
                )}
              </div>
              {/* Content */}
              <div className={`pb-10 flex-1 ${idx === steps.length - 1 ? 'pb-0' : ''}`}>
                <h3 className="text-white font-semibold text-lg mb-1.5" style={{fontFamily:'Syne,sans-serif'}}>{title}</h3>
                <p className="text-slate-400 text-sm mb-3 leading-relaxed">{desc}</p>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <ul className="flex flex-col gap-2">
                    {points.map(p => (
                      <li key={p} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-teal-500 shrink-0 mt-0.5">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/register" className="btn-primary text-base py-3.5 px-10">Register Now — ₹2499</Link>
        </div>
      </div>
    </div>
  );
}
