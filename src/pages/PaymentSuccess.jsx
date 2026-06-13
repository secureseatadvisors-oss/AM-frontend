import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';

export default function PaymentSuccess() {
  const { state } = useLocation();
  if (!state?.counsellingId) return <Navigate to="/" />;

  return (
    <div className="pt-24 pb-20 min-h-screen flex items-center">
      <div className="max-w-md mx-auto w-full px-4 sm:px-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          {/* Success header */}
          <div className="bg-teal-700/20 border-b border-teal-700/30 px-8 py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-teal-900/60 border-2 border-teal-600/50 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="section-heading text-2xl mb-1">Registration Confirmed</h1>
            <p className="text-slate-400 text-sm">Payment verified. Welcome, {state.name}.</p>
          </div>

          <div className="p-8 flex flex-col gap-5">
            {/* Counselling ID */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 text-center">
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-2">Your Counselling ID</div>
              <div className="font-mono font-bold text-teal-400 text-2xl tracking-widest">{state.counsellingId}</div>
              <div className="text-slate-500 text-xs mt-2">Save this — you'll need it to log in</div>
            </div>

            {/* WhatsApp note */}
            <div className="flex gap-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl p-4">
              <span className="text-2xl shrink-0">📱</span>
              <div>
                <div className="text-white font-semibold text-sm mb-0.5">Check WhatsApp</div>
                <div className="text-slate-400 text-sm leading-relaxed">
                  Please check WhatsApp on your registered mobile number for further counselling instructions from Ankush Mayachari.
                </div>
              </div>
            </div>

            <div className="text-slate-500 text-xs text-center">
              Confirmation email sent to <span className="text-slate-300">{state.email}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/login" className="btn-primary flex-1 justify-center py-3">Go to Dashboard</Link>
              <Link to="/" className="btn-outline flex-1 justify-center py-3">Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
