import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true); setError('');
    try {
      const { data } = await api.post('/admin/login', form);
      if (data.success) { localStorage.setItem('adminKey', data.adminKey); navigate('/admin/dashboard'); }
      else setError('Invalid credentials');
    } catch { setError('Invalid admin credentials'); }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="max-w-sm w-full">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold">AM</span>
          </div>
          <h1 className="section-heading text-2xl">Admin Login</h1>
          <p className="text-slate-400 text-sm mt-1">Ankush Mayachari Counselling</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-slate-300 text-sm mb-1.5">Admin Email</label>
              <input type="email" required className="input-field"
                value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            </div>
            <div>
              <label className="block text-slate-300 text-sm mb-1.5">Password</label>
              <input type="password" required className="input-field"
                value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3 disabled:opacity-60">
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
