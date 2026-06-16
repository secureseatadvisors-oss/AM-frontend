// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ChevronDown,
//   CheckCircle2,
//   ShieldCheck,
//   Phone,
//   FileText,
//   GraduationCap,
// } from "lucide-react";

// const services = [
//   {
//     title: "Personalized College Preference List",
//     details:
//       "A customized college preference list prepared using your percentile, category, preferred branch, preferred cities, and previous years' admission trends. Designed specifically for CAP rounds.",
//   },
//   {
//     title: "24×7 WhatsApp Support",
//     details:
//       "Get assistance throughout the counselling process whenever you need clarification regarding colleges, CAP rounds, documents, or admissions.",
//   },
//   {
//     title: "Mentor Call Support (9 AM – 6 PM)",
//     details:
//       "Direct interaction with mentors for counselling strategy, branch selection, college comparison, and admission-related guidance.",
//   },
//   {
//     title: "5 Premium Guidance Sessions",
//     details:
//       "Includes Branch vs College Selection, Software Branches Overview, Core/Hardware Branches Overview, CAP Option Form Strategy, and Future Career Opportunities.",
//   },
//   {
//     title: "Mentorship from Top College Students",
//     details:
//       "Interactive sessions with students from leading engineering colleges to understand academics, placements, internships, and campus life.",
//   },
//   {
//     title: "Spot Round & Institute-Level Guidance",
//     details:
//       "Dedicated guidance for spot rounds and institute-level admissions to help maximize your admission opportunities.",
//   },
//   {
//     title: "Documentation Support",
//     details:
//       "Step-by-step guidance for document verification, certificate preparation, reporting procedures, and admission formalities.",
//   },
//   {
//     title: "Premium College Report",
//     details:
//       "Detailed information about placements, fees, hostel facilities, PG options, transportation, campus environment, and nearby student amenities.",
//   },
//   {
//     title: "End-to-End CAP Round Support",
//     details:
//       "Support throughout CAP Round 1, Round 2, Round 3, and subsequent admission activities until the process is completed.",
//   },
//   {
//     title: "Priority Counselling Experience",
//     details:
//       "Dedicated attention, quicker responses, and personalized support throughout the admission season.",
//   },
// ];

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  GraduationCap,
  Phone,
  FileText,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Personalized Choice Code Strategy",
    details:
      "Receive exact college preference codes arranged according to your percentile, category, region preferences, and historical CAP trends.",
  },
  {
    title: "Documents Pre-Verification Analysis",
    details:
      "Verification of EWS, Caste Validity, NCL, TFWS and other documents before ARC verification begins.",
  },
  {
    title: "Live CAP Round Option Form Filing",
    details:
      "Step-by-step guidance for filling, reviewing, and freezing option forms across all CAP rounds.",
  },
  {
    title: "Direct WhatsApp Group Mentorship",
    details:
      "Priority access to Ankush Sir and the counselling team throughout the admission process.",
  },
  {
    title: "Spot Round Guidance",
    details:
      "Dedicated strategy for institute-level and spot round admissions.",
  },
  {
    title: "Premium College Reports",
    details:
      "Detailed information about placements, fees, hostels, internships, and campus environment.",
  },
];

export default function WhatsIncluded() {
  const [openIndex, setOpenIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-[#F4F6F9] border-y border-slate-200 relative overflow-hidden">
      <div className="absolute top-1/3 right-[-100px] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase border border-blue-100">
            <Sparkles size={12} />
            Premium Counselling Package
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Everything Included in Your{" "}
            <span className="text-blue-600">₹2,499</span> Plan
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            End-to-end MHT-CET CAP guidance from college selection to final admission.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-8">

          {/* Accordion */}
          <div className="space-y-4">
            {services.map((service, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={service.title}
                  className={`rounded-2xl border bg-white overflow-hidden transition-all ${
                    isOpen
                      ? "border-blue-500 shadow-lg"
                      : "border-slate-200"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        className={
                          isOpen
                            ? "text-blue-600"
                            : "text-slate-400"
                        }
                        size={20}
                      />

                      <span className="font-bold text-slate-800">
                        {service.title}
                      </span>
                    </div>

                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 border-t border-slate-100">
                      <p className="pt-4 text-slate-600 leading-relaxed">
                        {service.details}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Pricing Card */}
          <div className="lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl border-2 border-blue-600 p-8 shadow-xl">

              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                  <ShieldCheck size={14} className="text-blue-600" />
                  <span className="text-xs font-bold text-blue-700">
                    PREMIUM ACCESS
                  </span>
                </div>

                <span className="text-xs font-bold text-emerald-600">
                  LIMITED SEATS
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900">
                Complete Counseling Vault
              </h3>

              <div className="mt-6 p-4 rounded-xl bg-slate-50 border">
                <div className="text-5xl font-black text-slate-900">
                  ₹2,499
                </div>

                <div className="flex justify-between mt-2">
                  <span className="text-slate-500 text-sm">
                    One Time Payment
                  </span>

                  <span className="line-through text-slate-400">
                    ₹4,999
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-5">

                <div className="flex gap-3">
                  <GraduationCap
                    size={18}
                    className="text-blue-600 mt-1"
                  />
                  <div>
                    <div className="font-semibold">
                      Personalized Choice Codes
                    </div>
                    <div className="text-sm text-slate-500">
                      Optimized according to your percentile.
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone
                    size={18}
                    className="text-blue-600 mt-1"
                  />
                  <div>
                    <div className="font-semibold">
                      Direct Mentor Support
                    </div>
                    <div className="text-sm text-slate-500">
                      WhatsApp and call guidance.
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FileText
                    size={18}
                    className="text-blue-600 mt-1"
                  />
                  <div>
                    <div className="font-semibold">
                      Documentation Assistance
                    </div>
                    <div className="text-sm text-slate-500">
                      ARC verification and reporting support.
                    </div>
                  </div>
                </div>

              </div>

              <button onClick={() => navigate('/register')} className="mt-8 w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition">
                Enroll Now — ₹2,499
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
