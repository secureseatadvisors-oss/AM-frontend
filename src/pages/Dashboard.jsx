import React, { useState, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';

const Row = ({ label, value, mono }) => (
  <div className="flex items-start justify-between gap-4 py-3 border-b border-slate-800 last:border-0">
    <span className="text-slate-400 text-sm">{label}</span>
    <span className={`text-white text-sm text-right ${mono ? 'font-mono' : 'font-medium'}`}>{value || '—'}</span>
  </div>
);

export default function Dashboard() {
  const { student, logout, setStudent } = useAuth();
  const fileRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true); setUploadError('');
    const fd = new FormData();
    fd.append('photo', file);
    try {
      const { data } = await api.post('/upload/profile-photo', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      if (data.success) {
        await api.put('/student/profile-photo', { photoUrl: data.url });
        setStudent({ ...student, profilePhoto: data.url });
      }
    } catch { setUploadError('Upload failed. Please try again.'); }
    setUploading(false);
  };

  const fmt = (d) => d ? new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : '—';

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="section-heading text-2xl sm:text-3xl">
              Hello, {student?.name?.split(' ')[0]} 👋
            </h1>
            <p className="text-slate-400 text-sm mt-1">MHT-CET 2026 Counselling Dashboard</p>
          </div>
          <button onClick={logout} className="btn-outline text-sm py-2 px-4">Logout</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Profile card */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col items-center gap-4 text-center">
              {/* Avatar */}
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center">
                  {student?.profilePhoto
                    ? <img src={student.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                    : <span className="text-white font-bold text-2xl" style={{fontFamily:'Syne,sans-serif'}}>{student?.name?.[0] || 'S'}</span>
                  }
                </div>
                <button onClick={() => fileRef.current?.click()}
                  className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-teal-600 border-2 border-slate-900 flex items-center justify-center hover:bg-teal-500 transition-colors"
                  title="Upload photo">
                  {uploading
                    ? <div className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" />
                    : <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                  }
                </button>
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleUpload} />
              </div>

              <div>
                <div className="text-white font-semibold text-lg" style={{fontFamily:'Syne,sans-serif'}}>{student?.name}</div>
                <div className="text-slate-400 text-xs mt-0.5">{student?.email}</div>
              </div>

              {/* Counselling ID */}
              <div className="w-full bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                <div className="text-slate-500 text-xs mb-1">Counselling ID</div>
                <div className="font-mono font-bold text-teal-400 text-base tracking-wider">
                  {student?.counsellingId || 'Pending'}
                </div>
              </div>

              {/* Status badge */}
              <div className={`w-full rounded-xl px-4 py-2.5 border text-sm font-medium text-center ${
                student?.paymentStatus === 'completed'
                  ? 'bg-teal-900/20 border-teal-700/40 text-teal-400'
                  : 'bg-yellow-900/20 border-yellow-700/40 text-yellow-400'
              }`}>
                {student?.paymentStatus === 'completed' ? '✓ Payment Confirmed' : '⏳ Payment Pending'}
              </div>

              {uploadError && <p className="text-red-400 text-xs">{uploadError}</p>}
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Details */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h2 className="text-white font-semibold text-base mb-4" style={{fontFamily:'Syne,sans-serif'}}>Registration Details</h2>
              <Row label="Full Name" value={student?.name} />
              <Row label="Email" value={student?.email} />
              <Row label="Mobile" value={student?.mobile} />
              <Row label="CET Percentile" value={student?.cetPercentile ? `${student.cetPercentile}%` : '—'} />
              <Row label="Registration Date" value={fmt(student?.registrationDate)} />
              <Row label="Counselling ID" value={student?.counsellingId} mono />
              <Row label="Payment Status" value={student?.paymentStatus === 'completed' ? '✓ Completed' : 'Pending'} />
            </div>

            {/* WhatsApp instruction */}
            <div className="flex gap-4 bg-emerald-950/20 border border-emerald-800/30 rounded-xl p-5">
              <span className="text-2xl shrink-0">📱</span>
              <div>
                <div className="text-white font-semibold text-sm mb-1">Next Steps</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Please check <strong className="text-emerald-400">WhatsApp on your registered mobile number</strong> for further counselling instructions.
                </p>
                <p className="text-slate-500 text-xs mt-2">Registered number: <span className="text-white">{student?.mobile}</span></p>
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <h2 className="text-white font-semibold text-sm mb-3" style={{fontFamily:'Syne,sans-serif'}}>Quick Links</h2>
              <div className="grid grid-cols-2 gap-2">
                {[['/process', '📋 Counselling Process'], ['/faq', '❓ FAQ'], ['/contact', '💬 Contact Support'], ['/services', '🎯 Our Services']].map(([href, label]) => (
                  <a key={href} href={href}
                    className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-teal-700/50 rounded-lg p-3 text-slate-300 hover:text-white text-sm transition-all duration-150">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
