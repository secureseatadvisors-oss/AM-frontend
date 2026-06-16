import React from 'react';
import { MessageCircle, Compass, Users, Zap, ExternalLink, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-[#F4F6F9] min-h-screen relative overflow-hidden">
      {/* Soft Contrast Eye Protection Blur Layout Layers */}
      <div className="absolute top-10 right-[-100px] w-[500px] h-[500px] bg-blue-100/40 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-10 left-[-50px] w-[350px] h-[350px] bg-slate-200/50 rounded-full filter blur-2xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ==========================================
            📊 HEADER BLOCK: Eye Protection Aesthetics
           ========================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/80 text-slate-700 font-bold text-xs tracking-wider uppercase mb-3 border border-slate-300/50 shadow-sm">
            <Sparkles size={12} className="text-blue-600" /> Connection Node
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Need Direct Help With Your <br />
            <span className="text-blue-600 underline decoration-blue-200 decoration-wavy decoration-2">MHT-CET CAP Process?</span>
          </h1>

          <p className="text-slate-600 font-medium text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Skip the confusion. Join our verified chat framework for immediate cutoff updates, option form metrics, and peer discussions calibrated to Maharashtra engineering allocations.
          </p>
        </div>

        {/* ==========================================
            📦 MAIN CARD: Glassmorphic Light Architecture
           ========================================== */}
        <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(148,163,184,0.12)] overflow-hidden">

          {/* Premium Internal Banner */}
          <div className="bg-gradient-to-b from-blue-50/60 to-white px-6 py-10 text-center border-b border-slate-100 relative">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600" />
            
            <div className="w-14 h-14 bg-blue-50 border border-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm shadow-blue-100">
              <MessageCircle size={26} className="fill-blue-50" />
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Official Admission Community Hub
            </h2>

            <p className="text-slate-500 font-semibold text-xs sm:text-sm mt-1.5 max-w-lg mx-auto">
              Real-time platform updates matching the regulatory parameters configured by the State Common Entrance Test Cell.
            </p>
          </div>

          {/* Value Grid System */}
          <div className="p-6 sm:p-10 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

              {/* Feature 1 */}
              <div className="bg-slate-50/60 border border-slate-200/80 rounded-2xl p-5 group hover:border-blue-300 transition-colors duration-200">
                <div className="w-9 h-9 bg-blue-50 text-blue-600 border border-blue-100 rounded-xl flex items-center justify-center mb-4 font-bold">
                  <Compass size={16} />
                </div>
                <h3 className="font-bold text-slate-900 text-sm tracking-tight mb-1">
                  CAP Allocation Tracking
                </h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Instant guidance regarding option form sequencing across all three allotment sequences.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-50/60 border border-slate-200/80 rounded-2xl p-5 group hover:border-blue-300 transition-colors duration-200">
                <div className="w-9 h-9 bg-blue-50 text-blue-600 border border-blue-100 rounded-xl flex items-center justify-center mb-4 font-bold">
                  <Users size={16} />
                </div>
                <h3 className="font-bold text-slate-900 text-sm tracking-tight mb-1">
                  College Choice Matrices
                </h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Meticulous breakdowns analyzing institutional placement records and regional cutoff variations.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-50/60 border border-slate-200/80 rounded-2xl p-5 group hover:border-blue-300 transition-colors duration-200">
                <div className="w-9 h-9 bg-blue-50 text-blue-600 border border-blue-100 rounded-xl flex items-center justify-center mb-4 font-bold">
                  <Zap size={16} />
                </div>
                <h3 className="font-bold text-slate-900 text-sm tracking-tight mb-1">
                  Verified Mentorship Line
                </h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Direct operational notes sourced directly from Ankush Sir and the Dattaprasad Classes Malegaon group.
                </p>
              </div>

            </div>

            {/* ==========================================
                🚀 PRIMARY CTA ACTION: Clean Conversion Link
               ========================================== */}
            <div className="text-center bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-sm">
              <a
                href="https://chat.whatsapp.com/EyP0aSroZ62KaOisPTkKPo?s=cl&p=i&ilr=4&amv=2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md shadow-emerald-100 transition-all transform active:scale-95 text-sm"
              >
                Join WhatsApp Group <ExternalLink size={14} />
              </a>

              <p className="text-slate-400 text-[11px] font-semibold mt-3.5">
                🔒 Verified Redirect • Instant connection routing into our open allocation workspace.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
