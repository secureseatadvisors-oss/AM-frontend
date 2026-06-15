
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl">
          <div className="section-tag">
            About Us
          </div>

          <h1
            className="text-4xl sm:text-5xl text-white leading-tight mt-4 mb-6"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Helping Students Make
            <span className="gradient-text">
              {" "}Better Admission Decisions
            </span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed">
            We help MHT-CET students navigate the admission process with
            confidence through personalized counselling, college
            shortlisting, CAP round strategy, and complete admission
            support.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {[
            ["2000+", "Students Assisted"],
            ["150+", "Colleges Covered"],
            ["CAP", "Round Support"],
            ["24×7", "WhatsApp Support"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <div className="text-3xl font-bold text-white mb-2">
                {value}
              </div>

              <div className="text-slate-500 text-sm">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          <div>
            <h2
              className="text-2xl text-white mb-5"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              Why This Platform Exists
            </h2>

            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>
                Every year thousands of students struggle with choosing
                the right engineering college, branch, and CAP round
                strategy. Many rely on incomplete information, outdated
                advice, or random recommendations.
              </p>

              <p>
                Our goal is to make the admission process simple,
                transparent, and data-driven. Students receive guidance
                tailored to their percentile, category, branch
                preferences, city preferences, and career goals.
              </p>

              <p>
                Rather than focusing only on securing a seat, we focus on
                helping students make informed decisions that align with
                their long-term future.
              </p>
            </div>
          </div>

          <div>
            <h2
              className="text-2xl text-white mb-5"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              What Makes Us Different
            </h2>

            <div className="space-y-4">

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-medium mb-2">
                  Personalized Guidance
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Every recommendation is tailored to the student's
                  profile instead of using generic advice.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-medium mb-2">
                  Data-Based Decisions
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Guidance is backed by admission trends, cutoff
                  analysis, and previous years' CAP data.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-medium mb-2">
                  End-to-End Support
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  From college selection to CAP rounds, documentation,
                  and spot rounds, support is available throughout the
                  admission journey.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">

          <div className="text-teal-400 text-sm font-medium mb-2">
            Premium Counselling Package
          </div>

          <h2
            className="text-3xl text-white mb-3"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Complete Admission Guidance
          </h2>

          <div className="text-5xl font-bold text-white mb-2">
            ₹2,499
          </div>

          <p className="text-slate-400 mb-8">
            Per Student • Complete Counselling Support
          </p>

          <Link
            to="/register"
            className="btn-primary"
          >
            Register Now
          </Link>

        </div>

      </div>
    </section>
  );
}
