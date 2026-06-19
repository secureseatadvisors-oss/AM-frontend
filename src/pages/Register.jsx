import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

export default function Register() {
  const navigate = useNavigate();
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    cetPercentile: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadRazorpay = () =>
    new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

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
      if (!disclaimerAccepted) {
  setError(
    'Please accept all Terms & Conditions before proceeding.'
  );
        setLoading(false);
  return;
}

      if (!loaded) {
        setError(
          'Payment gateway failed to load. Please refresh and try again.'
        );
        setLoading(false);
        return;
      }

      const { data } = await api.post('/payment/create-order', {
        name: form.name.trim(),
        mobile: form.mobile.trim(),
        email: form.email.trim().toLowerCase(),
        cetPercentile: parseFloat(form.cetPercentile),
      });

      if (!data.success) {
        setError(data.message || 'Failed to create order');
        setLoading(false);
        return;
      }

      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: 'Ankush Mayachari Counselling',
        description: 'MHT-CET 2026 Counselling',
        order_id: data.orderId,

        prefill: {
          name: form.name,
          email: form.email,
          contact: form.mobile,
        },

        theme: {
          color: '#0A2E73',
        },

        handler: async (response) => {
          try {
            const verify = await api.post('/payment/verify', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (verify.data.success) {
              navigate('/payment-success', {
                state: {
                  counsellingId: verify.data.counsellingId,
                  name: verify.data.student.name,
                  email: verify.data.student.email,
                },
              });
            } else {
              setError(
                'Payment verification failed. Please contact support.'
              );
            }
          } catch {
            setError('Verification error. Please contact support.');
          }

          setLoading(false);
        },

        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Something went wrong. Please try again.'
      );
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#0A2E73] text-xs font-bold uppercase tracking-wider">
            Registration Open
          </div>

          <h1
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-5"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Register for Counselling
          </h1>

          <p className="text-slate-600 text-sm mt-3">
            Complete your registration and secure personalized MHT-CET CAP
            guidance.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50">
          {/* Price Section */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 border-b border-slate-200 px-6 py-5 flex items-center justify-between">
            <div>
              <div className="text-slate-900 font-semibold text-sm">
                MHT-CET 2026 Complete Counselling
              </div>

              <div className="text-slate-500 text-xs mt-1">
                One-Time Payment • All CAP Rounds Included
              </div>
            </div>

            <div className="text-right">
              <div className="text-slate-400 text-xs line-through">
                ₹4,999
              </div>

              <div
                className="text-[#0A2E73] text-2xl font-extrabold"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                ₹2,499
              </div>
            </div>
          </div>

          

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 flex flex-col gap-5"
          >
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2">
                Full Name <span className="text-[#0A2E73]">*</span>
              </label>

              <input
                name="name"
                type="text"
                required
                placeholder="As per your documents"
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  setError('');
                }}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-[#0A2E73] transition"
              />
            </div>

            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2">
                Mobile Number <span className="text-[#0A2E73]">*</span>
              </label>

              <input
                name="mobile"
                type="tel"
                required
                pattern="[0-9]{10}"
                placeholder="10-digit WhatsApp number"
                value={form.mobile}
                onChange={(e) => {
                  setForm({ ...form, mobile: e.target.value });
                  setError('');
                }}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-[#0A2E73] transition"
              />

              <p className="text-slate-500 text-xs mt-2">
                Counselling guidance will be sent to this WhatsApp number.
              </p>
            </div>

            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2">
                Email Address <span className="text-[#0A2E73]">*</span>
              </label>

              <input
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  setError('');
                }}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-[#0A2E73] transition text-black"
              />

              <p className="text-slate-500 text-xs mt-2">
                Used for login OTP and confirmation emails.
              </p>
            </div>

            {form.cetPercentile && Number(form.cetPercentile) < 25 && (
  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-800 text-sm">
    ⚠️ Students below 25 percentile should understand that admission or seat
    allotment cannot be guaranteed.
  </div>
)}

{form.cetPercentile &&
  Number(form.cetPercentile) >= 25 &&
  Number(form.cetPercentile) <= 45 && (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-blue-800 text-sm">
      ℹ️ Students between 25 and 45 percentile should remain flexible with
      branch and city preferences for better admission opportunities.
    </div>
)}

            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2">
                MHT-CET Percentile <span className="text-[#0A2E73]">*</span>
              </label>

              <input
                name="cetPercentile"
                type="number"
                required
                step="0.01"
                min="0"
                max="100"
                placeholder="e.g. 87.65"
                value={form.cetPercentile}
                onChange={(e) => {
                  setForm({
                    ...form,
                    cetPercentile: e.target.value,
                  });
                  setError('');
                }}
                className="w-full px-4 py-3 rounded-xl text-black border border-slate-300 bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-[#0A2E73] transition"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm">
                {error}
              </div>
            )}

            <label className="flex items-start gap-3 cursor-pointer mt-4">
  <input
    type="checkbox"
    checked={disclaimerAccepted}
    onChange={(e) => setDisclaimerAccepted(e.target.checked)}
    className="mt-1"
  />

  <span className="text-slate-700 text-xs">
    I understand that admission cannot be guaranteed by Ankush Mayacharya
    Counselling Services. College allotment depends on CAP cutoffs,
    category, seat availability, government rules, and student preferences.
    Counselling fees are non-refundable after registration.
  </span>
</label>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0A2E73] hover:bg-[#08245B] text-white py-4 rounded-xl font-semibold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Processing...
                </span>
              ) : (
                'Pay ₹2,499 & Get Counselling ID'
              )}
            </button>

            <p className="text-center text-slate-500 text-xs">
              🔒 Secure payment via Razorpay • Registration protected with
              encrypted payment processing
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}