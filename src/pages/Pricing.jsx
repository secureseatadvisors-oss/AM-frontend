import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Sparkles, HelpCircle, PhoneCall, ArrowRight, Lock } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 bg-[#F4F6F9] min-h-screen relative overflow-hidden">
      {/* Visual Glare Reduction Ambient Backdrop Fills */}
      <div className="absolute top-10 right-[-100px] w-[500px] h-[500px] bg-blue-100/40 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-10 left-[-50px] w-[350px] h-[350px] bg-slate-200/50 rounded-full filter blur-2xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==========================================
            📊 HEADER SECTION: Soft Contrast Eye Safety
           ========================================== */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/80 text-slate-700 font-bold text-xs tracking-wider uppercase mb-3 border border-slate-300/50 shadow-sm">
            <Sparkles size={12} className="text-blue-600" /> Transparent Ledger
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">One Plan. Everything Included.</h1>
          <p className="text-slate-600 font-medium text-sm sm:text-base mt-2">No tiers. No upgrade upsells. One single registration covers your path through the entire 2026 CAP admission cycle.</p>
        </div>

        {/* ==========================================
            📦 PRICING CARD: Glassmorphic Light Blueprint
           ========================================== */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl bg-white/90 backdrop-blur-md border-2 border-blue-600/90 rounded-[2.5rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(29,78,216,0.15)] relative">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-700" />
            
            {/* Header Ribbon Area */}
            <div className="bg-gradient-to-b from-blue-50/60 to-white p-8 text-center border-b border-slate-100">
              <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 mb-4">
                <ShieldCheck size={13} className="text-blue-600" />
                <span className="text-blue-700 font-bold text-[10px] uppercase tracking-wider">Premium All-Access</span>
              </div>
              
              <div className="text-slate-900 font-extrabold text-base sm:text-lg tracking-tight mb-3">MHT-CET 2026 Complete Counselling</div>
              
              <div className="flex items-baseline justify-center gap-3">
                <span className="text-slate-400 text-sm sm:text-base line-through font-medium">₹4,999</span>
                <span className="text-slate-900 font-black text-4xl sm:text-5xl tracking-tight">₹2,499</span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">/ Student</span>
              </div>
              
              <div className="text-emerald-600 font-bold text-xs mt-3 bg-emerald-50 px-3 py-1 rounded-md inline-block border border-emerald-200/60">
                Fixed Price • Covers All Subsequent CAP Rounds
              </div>
            </div>

            {/* Features Checked List */}
            <div className="p-6 sm:p-8 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {[
                  'Personalized College Preference List',
                  '24×7 WhatsApp Support Channel',
                  'Mentor Call Support (9 AM – 6 PM)',
                  '5 Premium Zoom Masterclasses',
                  'Mentorship from COEP & VJTI Seniors',
                  'Spot Round & Institute Guidelines',
                  'Structural Documentation Check',
                  'Premium Localized College Reports',
                  'End-to-End CAP System Tracking',
                  'Unique System Counselling ID',
                ].map(item => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-slate-600 font-semibold text-xs leading-normal">{item}</span>
                  </div>
                ))}
              </div>

              {/* Check-Out Conversion Link Trigger */}
              <Link to="/register" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-100 transition-all transform active:scale-95 text-base">
                Register Now — ₹2,499 <ArrowRight size={16} />
              </Link>
              
              <p className="text-center text-slate-400 text-[11px] font-semibold flex items-center justify-center gap-1.5 mt-3.5">
                <Lock size={12} className="text-slate-400" /> Secure payment processing via Razorpay · Instant Routing
              </p>
            </div>
          </div>
        </div>

        {/* ==========================================
            ❓ FOOTNOTE ASSISTANCE: Secondary Navigation Link
           ========================================== */}
        <div className="mt-12 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl p-5 text-center shadow-sm max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 mx-auto sm:mx-0 text-left">
            <div className="p-2 bg-slate-100 rounded-lg text-slate-500 hidden sm:block">
              <HelpCircle size={16} />
            </div>
            <div>
              <p className="text-slate-800 text-xs font-bold tracking-tight">Have questions before registration?</p>
              <p className="text-slate-500 text-[10px] font-medium leading-none mt-0.5">Speak with our support alignment room.</p>
            </div>
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto shrink-0">
            <Link to="/faq" className="w-1/2 sm:w-auto text-center bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs px-4 py-2.5 rounded-lg transition-colors">Read FAQ</Link>
            <Link to="/contact" className="w-1/2 sm:w-auto text-center bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs px-4 py-2.5 rounded-lg transition-colors">Contact Us</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
