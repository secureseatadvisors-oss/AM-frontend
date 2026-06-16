import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [step, setStep] = useState('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sendOTP = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const { data } = await api.post('/auth/send-otp', { email: email.trim().toLowerCase() });
      if (data.success) setStep('otp');
      else setError(data.message);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send OTP. Please try again.');
    }
    setLoading(false);
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const { data } = await api.post('/auth/verify-otp', { email: email.trim().toLowerCase(), otp: otp.trim() });
      if (data.success) { login(data.token, data.student); navigate('/dashboard'); }
      else setError(data.message);
    } catch (err) {
      setError(err.response?.data?.message || 'Verification failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="pt-32 pb-24 bg-[#F4F6F9] min-h-screen flex items-center relative overflow-hidden">
      {/* Eye-Friendly Gradient Backdrop Blurs */}
      <div className="absolute top-10 right-[-100px] w-[500px] h-[500px] bg-blue-100/40 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-10 left-[-50px] w-[350px] h-[350px] bg-slate-200/50 rounded-full filter blur-2xl -z-10" />

      <div className="max-w-md mx-auto w-full px-4 sm:px-6 relative z-10">
        
        {/* ==========================================
            📊 HEADER BLOCK: Minimal & Clean
           ========================================== */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/80 text-slate-700 font-bold text-xs tracking-wider uppercase mb-3 border border-slate-300/50 shadow-sm">
            <Sparkles size={12} className="text-blue-600" /> Student Verification
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Student Login</h1>
          <p className="text-slate-600 font-medium text-sm mt-1">Access your registered dashboard securely</p>
        </div>

        {/* ==========================================
            📦 CARD WRAPPER: Premium Light Theme
           ========================================== */}
        <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-[0_20px_40px_-15px_rgba(148,163,184,0.12)]">
          
          {step === 'email' ? (
            <form onSubmit={sendOTP} className="flex flex-col gap-5">
              <div>
                <label className="block text-slate-800 text-xs font-bold uppercase tracking-wider mb-2">
                  Registered Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input 
                    type="email" 
                    required 
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm" 
                    placeholder="your@email.com"
                    value={email} 
                    onChange={e => { setEmail(e.target.value); setError(''); }} 
                  />
                </div>
                <p className="text-slate-500 text-[11px] font-medium mt-1.5 leading-normal">
                  Provide the identical email address logged inside your initial Razorpay transaction framework.
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 font-semibold text-xs leading-normal">
                  ⚠️ {error}
                  {error.toLowerCase().includes('register') && (
                    <Link to="/register" className="block mt-1.5 text-blue-600 hover:text-blue-700 underline text-xs font-bold">Register a new profile here →</Link>
                  )}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-100 flex items-center justify-center gap-2 transition-all transform active:scale-98 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending OTP...
                  </>
                ) : (
                  'Send Authorization OTP'
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={verifyOTP} className="flex flex-col gap-5">
              {/* Active Destination Status Strip */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 text-center flex items-center justify-center gap-2">
                <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                <div className="text-left">
                  <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider leading-none">OTP dispatched to</div>
                  <div className="text-slate-800 font-bold text-xs sm:text-sm mt-1">{email}</div>
                </div>
              </div>

              <div>
                <label className="block text-slate-800 text-xs font-bold uppercase tracking-wider mb-2.5 text-center">
                  Enter 6-Digit OTP
                </label>
                <input 
                  type="text" 
                  inputMode="numeric" 
                  pattern="[0-9]{6}" 
                  maxLength={6} 
                  required
                  className="w-full bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-center text-2xl tracking-[0.4em] font-mono font-black text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-0 transition-all placeholder-slate-300"
                  placeholder="000000"
                  value={otp} 
                  onChange={e => { setOtp(e.target.value.replace(/\D/g, '')); setError(''); }} 
                />
                <p className="text-slate-400 text-[10px] font-semibold mt-1.5 text-center uppercase tracking-wide">
                  Token parameters timeout across 10 minutes
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 font-semibold text-xs leading-normal">
                  ⚠️ {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading || otp.length !== 6}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-100 flex items-center justify-center gap-2 transition-all transform active:scale-98 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Validating Secure Hash...
                  </>
                ) : (
                  'Verify & Access Portal'
                )}
              </button>
              
              <button 
                type="button" 
                onClick={() => { setStep('email'); setOtp(''); setError(''); }}
                className="text-slate-500 hover:text-slate-800 font-semibold text-xs text-center transition-colors mt-1"
              >
                ← Edit execution email destination
              </button>
            </form>
          )}

          {/* Card Anchor Footnote */}
          <div className="mt-6 pt-5 border-t border-slate-100 text-center flex items-center justify-center gap-1">
            <p className="text-slate-500 text-xs font-medium">
              Don't have a verified tracking ledger?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-700 font-bold transition-colors">Register Now</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
