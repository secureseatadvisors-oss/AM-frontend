import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
  Phone,
  FileText,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    title: "Personalized College Preference List",
    details:
      "A customized college preference list prepared using your percentile, category, preferred branch, preferred cities, and previous years' admission trends. Designed specifically for CAP rounds.",
  },
  {
    title: "24×7 WhatsApp Support",
    details:
      "Get assistance throughout the counselling process whenever you need clarification regarding colleges, CAP rounds, documents, or admissions.",
  },
  {
    title: "Mentor Call Support (9 AM – 6 PM)",
    details:
      "Direct interaction with mentors for counselling strategy, branch selection, college comparison, and admission-related guidance.",
  },
  {
    title: "5 Premium Guidance Sessions",
    details:
      "Includes Branch vs College Selection, Software Branches Overview, Core/Hardware Branches Overview, CAP Option Form Strategy, and Future Career Opportunities.",
  },
  {
    title: "Mentorship from Top College Students",
    details:
      "Interactive sessions with students from leading engineering colleges to understand academics, placements, internships, and campus life.",
  },
  {
    title: "Spot Round & Institute-Level Guidance",
    details:
      "Dedicated guidance for spot rounds and institute-level admissions to help maximize your admission opportunities.",
  },
  {
    title: "Documentation Support",
    details:
      "Step-by-step guidance for document verification, certificate preparation, reporting procedures, and admission formalities.",
  },
  {
    title: "Premium College Report",
    details:
      "Detailed information about placements, fees, hostel facilities, PG options, transportation, campus environment, and nearby student amenities.",
  },
  {
    title: "End-to-End CAP Round Support",
    details:
      "Support throughout CAP Round 1, Round 2, Round 3, and subsequent admission activities until the process is completed.",
  },
  {
    title: "Priority Counselling Experience",
    details:
      "Dedicated attention, quicker responses, and personalized support throughout the admission season.",
  },
];

export default function WhatsIncluded() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <div className="section-tag">
            Premium Counselling Package
          </div>

          <h2 className="section-heading text-3xl sm:text-4xl mt-4 mb-4">
            Everything Included in{" "}
            <span className="gradient-text">₹2,499</span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            Complete admission guidance for MHT-CET students — from
            college selection to final admission confirmation.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-12">
          
          {/* Left */}
          <div className="space-y-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-teal-400 shrink-0"
                    />

                    <span className="text-white font-medium">
                      {service.title}
                    </span>
                  </div>

                  <ChevronDown
                    size={18}
                    className={`text-slate-500 transition-transform ${
                      openIndex === index
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-5 border-t border-slate-800">
                    <p className="text-slate-400 leading-relaxed pt-4">
                      {service.details}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right */}
          <div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sticky top-24">
              
              <div className="inline-flex items-center gap-2 bg-teal-900/20 border border-teal-800/30 rounded-full px-3 py-1 mb-5">
                <ShieldCheck size={16} className="text-teal-400" />
                <span className="text-teal-300 text-sm">
                  Premium Package
                </span>
              </div>

              <h3
                className="text-2xl text-white mb-4"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                Complete Counselling Support
              </h3>

              <div className="mb-6">
                <div className="text-5xl font-bold text-white">
                  ₹2,499
                </div>

                <div className="text-slate-400 mt-1">
                  Per Student
                </div>
              </div>

              <div className="space-y-4 mb-8">
                
                <div className="flex gap-3">
                  <GraduationCap
                    size={18}
                    className="text-teal-400 mt-1"
                  />
                  <div>
                    <div className="text-white text-sm font-medium">
                      Personalized Guidance
                    </div>
                    <div className="text-slate-400 text-sm">
                      Recommendations tailored to your profile.
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone
                    size={18}
                    className="text-teal-400 mt-1"
                  />
                  <div>
                    <div className="text-white text-sm font-medium">
                      Mentor Access
                    </div>
                    <div className="text-slate-400 text-sm">
                      WhatsApp and call support during admissions.
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FileText
                    size={18}
                    className="text-teal-400 mt-1"
                  />
                  <div>
                    <div className="text-white text-sm font-medium">
                      Complete Admission Assistance
                    </div>
                    <div className="text-slate-400 text-sm">
                      CAP rounds, documents, spot rounds and more.
                    </div>
                  </div>
                </div>

              </div>

              <div className="bg-teal-950/20 border border-teal-800/20 rounded-xl p-4 mb-6">
                <p className="text-slate-300 text-sm leading-relaxed">
                  Includes all counselling services, guidance sessions,
                  admission support, and mentor assistance throughout
                  the admission process.
                </p>
              </div>

              <Link
                to="/register"
                className="btn-primary w-full justify-center"
              >
                Register Now — ₹2,499
              </Link>

              <p className="text-center text-slate-500 text-xs mt-4">
                Limited seats available for personalized counselling.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
