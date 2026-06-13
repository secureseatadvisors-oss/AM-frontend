import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  { q: 'Who is this counselling for?', a: 'Any student who has appeared in MHT-CET 2026 and wants to secure a seat in a Maharashtra engineering college through the CAP process.' },
  { q: 'What is included in ₹999?', a: 'Everything — college shortlisting, CAP Round 1/2/3 guidance, choice filling strategy, branch counselling, document checklist, and WhatsApp support throughout the season.' },
  { q: 'How will I receive the guidance?', a: 'After registering, Ankush Mayachari will connect with you on WhatsApp on your registered mobile number. All further guidance happens there.' },
  { q: 'What is the Counselling ID?', a: 'After payment, you receive a unique ID like MHCETAM0001. It is used to identify and track your registration. You need it to log in to your dashboard.' },
  { q: 'Do you cover all categories?', a: 'Yes — General, OBC, SC, ST, VJ, NT, SBC, and EWS. Category-specific seat analysis is part of the guidance.' },
  { q: 'How do I log in after registration?', a: 'Go to the Login page, enter your registered email, receive a 6-digit OTP, and enter it to access your dashboard. No password required.' },
  { q: 'What if I have questions during counselling season?', a: 'WhatsApp support is available on your registered number. During peak counselling weeks (CAP rounds), responses are prioritised.' },
  { q: 'Is the fee refundable?', a: 'Once counselling guidance has been initiated, refunds are not provided. Please reach out before registering if you have concerns.' },
  { q: 'Can I register before MHT-CET results?', a: 'Yes. You can register now and your counselling guidance will begin once results are announced and CAP dates are set.' },
  { q: 'Do you help with colleges outside Maharashtra?', a: "Our focus is Maharashtra state engineering admissions through the MHT-CET CAP process. We don't cover out-of-state admissions."},
];

const Item = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900">
      <button className="w-full flex items-center justify-between gap-4 p-5 text-left" onClick={() => setOpen(!open)}>
        <span className="text-slate-200 text-sm font-medium">{q}</span>
        <svg className={`w-4 h-4 text-teal-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-slate-800 pt-4">
          <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="section-tag">FAQ</div>
          <h1 className="section-heading text-3xl sm:text-4xl mb-3">Common Questions</h1>
          <p className="text-slate-400">Answers to what students ask most before registering.</p>
        </div>
        <div className="flex flex-col gap-2">
          {faqs.map((f, i) => <Item key={i} q={f.q} a={f.a} />)}
        </div>
        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
          <p className="text-slate-300 text-sm font-medium mb-1">Still have a question?</p>
          <p className="text-slate-500 text-xs mb-4">Send a message and get a reply within 24 hours.</p>
          <Link to="/contact" className="btn-primary text-sm py-2.5 px-6">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
