import React from 'react';
import { Link } from 'react-router-dom';

const Check = () => (
  <svg className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-2xl font-bold text-white" style={{fontFamily:'Syne,sans-serif'}}>{value}</div>
    <div className="text-slate-400 text-xs mt-0.5">{label}</div>
  </div>
);

export default function Home() {
  return (
    <div className="pt-16">

      {/* ── HERO ── */}
      <section className="hero-glow grid-pattern min-h-[88vh] flex items-center relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-900/40 border border-teal-700/40 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                <span className="text-teal-300 text-xs font-medium">MHT-CET 2026 Counselling Now Open</span>
              </div>

              <h1 className="section-heading text-4xl sm:text-5xl lg:text-[52px] leading-[1.1] mb-5">
                Get Into Your<br />
                <span className="gradient-text">Dream Engineering</span><br />
                College
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
                Personal MHT-CET 2026 counselling by <span className="text-white font-medium">Ankush Mayachari</span>. 
                Honest guidance, clear strategy, real results.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link to="/register" className="btn-primary text-base py-3.5 px-8">
                  Register for Counselling
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link to="/process" className="btn-outline text-base py-3.5 px-8">See How It Works</Link>
              </div>

              <div className="flex items-center gap-6 py-5 border-t border-slate-800">
                <Stat value="2000+" label="Students Guided" />
                <div className="w-px h-8 bg-slate-800" />
                <Stat value="98%" label="Seat Secured" />
                <div className="w-px h-8 bg-slate-800" />
                <Stat value="5 Yrs" label="Experience" />
              </div>
            </div>

            {/* Right — Counsellor card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80">
                {/* Glow */}
                <div className="absolute -inset-3 rounded-2xl bg-teal-600/10 blur-xl" />
                <div className="relative bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden">
                  {/* Photo area */}
                  <div className="h-72 bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center gap-3 border-b border-slate-800">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center">
                      <span className="text-white font-bold text-4xl" style={{fontFamily:'Syne,sans-serif'}}>AM</span>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold text-lg" style={{fontFamily:'Syne,sans-serif'}}>Ankush Mayachari</div>
                      <div className="text-teal-400 text-sm">MHT-CET Counselling Expert</div>
                    </div>
                    <div className="text-slate-500 text-xs">Place your photo here</div>
                  </div>
                  {/* Info strip */}
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                      <span className="text-slate-300 text-sm">Counselling open for 2026</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {[['₹999', 'One-time fee'], ['Instant', 'Counselling ID']].map(([v, l]) => (
                        <div key={l} className="bg-slate-800 rounded-lg p-2.5 text-center">
                          <div className="text-teal-400 font-bold text-base">{v}</div>
                          <div className="text-slate-500 text-[11px]">{l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-slate-900 border-y border-slate-800 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {['Secure payment via Razorpay', 'Instant Counselling ID on payment', 'WhatsApp support throughout', 'All CAP rounds covered', 'No hidden charges'].map((t) => (
              <div key={t} className="flex items-center gap-2 text-slate-400 text-sm">
                <Check />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-tag">What You Get</div>
              <h2 className="section-heading text-3xl sm:text-4xl mb-4">
                Everything in <span className="gradient-text">₹999</span>
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                One simple fee. No upsells. Everything you need from registration day to seat confirmation.
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {[
                  'College shortlisting for your percentile',
                  'CAP Round 1, 2 & 3 guidance',
                  'Choice filling strategy',
                  'Branch selection advice',
                  'Category-wise seat analysis',
                  'Document checklist',
                  'WhatsApp support',
                  'Spot round guidance',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-slate-300 text-sm">
                    <Check />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/register" className="btn-primary">Register Now — ₹999</Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: '🎯', title: 'Personalised Strategy', desc: 'Every student gets a plan built around their specific percentile, category, and location preferences.' },
                { icon: '📊', title: 'Data-Backed Guidance', desc: 'Recommendations based on 5+ years of MHT-CET cutoff trends — not guesswork.' },
                { icon: '💬', title: 'WhatsApp Support', desc: 'Real-time guidance on WhatsApp during the counselling season when you need it most.' },
                { icon: '🔒', title: 'Secure & Transparent', desc: 'Payment secured by Razorpay. No hidden fees. No misleading promises.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <span className="text-2xl shrink-0">{icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5">{title}</div>
                    <div className="text-slate-400 text-sm leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-tag">Simple Process</div>
            <h2 className="section-heading text-3xl sm:text-4xl">4 Steps to Your Dream College</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: '01', title: 'Register & Pay', desc: 'Fill your details, pay ₹999 and receive your Counselling ID instantly.' },
              { n: '02', title: 'Connect on WhatsApp', desc: 'Get onboarded and share your preferences and category details.' },
              { n: '03', title: 'Get Your Strategy', desc: 'Receive a personalised college list and CAP round strategy.' },
              { n: '04', title: 'Confirm Your Seat', desc: 'Guided through choice filling, allotment, and final admission.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="bg-slate-900 border border-slate-800 rounded-xl p-5 relative">
                <div className="text-teal-600 font-mono font-bold text-sm mb-3">{n}</div>
                <h3 className="text-white font-semibold text-base mb-2" style={{fontFamily:'Syne,sans-serif'}}>{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/process" className="btn-outline text-sm">View Detailed Process</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-tag">Student Stories</div>
            <h2 className="section-heading text-3xl sm:text-4xl">Real Students, Real Results</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Rahul Patil', info: '94.5 percentile · COEP CS', text: 'Got into COEP Computer Science — my first choice. The choice filling strategy was exactly right.' },
              { name: 'Priya Sharma', info: '88.2 percentile · VJTI IT', text: 'Thought VJTI IT was out of reach at my percentile. The guidance changed everything.' },
              { name: 'Aditya Deshmukh', info: '76.8 percentile · PIT Mech', text: 'The category-seat analysis helped me pick a college I would have missed on my own.' },
            ].map(({ name, info, text }) => (
              <div key={name} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">"{text}"</p>
                <div className="flex items-center gap-3 border-t border-slate-800 pt-4">
                  <div className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {name[0]}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{name}</div>
                    <div className="text-slate-500 text-xs">{info}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-heading text-3xl sm:text-4xl mb-4">
            Don't navigate admissions alone
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Register for ₹999 and get complete, personal guidance through every step of MHT-CET 2026 counselling.
          </p>
          <Link to="/register" className="btn-primary text-base py-4 px-10 inline-flex">
            Start Registration — ₹999
          </Link>
          <p className="text-slate-500 text-sm mt-4">Secure payment · Instant ID · WhatsApp support</p>
        </div>
      </section>

    </div>
  );
}
