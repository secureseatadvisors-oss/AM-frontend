import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', mobile: '', email: '', cetPercentile: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadRazorpay = () => new Promise((resolve) => {
    if (window.Razorpay) { resolve(true); return; }
    const s = document.createElement('script');
    s.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const loaded = await loadRazorpay();
      if (!loaded) { setError('Payment gateway failed to load. Please refresh and try again.'); setLoading(false); return; }

      const { data } = await api.post('/payment/create-order', {
        name: form.name.trim(),
        mobile: form.mobile.trim(),
        email: form.email.trim().toLowerCase(),
        cetPercentile: parseFloat(form.cetPercentile),
      });

      if (!data.success) { setError(data.message || 'Failed to create order'); setLoading(false); return; }

      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: 'Ankush Mayachari Counselling',
        description: 'MHT-CET 2026 Counselling',
        order_id: data.orderId,
        prefill: { name: form.name, email: form.email, contact: form.mobile },
        theme: { color: '#0d9488' },
        handler: async (response) => {
          try {
            const verify = await api.post('/payment/verify', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            if (verify.data.success) {
              navigate('/payment-success', { state: { counsellingId: verify.data.counsellingId, name: verify.data.student.name, email: verify.data.student.email } });
            } else {
              setError('Payment verification failed. Please contact support.');
            }
          } catch { setError('Verification error. Please contact support.'); }
          setLoading(false);
        },
        modal: { ondismiss: () => setLoading(false) },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="section-tag">Registration</div>
          <h1 className="section-heading text-3xl sm:text-4xl mb-2">Register for Counselling</h1>
          <p className="text-slate-400 text-sm">Fill your details and complete ₹999 payment to receive your Counselling ID.</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          {/* Price strip */}
          <div className="bg-teal-700/20 border-b border-teal-700/30 px-6 py-4 flex items-center justify-between">
            <div>
              <div className="text-white font-medium text-sm">MHT-CET 2026 Complete Counselling</div>
              <div className="text-slate-400 text-xs mt-0.5">One-time · All CAP rounds included</div>
            </div>
            <div className="text-right">
              <div className="text-slate-500 text-xs line-through">₹2,999</div>
              <div className="text-teal-400 font-bold text-xl" style={{fontFamily:'Syne,sans-serif'}}>₹999</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">
                Full Name <span className="text-teal-400">*</span>
              </label>
              <input name="name" type="text" required className="input-field"
                placeholder="As per your documents"
                value={form.name} onChange={e => { setForm({...form, name: e.target.value}); setError(''); }} />
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">
                Mobile Number <span className="text-teal-400">*</span>
              </label>
              <input name="mobile" type="tel" required pattern="[0-9]{10}" className="input-field"
                placeholder="10-digit WhatsApp number"
                value={form.mobile} onChange={e => { setForm({...form, mobile: e.target.value}); setError(''); }} />
              <p className="text-slate-500 text-xs mt-1">Counselling guidance will be sent to this WhatsApp number.</p>
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">
                Email Address <span className="text-teal-400">*</span>
              </label>
              <input name="email" type="email" required className="input-field"
                placeholder="your@email.com"
                value={form.email} onChange={e => { setForm({...form, email: e.target.value}); setError(''); }} />
              <p className="text-slate-500 text-xs mt-1">Used for login OTP and confirmation email.</p>
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">
                MHT-CET Percentile <span className="text-teal-400">*</span>
              </label>
              <input name="cetPercentile" type="number" required step="0.01" min="0" max="100" className="input-field"
                placeholder="e.g. 87.65"
                value={form.cetPercentile} onChange={e => { setForm({...form, cetPercentile: e.target.value}); setError(''); }} />
            </div>

            {error && (
              <div className="bg-red-950/50 border border-red-800/50 rounded-xl px-4 py-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <button type="submit" disabled={loading}
              className="btn-primary w-full justify-center py-4 text-base mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
              {loading ? (
                <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Processing...</>
              ) : 'Pay ₹999 & Get Counselling ID'}
            </button>

            <p className="text-center text-slate-500 text-xs">
              🔒 Secure payment via Razorpay · You agree to our terms on registration
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
