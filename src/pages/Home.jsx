import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import WhatsIncluded from "../components/Services"

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

      <Hero />

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
      <WhatsIncluded/>

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
            Register for ₹2499 and get complete, personal guidance through every step of MHT-CET 2026 counselling.
          </p>
          <Link to="/register" className="btn-primary text-base py-4 px-10 inline-flex">
            Start Registration — ₹2499
          </Link>
          <p className="text-slate-500 text-sm mt-4">Secure payment · Instant ID · WhatsApp support</p>
        </div>
      </section>

    </div>
  );
}
