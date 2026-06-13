import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { icon: '🎯', title: 'College Shortlisting', desc: 'Get a targeted list of colleges based on your percentile, category, and location preference — no guesswork.', items: ['Percentile-based filtering', 'Branch availability check', '5-year cutoff trend analysis', 'Realistic vs reach colleges'] },
  { icon: '📋', title: 'CAP Round Guidance', desc: 'Strategic guidance through all 3 CAP rounds to maximise your chances of getting the best available seat.', items: ['Choice filling strategy', 'Priority order guidance', 'Category-wise seat planning', 'Round-by-round analysis'] },
  { icon: '🔬', title: 'Branch Counselling', desc: 'Choose a branch that matches your interests and has strong career prospects.', items: ['Placement record overview', 'Industry demand insights', 'Branch vs college tradeoff', 'Career path discussion'] },
  { icon: '📄', title: 'Document Support', desc: 'A complete checklist so you are never caught off guard during document verification.', items: ['Full document checklist', 'Caste certificate guidance', 'Migration certificate help', 'Grievance process support'] },
  { icon: '💬', title: 'WhatsApp Support', desc: 'Real-time guidance on WhatsApp when deadlines are close and decisions need to be made fast.', items: ['Quick query responses', 'Deadline reminders', 'Round-by-round updates', 'Calm, clear answers'] },
  { icon: '🏛️', title: 'Spot Round & Direct', desc: "Guidance for spot rounds and college-level admissions if CAP rounds don't work out.", items: ['Spot round strategy', 'Direct admission guidance', 'Management quota overview', 'Minority institute info'] },
];

export default function Services() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-tag">Services</div>
          <h1 className="section-heading text-3xl sm:text-4xl mb-3">What's Covered</h1>
          <p className="text-slate-400 max-w-xl mx-auto">Everything from college shortlisting to seat confirmation — all included in one ₹999 registration.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon, title, desc, items }) => (
            <div key={title} className="bg-slate-900 border border-slate-800 hover:border-teal-700/50 rounded-xl p-6 transition-colors duration-200">
              <span className="text-3xl">{icon}</span>
              <h3 className="text-white font-semibold text-base mt-3 mb-2" style={{fontFamily:'Syne,sans-serif'}}>{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>
              <ul className="flex flex-col gap-1.5">
                {items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                    <span className="text-teal-500 mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-4">All services above are included in a single ₹999 registration fee.</p>
          <Link to="/register" className="btn-primary">Register Now — ₹999</Link>
        </div>
      </div>
    </div>
  );
}
