import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    <div className="pt-24 pb-20 min-h-screen flex items-center">
      <div className="max-w-sm mx-auto w-full px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold">AM</span>
          </div>
          <h1 className="section-heading text-2xl mb-1">Student Login</h1>
          <p className="text-slate-400 text-sm">Login with your registered email via OTP</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
          {step === 'email' ? (
            <form onSubmit={sendOTP} className="flex flex-col gap-4">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1.5">Registered Email</label>
                <input type="email" required className="input-field" placeholder="your@email.com"
                  value={email} onChange={e => { setEmail(e.target.value); setError(''); }} />
                <p className="text-slate-500 text-xs mt-1">The email you used during registration</p>
              </div>
              {error && (
                <div className="bg-red-950/50 border border-red-800/50 rounded-xl px-4 py-3 text-red-400 text-sm">
                  {error}
                  {error.toLowerCase().includes('register') && (
                    <Link to="/register" className="block mt-1 text-teal-400 underline text-xs">Register here →</Link>
                  )}
                </div>
              )}
              <button type="submit" disabled={loading}
                className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
                {loading ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</> : 'Send OTP'}
              </button>
            </form>
          ) : (
            <form onSubmit={verifyOTP} className="flex flex-col gap-4">
              <div className="bg-slate-800/60 rounded-xl p-3 text-center">
                <div className="text-slate-400 text-xs">OTP sent to</div>
                <div className="text-teal-400 font-medium text-sm mt-0.5">{email}</div>
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1.5">Enter 6-Digit OTP</label>
                <input type="text" inputMode="numeric" pattern="[0-9]{6}" maxLength={6} required
                  className="input-field text-center text-3xl tracking-[0.6em] font-mono"
                  placeholder="——————"
                  value={otp} onChange={e => { setOtp(e.target.value.replace(/\D/g, '')); setError(''); }} />
                <p className="text-slate-500 text-xs mt-1 text-center">OTP expires in 10 minutes</p>
              </div>
              {error && (
                <div className="bg-red-950/50 border border-red-800/50 rounded-xl px-4 py-3 text-red-400 text-sm">{error}</div>
              )}
              <button type="submit" disabled={loading || otp.length !== 6}
                className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
                {loading ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Verifying...</> : 'Verify & Login'}
              </button>
              <button type="button" onClick={() => { setStep('email'); setOtp(''); setError(''); }}
                className="text-slate-500 hover:text-slate-300 text-sm text-center transition-colors">
                ← Use different email
              </button>
            </form>
          )}

          <div className="mt-6 pt-5 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="text-teal-400 hover:text-teal-300 font-medium">Register Now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
