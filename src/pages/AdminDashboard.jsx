import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [searchBy, setSearchBy] = useState('counsellingId');
  const [error, setError] = useState('');
  const adminKey = localStorage.getItem('adminKey');

  useEffect(() => { if (!adminKey) { navigate('/admin'); return; } fetchStudents(); }, []);

  const fetchStudents = useCallback(async (q = '', by = searchBy) => {
    setLoading(true); setError('');
    try {
      const { data } = await api.get('/admin/students', {
        params: q ? { search: q, searchBy: by } : {},
        headers: { 'x-admin-key': adminKey },
      });
      setStudents(data.students || []);
    } catch (err) {
      if (err.response?.status === 401) { localStorage.removeItem('adminKey'); navigate('/admin'); }
      else setError('Failed to load students');
    }
    setLoading(false);
  }, [adminKey, searchBy]);

  const fmt = (d) => d ? new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—';

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Top bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">AM</span>
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Admin Dashboard</div>
              <div className="text-slate-400 text-xs">Ankush Mayachari Counselling</div>
            </div>
          </div>
          <button onClick={() => { localStorage.removeItem('adminKey'); navigate('/admin'); }}
            className="btn-outline text-sm py-2 px-4">Logout</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {[
            ['Total Registered', students.length, 'text-white'],
            ['Payments Confirmed', students.filter(s => s.paymentStatus === 'completed').length, 'text-teal-400'],
            ['Revenue', `₹${(students.filter(s => s.paymentStatus === 'completed').length * 999).toLocaleString()}`, 'text-teal-400'],
          ].map(([label, val, cls]) => (
            <div key={label} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <div className="text-slate-400 text-xs mb-1">{label}</div>
              <div className={`font-bold text-xl ${cls}`} style={{fontFamily:'Syne,sans-serif'}}>{val}</div>
            </div>
          ))}
        </div>

        {/* Search bar */}
        <form onSubmit={(e) => { e.preventDefault(); fetchStudents(search, searchBy); }}
          className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-5 flex flex-col sm:flex-row gap-3">
          <select value={searchBy} onChange={e => setSearchBy(e.target.value)}
            className="input-field sm:w-44 shrink-0">
            <option value="counsellingId">Counselling ID</option>
            <option value="mobile">Mobile Number</option>
            <option value="email">Email</option>
          </select>
          <input type="text" className="input-field flex-1"
            placeholder={`Search by ${searchBy}...`}
            value={search} onChange={e => setSearch(e.target.value)} />
          <button type="submit" className="btn-primary shrink-0 py-2 px-6 text-sm">Search</button>
          <button type="button" onClick={() => { setSearch(''); fetchStudents(''); }}
            className="btn-outline shrink-0 py-2 px-4 text-sm">Clear</button>
        </form>

        {error && (
          <div className="bg-red-950/40 border border-red-800/40 rounded-xl px-4 py-3 text-red-400 text-sm mb-4">{error}</div>
        )}

        {/* Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-7 h-7 border-2 border-teal-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : students.length === 0 ? (
            <div className="text-center py-16 text-slate-500 text-sm">No students found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-800">
                    {['Counselling ID', 'Name', 'Email', 'Mobile', 'Percentile', 'Status', 'Date'].map(h => (
                      <th key={h} className="text-left px-4 py-3 text-slate-500 font-medium text-xs uppercase tracking-wider whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {students.map((s, i) => (
                    <tr key={s._id}
                      className={`border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors ${i % 2 === 0 ? '' : 'bg-slate-800/10'}`}>
                      <td className="px-4 py-3 font-mono text-teal-400 font-medium whitespace-nowrap">{s.counsellingId}</td>
                      <td className="px-4 py-3 text-white whitespace-nowrap">{s.name}</td>
                      <td className="px-4 py-3 text-slate-300 max-w-[180px] truncate">{s.email}</td>
                      <td className="px-4 py-3 text-slate-300 whitespace-nowrap">{s.mobile}</td>
                      <td className="px-4 py-3 text-slate-300">{s.cetPercentile}%</td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                          s.paymentStatus === 'completed'
                            ? 'bg-teal-900/40 text-teal-400 border border-teal-700/40'
                            : 'bg-yellow-900/30 text-yellow-400 border border-yellow-700/30'
                        }`}>{s.paymentStatus}</span>
                      </td>
                      <td className="px-4 py-3 text-slate-400 whitespace-nowrap">{fmt(s.registrationDate)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <p className="text-slate-600 text-xs mt-3">Showing {students.length} records</p>
      </div>
    </div>
  );
}
