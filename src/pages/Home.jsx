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

      <WhatsIncluded/>

      {/* ── HOW IT WORKS ── */}
    <section className="py-20 bg-[#F4F6F9] border-y border-slate-200 relative overflow-hidden">
      {/* Soft ambient backdrops to break up structural brightness */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-100/40 rounded-full filter blur-3xl -z-10 transform -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/80 text-slate-700 font-bold text-xs tracking-wider uppercase mb-3 border border-slate-300/50">
            Admissions Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            4 Steps to Secure Your Dream College
          </h2>
          <p className="text-sm text-slate-500 font-semibold max-w-xl mx-auto mt-2">
            From clicking an Instagram link to stepping onto your new campus, your entire pipeline is managed.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { n: '01', title: 'Register & Pay', desc: 'Securely submit your student details and unlock your premium Counselling ID instantly.' },
            { n: '02', title: 'Connect on WhatsApp', desc: 'Directly join Ankush Sir’s priority group to safely share category and preference data.' },
            { n: '03', title: 'Get Your Strategy', desc: 'Receive a personalized college choice list backed by strict, real-time cutoff metrics.' },
            { n: '04', title: 'Confirm Your Seat', desc: 'Get final guidance through actual CAP round choice filling and seat allotment.' },
          ].map(({ n, title, desc }) => (
            <div 
              key={n} 
              className="bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(148,163,184,0.12)] hover:shadow-[0_10px_30px_-6px_rgba(29,78,216,0.15)] hover:border-blue-200 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                {/* Clean, low-contrast Step Counter Tag */}
                <div className="text-slate-500 font-mono font-black text-xs bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                  STEP {n}
                </div>
                
                {/* Visual Connector Dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors mt-2" />
              </div>
              
              {/* Step Title */}
              <h3 className="text-slate-900 font-bold text-lg mb-2 tracking-tight group-hover:text-blue-700 transition-colors">
                {title}
              </h3>
              
              {/* Step Description */}
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call To Action Block */}
        {/* <div className="text-center mt-14">
          <Link 
            to="/process" 
            className="inline-flex items-center justify-center font-bold text-sm text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 px-8 py-3.5 rounded-xl shadow-sm hover:shadow transition-all transform active:scale-98"
          >
            View Detailed Process Blueprint →
          </Link>
        </div> */}

      </div>
    </section>

    </div>
  );
}
