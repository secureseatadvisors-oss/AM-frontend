import React from 'react';
import { Award, Users, BookOpen, Star, ShieldCheck, Heart } from 'lucide-react';
import AM from "../public/am.png"

export default function About() {
  return (
    <section className="relative bg-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Soft Ambient Background Placements */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-blue-50/60 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-slate-100/70 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==========================================
            ⚡ HEADER SECTION: High Trust Sub-branding
           ========================================== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs tracking-wider uppercase mb-4 border border-blue-100 shadow-sm">
            <Heart size={12} className="fill-blue-600 text-blue-600" /> Meet Your Mentor
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Bridging the Gap Between <br />
            <span className="text-blue-600 underline decoration-blue-200 decoration-wavy decoration-2">Reels & Real Campus</span> Admissions
          </h1>
          
          <p className="text-slate-600 text-base sm:text-lg font-medium mt-4 leading-relaxed">
            Directly operating from the classrooms of <span className="text-slate-900 font-semibold">Dattaprasad Classes in Malegaon</span> to the screens of over 13,000 students across Maharashtra.
          </p>
        </div>

        {/* ==========================================
            🏗️ BIOGRAPHY SECTION: The Split Screen Layout
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Block: Image Vector Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[360px] bg-[#F4F6F9] rounded-[2.5rem] p-4 border border-slate-200/60 shadow-lg">
              <div className="aspect-[4/5] rounded-[2rem] bg-slate-200 overflow-hidden relative group border border-slate-300/40">
                <img 
                  src={AM} // ← Connect your physical file asset path right here
                  alt="Ankush Mayachari Portrait" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-white">
                        <span class="text-4xl mb-2">🎓</span>
                        <p class="text-sm font-bold text-slate-800">Ankush Mayachari</p>
                        <p class="text-[10px] text-slate-400 mt-1">Dattaprasad Classes Educator & CAP Specialist</p>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Float Element: Instagram Handle Sync Tag */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-slate-200 p-3 rounded-2xl shadow-md flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                <span className="text-xs font-bold text-slate-800 tracking-tight">@ankushmayacharya</span>
              </div>
            </div>
          </div>

          {/* Right Block: Content Journey Layout */}
          <div className="lg:col-span-7 space-y-6 text-slate-700">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Ankush Mayachaya — Educator, Mentor, Strategy Specialist
            </h2>
            
            <p className="text-sm sm:text-base leading-relaxed font-medium text-slate-600">
              For years, engineering and pharmacy aspirants in Maharashtra have faced identical bottlenecks during the CAP rounds: confusing system choice codes, messy documentation layouts, and overwhelming misinformation online.
            </p>
            
            <p className="text-sm sm:text-base leading-relaxed font-medium text-slate-600">
              As an active teacher on-ground at Malegaon's premium <span className="text-slate-900 font-semibold">Dattaprasad Classes</span>, I converted operational admission algorithms into actionable video reels. Today, our community guides thousands of tech-sector hopefuls out of confusion directly into their verified dream engineering branches.
            </p>

            <div className="p-5 rounded-2xl bg-[#F4F6F9] border border-slate-200/80 space-y-3">
              <div className="flex gap-2 items-center text-blue-700 font-bold text-sm">
                <ShieldCheck size={16} /> Aligned with State Entrance Cell Regulations
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Every code combination framework we output under our matrix matches current metrics registered within the DTE Maharashtra database structures perfectly.
              </p>
            </div>
          </div>

        </div>

        {/* ==========================================
            💎 BENTO GRID: Trust Badges & Milestones
           ========================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Community Strength */}
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <Users size={20} />
            </div>
            <h3 className="text-slate-900 font-bold text-lg mb-1.5 tracking-tight">13.4k+ Strong Community</h3>
            <p className="text-slate-500 text-xs font-semibold leading-relaxed">
              Consistently distributing interactive strategy reels via automation flows straight into student DMs.
            </p>
          </div>

          {/* Card 2: Strategic Placement */}
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <Award size={20} />
            </div>
            <h3 className="text-slate-900 font-bold text-lg mb-1.5 tracking-tight">500+ Seat Allocations</h3>
            <p className="text-slate-500 text-xs font-semibold leading-relaxed">
              Successfully mapping category rankings to actual seat placements across competitive local engineering matrices.
            </p>
          </div>

          {/* Card 3: Localized Ground Presence */}
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <BookOpen size={20} />
            </div>
            <h3 className="text-slate-900 font-bold text-lg mb-1.5 tracking-tight">Dattaprasad Core Grounding</h3>
            <p className="text-slate-500 text-xs font-semibold leading-relaxed">
              Backed by continuous classroom feedback systems in the academic soygaon/malegaon operational district.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
