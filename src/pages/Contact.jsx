import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="section-tag">Contact</div>
          <h1 className="section-heading text-3xl sm:text-4xl mb-3">Get in Touch</h1>
          <p className="text-slate-400 max-w-md mx-auto">Have a question before registering? Reach out — we reply fast.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact methods */}
          <div className="flex flex-col gap-4">
            {/* <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <div className="text-2xl mb-2">📱</div>
              <h3 className="text-white font-semibold text-base mb-1" style={{fontFamily:'Syne,sans-serif'}}>WhatsApp</h3>
              <p className="text-slate-400 text-sm mb-3">Fastest way to reach us. Replies within a few hours.</p>
              <a href="https://wa.me/917000000000" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-900/30 border border-emerald-700/40 text-emerald-400 rounded-lg px-4 py-2 text-sm font-medium hover:bg-emerald-900/50 transition-colors">
                Chat on WhatsApp →
              </a>
            </div> */}
            {/* <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <div className="text-2xl mb-2">📧</div>
              <h3 className="text-white font-semibold text-base mb-1" style={{fontFamily:'Syne,sans-serif'}}>Email</h3>
              <p className="text-slate-400 text-sm mb-2">For detailed queries or documentation support.</p>
              <a href="mailto:counselling@ankushmayachari.com" className="text-teal-400 text-sm hover:text-teal-300">
                counselling@ankushmayachari.com
              </a>
            </div> */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <div className="text-2xl mb-2">⏱</div>
              <h3 className="text-white font-semibold text-base mb-1" style={{fontFamily:'Syne,sans-serif'}}>Response Times</h3>
              <div className="text-slate-400 text-sm space-y-1">
                <div>WhatsApp — within 2–4 hours</div>
                <div>Email — within 24 hours</div>
                <div className="text-teal-400 text-xs mt-2">Priority support during CAP rounds</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-14 h-14 rounded-full bg-teal-900/40 border border-teal-700/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-1" style={{fontFamily:'Syne,sans-serif'}}>Message Sent</h3>
                <p className="text-slate-400 text-sm">We'll reply within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handle} className="flex flex-col gap-4">
                <h3 className="text-white font-semibold text-base mb-1" style={{fontFamily:'Syne,sans-serif'}}>Send a Message</h3>
                {[
                  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your name' },
                  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'your@email.com' },
                  { label: 'Mobile (optional)', name: 'mobile', type: 'tel', placeholder: '10-digit number' },
                ].map(({ label, name, type, placeholder }) => (
                  <div key={name}>
                    <label className="block text-slate-400 text-sm mb-1.5">{label}</label>
                    <input type={type} className="input-field" placeholder={placeholder}
                      value={form[name]} onChange={e => setForm({...form, [name]: e.target.value})} required={name !== 'mobile'} />
                  </div>
                ))}
                <div>
                  <label className="block text-slate-400 text-sm mb-1.5">Message</label>
                  <textarea required rows={4} className="input-field resize-none" placeholder="Your question..."
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-3">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
