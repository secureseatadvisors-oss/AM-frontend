import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AM</span>
              </div>
              <span className="font-bold text-white">Ankush Mayachari</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Trusted MHT-CET 2026 counselling for Maharashtra students. Personal guidance to secure your engineering seat.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-teal-400 inline-block"></span>
              <span className="text-teal-400 text-sm">Registrations open for 2026</span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigate</h4>
            <div className="flex flex-col gap-2.5">
              {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/process', 'Process'], ['/pricing', 'Pricing']].map(([to, l]) => (
                <Link key={to} to={to} className="text-slate-400 hover:text-teal-400 text-sm transition-colors">{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
            <div className="flex flex-col gap-2.5">
              {[['/faq', 'FAQ'], ['/contact', 'Contact'], ['/register', 'Register'], ['/login', 'Student Login']].map(([to, l]) => (
                <Link key={to} to={to} className="text-slate-400 hover:text-teal-400 text-sm transition-colors">{l}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-xs">© 2026 Ankush Mayachari Counselling. All rights reserved.</p>
          <p className="text-slate-600 text-xs">MHT-CET 2026 · Maharashtra Engineering Admissions</p>
        </div>
      </div>
    </footer>
  );
}
