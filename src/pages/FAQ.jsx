import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

const faqs = [
  { 
    q: 'Who is this counselling for?', 
    a: 'Any student who has appeared in MHT-CET 2026 and wants to secure an engineering or pharmacy seat in Maharashtra through the official CAP process.' 
  },
  { 
    q: 'What exactly is included in the ₹2,499 premium pack?', 
    a: 'Everything is covered under a flat premium price line: personalized college preference code listing, continuous WhatsApp group access, mentor call windows (9 AM – 6 PM), 5 masterclass Zoom tracks, VJTI/COEP senior sessions, spot rounds tracking, localized college pg/hostel data, and complete documentation checklist support.' 
  },
  { 
    q: 'How will Ankush Sir connect with us after payment?', 
    a: 'Immediately after a verified Razorpay order checkout completes, your profile records pass directly into our database. Ankush Sir and the Dattaprasad Classes Malegaon operations team will onboard you directly onto a priority WhatsApp line via your registered mobile number.' 
  },
  { 
    q: 'What is the unique Counselling ID?', 
    a: 'Upon successful transaction settlement, our registration core system dynamically issues a tracking ledger serial token formatted as MHCETAM____. This ID maps your scorecard categories to our choice matrix and grants you immediate portal access.' 
  },
  { 
    q: 'Do you cover specific reservation categories and quotas?', 
    a: 'Yes. Our specialized code matrix calculates allotments across all state distribution brackets, including General, OBC, SC, ST, VJ/NT, SBC, EWS, TFWS, and Minority Quota systems.' 
  },
  { 
    q: 'How do I access my dashboard after registration?', 
    a: 'Simply travel to our Login navigation block, input your registered email address ledger line, and enter the 6-digit secure system OTP routed to your device. No complex password hashes required.' 
  },
  { 
    q: 'Can parents request strategy adjustments over a voice call?', 
    a: 'Yes. Our premium enrollment layer explicitly includes dedicated voice mentor access windows daily from 9 AM to 6 PM to ensure parents clear structural anxieties regarding option form freeze-and-float calls.' 
  },
  { 
    q: 'Is the fee refundable?', 
    a: 'Because customized preference code calculation processing assets and personal WhatsApp priority tracking slots are reserved instantly upon settlement, fee components are non-refundable once data logging initiates.' 
  },
  { 
    q: 'Can I register before the final MHT-CET results are declared?', 
    a: 'Yes. Early registration secures your slot allocation. Once the official scorecard cells go live on the State Cell server hubs, your personalized code mapping will begin immediately.' 
  },
  { 
    q: 'Do you provide guidelines for colleges outside Maharashtra?', 
    a: 'No. Our strategic mapping matrix operates exclusively under the legal boundaries and regulatory codes of the State Common Entrance Test Cell of Maharashtra for state-level engineering allocations.' 
  },
];

const Item = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-white/90 backdrop-blur-md border rounded-2xl overflow-hidden transition-all duration-300 ${
      open ? 'border-blue-500 shadow-[0_8px_25px_-6px_rgba(29,78,216,0.1)]' : 'border-slate-200/80 shadow-sm hover:bg-slate-50/50'
    }`}>
      <button 
        className="w-full flex items-center justify-between gap-4 p-5 text-left focus:outline-none select-none" 
        onClick={() => setOpen(!open)}
      >
        <span className={`text-sm font-bold tracking-tight transition-colors duration-200 ${open ? 'text-blue-700' : 'text-slate-800'}`}>{q}</span>
        <div className={`p-1 rounded-lg transition-colors ${open ? 'bg-blue-50' : 'bg-slate-100'}`}>
          <ChevronDown className={`w-4 h-4 text-slate-600 transition-transform duration-300 ${open ? 'rotate-180 text-blue-600' : ''}`} />
        </div>
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-slate-100 pt-4 bg-slate-50/30">
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">{a}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="pt-32 pb-24 bg-[#F4F6F9] min-h-screen relative overflow-hidden">
      {/* Background Soft Contrast Eye Protection Blur Layout Layers */}
      <div className="absolute top-10 right-[-100px] w-[500px] h-[500px] bg-blue-100/40 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-10 left-[-50px] w-[350px] h-[350px] bg-slate-200/50 rounded-full filter blur-2xl -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==========================================
            📊 HEADER BLOCK: Eye Protection Aesthetics
           ========================================== */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/80 text-slate-700 font-bold text-xs tracking-wider uppercase mb-3 border border-slate-300/50 shadow-sm">
            <Sparkles size={12} className="text-blue-600" /> Knowledge Base
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Common Questions</h1>
          <p className="text-slate-600 font-medium text-sm sm:text-base mt-2">Clear, straightforward answers to what students and parents ask most before registering.</p>
        </div>

        {/* FAQ Cards Accordion Grid */}
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => <Item key={i} q={f.q} a={f.a} />)}
        </div>

        {/* ==========================================
            🚀 SECONDARY ACTION PANEL: Support Bridge
           ========================================== */}
        <div className="mt-14 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 text-center shadow-md relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 mx-auto sm:mx-0 text-left">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600 border border-blue-100 hidden sm:block">
                <MessageSquare size={18} />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-sm tracking-tight">Still have an operational query?</h4>
                <p className="text-slate-500 text-xs font-medium mt-0.5">Drop our team a line and receive an allocation brief within 24 hours.</p>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-slate-950 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all text-xs"
            >
              Contact Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
