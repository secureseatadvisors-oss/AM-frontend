import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#F4F6F9] border-t border-slate-200/80 relative overflow-hidden">
      {/* Soft background blue ambient blur container to prevent harsh screen glare */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-50 rounded-full filter blur-3xl -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Brand Column featuring Instagram Handle Layout */}
          <div className="sm:col-span-2 space-y-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-900 tracking-tight text-base">
                  ankushmayacharya
                </span>
                {/* Custom Inline SVG Blue Verification Tick */}
                <svg className="w-[17px] h-[17px] text-[#0095f6] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="text-slate-500 font-bold text-[10px] uppercase tracking-wider leading-none mt-1">
                Dattaprasad Classes, Malegaon
              </span>
            </div>
            
            <p className="text-slate-600 text-sm font-medium leading-relaxed max-w-xs">
              Trusted MHT-CET 2026 counselling and choice filling strategies for engineering aspirants across Maharashtra.
            </p>
            
            {/* Live Registration Status Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-700 font-bold text-xs">Registrations Open for 2026 CAP Rounds</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm mb-4 tracking-tight uppercase">Navigate</h4>
            <div className="flex flex-col gap-2.5">
              {[
                ['/', 'Home'], 
                ['/about', 'About'], 
                ['/services', 'Services'], 
                ['/pricing', 'Pricing']
              ].map(([to, l]) => (
                <Link key={to} to={to} className="text-slate-600 hover:text-blue-600 font-semibold text-sm transition-colors">
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Student Support Links Column */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm mb-4 tracking-tight uppercase">Support</h4>
            <div className="flex flex-col gap-2.5">
              {[
                ['/faq', 'FAQ'], 
                ['/contact', 'Contact'], 
                ['/register', 'Register'], 
                ['/login', 'Student Login']
              ].map(([to, l]) => (
                <Link key={to} to={to} className="text-slate-600 hover:text-blue-600 font-semibold text-sm transition-colors">
                  {l}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Base Rights/Legal Layout Block */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs font-medium">
            © 2026 Ankush Mayachari Counselling. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
            <span>MHT-CET 2026</span>
            <span className="text-slate-300">•</span>
            <span>Maharashtra Engineering Admissions Matrix</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
