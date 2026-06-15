
import { Link } from "react-router-dom";

export default function Hero() {
  const features = [
    "Personalized College Preference List",
    "24×7 WhatsApp Support",
    "Mentor Call Support (9 AM – 6 PM)",
    "5 Premium Zoom Sessions",
    "Mentorship from COEP & VJTI",
    "Spot Round Guidance",
    "Documentation Support",
    "Premium College Report",
    "End-to-End CAP Round Support",
    "Priority Counselling Experience"
  ];

  return (
    <section className="hero-glow grid-pattern min-h-[88vh] flex items-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Section */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-900/40 border border-teal-700/40 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span className="text-teal-300 text-sm font-medium">
                MHT-CET 2026 Counselling Now Open
              </span>
            </div>

            {/* Heading */}
<h1
  className="text-4xl sm:text-5xl lg:text-[58px] leading-[1.08] mb-6 text-white"
  style={{
    fontFamily: "Merriweather, serif",
    fontWeight: 900,
  }}
>
  Find The Best
  <br />
  <span className="gradient-text">
    Engineering College
  </span>
  <br />
  For Your Rank
</h1>


            {/* Description */}
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
              Personalized MHT-CET counselling with college shortlisting,
              CAP round strategy, option form guidance, cutoff analysis,
              and complete admission support throughout the counselling process.
            </p>

            {/* Pricing */}
            <div className="inline-block bg-slate-900 border border-slate-700 rounded-2xl px-6 py-4 mb-8">
              <div className="text-slate-500 text-xs uppercase tracking-wider">
                Complete Counselling Package
              </div>

              <div className="text-4xl font-bold text-white">
                ₹2,499
              </div>

              <div className="text-teal-400 text-sm">
                One-Time Payment • No Hidden Charges
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                to="/register"
                className="btn-primary text-base py-3.5 px-8"
              >
                Register for ₹2,499

                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <Link
                to="/process"
                className="btn-outline text-base py-3.5 px-8"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
              <div>
                <div className="text-2xl font-bold text-white">
                  2000+
                </div>
                <div className="text-slate-500 text-sm">
                  Students Assisted
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-white">
                  150+
                </div>
                <div className="text-slate-500 text-sm">
                  Colleges Covered
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-white">
                  2026
                </div>
                <div className="text-slate-500 text-sm">
                  Latest Cutoff Data
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Glow */}
              <div className="absolute -inset-3 rounded-3xl bg-teal-600/10 blur-xl" />

              <div className="relative bg-slate-900 border border-slate-700 rounded-3xl p-8">
                <h3
                  className="text-white text-2xl font-semibold mb-6"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  What's Included
                </h3>

                <div className="space-y-4">
                  {features.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>

                      <span className="text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 bg-teal-950/20 border border-teal-800/20 rounded-2xl">
                  <div className="text-teal-400 text-sm">
                    Complete Counselling Package
                  </div>

                  <div className="text-4xl font-bold text-white mt-1">
                    ₹2,499
                  </div>

                  <div className="text-slate-500 text-sm mt-1">
                    End-to-end admission support
                  </div>
                </div>

                <Link
                  to="/register"
                  className="btn-primary w-full mt-6 justify-center"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
