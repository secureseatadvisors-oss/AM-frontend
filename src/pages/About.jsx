import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="w-72 bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden">
              <div className="h-80 bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center gap-3">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center">
                  <span className="text-white font-bold text-4xl" style={{fontFamily:'Syne,sans-serif'}}>AM</span>
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold text-xl" style={{fontFamily:'Syne,sans-serif'}}>Ankush Mayachari</div>
                  <div className="text-teal-400 text-sm mt-0.5">MHT-CET Counselling Expert</div>
                </div>
                <div className="text-slate-500 text-xs">Place photo here</div>
              </div>
              <div className="grid grid-cols-3 border-t border-slate-800 divide-x divide-slate-800">
                {[['2000+', 'Students'], ['98%', 'Success'], ['5 Yrs', 'Experience']].map(([v, l]) => (
                  <div key={l} className="py-4 text-center">
                    <div className="text-teal-400 font-bold text-base" style={{fontFamily:'Syne,sans-serif'}}>{v}</div>
                    <div className="text-slate-500 text-xs">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="section-tag">About</div>
            <h1 className="section-heading text-3xl sm:text-4xl mb-5">
              Helping Maharashtra Students Make the <span className="gradient-text">Right Choice</span>
            </h1>
            <div className="text-slate-400 text-base leading-relaxed space-y-4">
              <p>
                Ankush Mayachari is a trusted name in MHT-CET counselling, having helped over 2000 Maharashtra 
                students navigate the CAP process and secure seats in their preferred engineering colleges.
              </p>
              <p>
                With deep knowledge of college cutoffs, branch-wise seat availability, category reservations, 
                and CAP round strategy, the guidance is practical, personalised, and honest.
              </p>
              <p>
                The goal is simple — help you understand your options clearly and make the choice that's right 
                for your career, not just the college with the biggest name.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/register" className="btn-primary">Register for Counselling — ₹999</Link>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: '🎯', title: 'Honest Guidance', desc: 'You are told what is realistic for your percentile — no false promises, no sugar-coating.' },
            { icon: '📊', title: 'Data-Based Advice', desc: 'Recommendations are grounded in 5+ years of cutoff data, not just gut feeling.' },
            { icon: '🤝', title: 'Personal Attention', desc: 'Every student receives individual guidance, not generic group advice.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <span className="text-3xl">{icon}</span>
              <h3 className="text-white font-semibold text-base mt-3 mb-2" style={{fontFamily:'Syne,sans-serif'}}>{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
