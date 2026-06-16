import React from 'react';
import { Link } from 'react-router-dom';
import insta from "../public/insta.png"

export default function Hero() {
  return (
    <section className="relative bg-white pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle Background Trust Accents (Gentle Abstract Gradients) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full filter blur-3xl -z-10 opacity-70" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-slate-50 rounded-full filter blur-2xl -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT 7 COLUMNS: Direct Action, Empathy, and Counseling Value Props */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Alert Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-xs tracking-wide uppercase mx-auto lg:mx-0">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              CAP Round 2026 Strategy Center
            </div>

            {/* The Main Tagline Requested */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              You are <span className="text-blue-600 underline decoration-blue-200 decoration-wavy decoration-2">not alone</span> in your <br className="hidden md:inline" />
              <span className="text-slate-900">MHT-CET CAP process.</span>
            </h1>

            {/* Sub-headline: Localized Trust & Social Proof Connection */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Don’t risk your hard-earned percentile with generic choices. Get personalized, step-by-step option form filing and cutoff analysis from <span className="text-slate-900 font-semibold">Ankush Mayachari</span> and the expert team at <span className="text-blue-600 font-semibold">Dattaprasad Classes, Malegaon</span>.
            </p>

            {/* Conversion Button Block */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link 
                to="/register" 
                className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-100 transition-all transform active:scale-[0.98] text-base"
              >
                Secure Your Seat Guide — ₹2499
              </Link>
              <a 
                href="https://instagram.com/ankushmayacharya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-base"
              >
                {/* Minimalist Camera Icon representing Instagram Content Link */}
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Watch Latest Cutoff Reels
              </a>
            </div>

            {/* Micro Trust Indicators Beneath Actions */}
            <div className="grid grid-cols-3 gap-4 pt-4 max-w-md mx-auto lg:mx-0 border-t border-slate-100">
              <div>
                <p className="text-2xl font-bold text-slate-900">13.4k+</p>
                <p className="text-xs text-slate-500 font-medium">Insta Community</p>
              </div>
              <div className="border-x border-slate-200 px-2">
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="text-xs text-slate-500 font-medium">Students Placed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">100%</p>
                <p className="text-xs text-slate-500 font-medium">Verified Cutoffs</p>
              </div>
            </div>

          </div>

          {/* RIGHT 5 COLUMNS: Container For Your Custom Instagram Profile Image */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Visual Backplate Frame wrapper to anchor your custom screenshot asset */}
            <div className="relative w-full max-w-[420px] bg-white rounded-2xl p-3 border border-slate-100 shadow-xl transition-transform duration-300 hover:scale-[1.01]">
              
              {/* Clean Top Browser Bar Accent (Simulates App Environment) */}
              <div className="flex items-center gap-1.5 pb-3 px-1 border-b border-slate-100">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="text-[10px] text-slate-400 font-medium ml-1 select-none">Verified Channel Portfolio</span>
              </div>

              {/* IMAGE SLOT: Place your compiled Instagram profile screenshot image file here */}
              <div className="mt-3 rounded-xl overflow-hidden bg-slate-50 border border-slate-200/60 aspect-[4/3] flex items-center justify-center relative group">
                <img 
                  src={insta} // ← Replace this with your actual local path
                  alt="Ankush Mayachari Instagram Profile Architecture" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Modern styled placeholder state visible before file connection
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div className="text-center p-6 space-y-2">
                        <div className="text-blue-500 bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">🎯</div>
                        <p className="text-xs font-bold text-slate-800">[ Place Your Profile Screenshot Here ]</p>
                        <p className="text-[10px] text-slate-400 max-w-[200px] mx-auto">This area securely contains the image concept with your Highlights and verification tick badge.</p>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Floating Dynamic Bottom Trust Pill Overlay */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-slate-100 p-3 rounded-xl shadow-lg flex items-center gap-2.5 max-w-[220px]">
                <div className="bg-emerald-50 text-emerald-600 p-2 rounded-lg">
                  {/* Lock badge icon enforcing system compliance */}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-slate-900 leading-tight">State Cell Verified</span>
                  <span className="text-[10px] text-slate-500 font-medium">100% accurate data limits</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
