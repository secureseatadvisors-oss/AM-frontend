import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  PhoneCall, 
  Video, 
  GraduationCap, 
  HelpCircle, 
  FileText, 
  Compass, 
  TrendingUp, 
  Zap,
  ArrowRight
} from 'lucide-react';

const detailedServices = [
  {
    icon: <Compass className="w-5 h-5 text-blue-600" />,
    title: 'Personalized College Preference List',
    desc: 'Customized lists configured dynamically for your specific percentile score, caste category, and desired location branches.',
    bullets: ['Percentile-targeted filtering', 'Branch availability matrices', 'Location/City-wise preferences', 'Optimized code configurations']
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
    title: '24×7 WhatsApp Support Channel',
    desc: 'Instant access query pathways directly with the core team to process admission emergencies and rapid verification updates.',
    bullets: ['Real-time deadline reminders', 'Instant grievance processing', 'Direct link to Ankush Sir\'s room', 'Calm environment resolution']
  },
  {
    icon: <PhoneCall className="w-5 h-5 text-blue-600" />,
    title: 'Mentor Call Support (9 AM – 6 PM)',
    desc: 'Speak directly with certified admissions mentors to clear operational option form roadblocks and system ambiguities.',
    bullets: ['Daily open calling hours', 'Live form mistake corrections', 'Category-tier strategy discussion', 'Parent doubt clearing sessions']
  },
  {
    icon: <Video className="w-5 h-5 text-blue-600" />,
    title: '5 Premium Interactive Masterclasses',
    desc: 'Strategic group deep-dives addressing market trajectories, core code patterns, and placement forecasting models.',
    bullets: ['Branch vs College tradeoffs', 'Software fields deep explanation', 'Hardware & core segment breakdowns', 'Option form configuration steps', 'Careers & opportunities till 2030']
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
    title: 'Mentorship from COEP & VJTI Seniors',
    desc: 'Direct interaction with high-ranking engineering seniors from top tier institutions across Maharashtra.',
    bullets: ['COEP, VJTI, and PICT insights', 'Real campus routine descriptions', 'Syllabus and branch preparation tips', 'Peer network connectivity']
  },
  {
    icon: <HelpCircle className="w-5 h-5 text-blue-600" />,
    title: 'Spot Round & Institute-Level Management',
    desc: 'Complete tracking of residual vacant seats left inside specific colleges after basic system CAP allocations finish.',
    bullets: ['Vacant seat metric monitoring', 'Spot entry timing guidelines', 'Institute round option tactics', 'Risk limitation blueprints']
  },
  {
    icon: <FileText className="w-5 h-5 text-blue-600" />,
    title: 'Structural Documentation Framework',
    desc: 'Complete checklist mapping to protect your seat allocations from getting canceled during ARC verification phases.',
    bullets: ['Caste Certificate compliance checking', 'Validity & NCL layout mapping', 'EWS/TFWS configuration pathways', 'Grievance letter drafting assistance']
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
    title: 'Premium Localized College Reports',
    desc: 'Granular, street-level insight matrices for every targeted campus ecosystem so you plan parameters perfectly.',
    bullets: ['Actual placement audit logs', 'Fee structures & hidden expenses', 'Hostel & nearby PG room rentals', 'Xerox/Printing and supply setups', 'Bus stand & railway station nodes', 'Campus locale safety scoring']
  },
  {
    icon: <Zap className="w-5 h-5 text-blue-600" />,
    title: 'Priority Admissions Experience',
    desc: 'Fast track response queues ensuring high personalization metrics across CAP Rounds 1, 2, and 3 allocations.',
    bullets: ['Accelerated response pathways', 'Dedicated student profile dashboard', 'End-to-end confirmation tracking', 'Maximum personal attention parameters']
  }
];

export default function Services() {
  return (
    <section className="relative bg-[#F4F6F9] pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Visual Glare Reduction Background Ambient Blurs */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-slate-200/40 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==========================================
            📊 HEADER SECTION: Soft Contrast Eye Protection
           ========================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/80 text-slate-700 font-bold text-xs tracking-wider uppercase mb-3 border border-slate-300/50">
            <Sparkles size={12} className="text-blue-600" /> Comprehensive Program Modules
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Everything Included in Your <br />
            <span className="text-blue-600 underline decoration-blue-200 decoration-wavy decoration-2">₹2,499 Blueprint</span>
          </h1>
          
          <p className="text-slate-600 text-sm sm:text-base font-semibold max-w-xl mx-auto mt-3">
            From initial percentile calculations to final physical college gate entry. One straightforward price, zero structural upgrades needed.
          </p>
        </div>

        {/* ==========================================
            💎 GRID PLATFORM: High Contrast Premium Cards
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {detailedServices.map(({ icon, title, desc, bullets }) => (
            <div 
              key={title} 
              className="bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-blue-300 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(148,163,184,0.08)] hover:shadow-[0_12px_30px_-6px_rgba(29,78,216,0.12)] transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Module Icon Wrapper */}
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                {React.cloneElement(icon, { className: 'w-5 h-5 transition-colors group-hover:text-white' })}
              </div>
              
              {/* Module Title */}
              <h3 className="text-slate-900 font-bold text-base tracking-tight mb-2 group-hover:text-blue-700 transition-colors">
                {title}
              </h3>
              
              {/* Module Description */}
              <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4 flex-grow">
                {desc}
              </p>
              
              {/* Sub-item Component List */}
              <ul className="space-y-2 border-t border-slate-100 pt-3">
                {bullets.map(bullet => (
                  <li key={bullet} className="flex items-start gap-2 text-slate-500 font-semibold text-xs leading-normal">
                    <CheckCircle2 size={13} className="text-blue-600 mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ==========================================
            🚀 BOTTOM CONVERSION: High-Tier Check-Out Anchor
           ========================================== */}
        <div className="mt-16 bg-white border border-slate-200 p-6 sm:p-8 rounded-[2rem] max-w-3xl mx-auto text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600" />
          
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full mb-4 border border-blue-100">
            Premium Package • Limited Seats Available
          </div>

          <p className="text-slate-600 text-sm font-semibold max-w-xl mx-auto mb-6">
            All nine professional counseling modules modules listed above are securely packaged under a singular fixed enrollment ledger.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link 
              to="/register" 
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-md shadow-blue-100 flex items-center justify-center gap-2 transition-all transform active:scale-95 text-sm"
            >
              Register Now — ₹2,499 / Student <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
