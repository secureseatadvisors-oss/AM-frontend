import React, { useState, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import { Link } from 'react-router-dom';

const Row = ({ label, value, mono }) => (
  <div className="flex items-center justify-between py-4 border-b border-slate-100 last:border-0">
    <span className="text-slate-500 text-sm font-medium">{label}</span>
    <span className={`text-slate-900 text-sm ${mono ? 'font-mono font-bold' : 'font-semibold'}`}>
      {value || '—'}
    </span>
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
    } catch { setUploadError('Upload failed.'); }
    setUploading(false);
  };

  const fmt = (d) => d ? new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : '—';

  return (
    <div className="min-h-screen bg-[#F4F6F9] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Hello, {student?.name?.split(' ')[0]} 
            </h1>
            <p className="text-slate-500 font-medium mt-2">MHT-CET 2026 Personalised Counselling Dashboard</p>
          </div>
          <button onClick={logout} className="text-slate-600 hover:text-red-600 font-bold text-sm bg-white border border-slate-200 px-5 py-2.5 rounded-xl shadow-sm transition-all">
            Logout
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">

          {/* Left Column: Profile */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-50 bg-blue-100 flex items-center justify-center shadow-inner">
                    {student?.profilePhoto ? <img src={student.profilePhoto} alt="Profile" className="w-full h-full object-cover" /> 
                    : <span className="text-blue-600 font-black text-3xl">{student?.name?.[0]}</span>}
                  </div>
                  <button onClick={() => fileRef.current?.click()} className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center border-4 border-white hover:bg-blue-700 transition-colors">
                    {uploading ? <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <span className="text-lg leading-none">+</span>}
                  </button>
                  <input ref={fileRef} type="file" className="hidden" onChange={handleUpload} />
                </div>
                <h2 className="text-xl font-black text-slate-900" style={{fontFamily:'Syne,sans-serif'}}>{student?.name}</h2>
                <p className="text-slate-400 text-sm mt-1">{student?.email}</p>
              </div>

              <div className="mt-8 bg-slate-50 border border-slate-100 rounded-2xl p-5 text-center">
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Counselling ID</div>
                <div className="font-mono font-black text-blue-700 text-xl">{student?.counsellingId || 'Pending'}</div>
              </div>

              <div className={`mt-4 rounded-xl px-4 py-3 border text-sm font-black text-center ${
                student?.paymentStatus === 'completed' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-amber-50 border-amber-200 text-amber-700'
              }`}>
                {student?.paymentStatus === 'completed' ? '✓ Payment Confirmed' : '⏳ Payment Pending'}
              </div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
              <h2 className="text-xl font-black text-slate-900 mb-6" style={{fontFamily:'Syne,sans-serif'}}>Registration Details</h2>
              <Row label="Full Name" value={student?.name} />
              <Row label="Mobile" value={student?.mobile} />
              <Row label="CET Percentile" value={student?.cetPercentile ? `${student.cetPercentile}%` : '—'} />
              <Row label="Registered On" value={fmt(student?.registrationDate)} />
              <Row label="Payment Status" value={student?.paymentStatus === 'completed' ? 'Completed' : 'Pending'} />
              <Row
  label="Workflow Stage"
  value={
    student?.workflow?.stage?.replaceAll("_"," ") ||
    "REGISTERED"
  }
/>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">

  <h2
    className="text-xl font-black text-slate-900 mb-6"
    style={{ fontFamily: "Syne,sans-serif" }}
  >
    Quick Actions
  </h2>

  {!student?.profile?.completed ? (

    <Link
      to={`/dashboard/${student.counsellingId}/profileform`}
      className="block rounded-2xl border border-blue-200 bg-blue-50 hover:bg-blue-100 transition p-5"
    >

      <div className="flex items-center justify-between">

        <div>

          <h3 className="font-bold text-blue-900">
            Complete Your Profile
          </h3>

          <p className="text-blue-700 text-sm mt-1">
            Complete your counselling profile to unlock AI counselling.
          </p>

        </div>

        <div className="text-2xl">
          →
        </div>

      </div>

    </Link>

  ) : (

    <div className="space-y-4">

      <div className="rounded-2xl border border-green-200 bg-green-50 p-5">

        <div className="font-bold text-green-800">
          ✓ Profile Completed
        </div>

        <p className="text-sm text-green-700 mt-2">
          Your profile has been submitted successfully.
        </p>

      </div>

      {student?.profile?.pdfGenerated ? (

        <button
          className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold py-3"
        >
          Download Confirmation PDF
        </button>

      ) : (

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">

          <p className="text-sm text-amber-700">

            ⏳ Confirmation PDF is being prepared.

          </p>

        </div>

      )}

    </div>

  )}

</div>
          </div>
        </div>
      </div>
    </div>
  );
}