import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { student, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  const navLinks = [
    ['/', 'Home'],
    ['/about', 'About'],
    ['/services', 'Services'],
    ['/process', 'Process'],
    ['/pricing', 'Pricing'],
    ['/faq', 'FAQ'],
    ['/contact', 'Contact'],
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">AM</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-white text-sm leading-none block">Ankush Mayachari</span>
              <span className="text-teal-400 text-[10px] leading-none">MHT-CET Counselling</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map(([path, label]) => (
              <Link key={path} to={path}
                className={`text-sm transition-colors duration-150 ${
                  isActive(path) ? 'text-teal-400 font-medium' : 'text-slate-400 hover:text-slate-100'
                }`}>
                {label}
              </Link>
            ))}
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            {student ? (
              <>
                <Link to="/dashboard" className="text-sm text-slate-300 hover:text-white transition-colors">Dashboard</Link>
                <button onClick={logout} className="btn-outline text-sm py-2 px-4">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-sm text-slate-400 hover:text-white transition-colors">Login</Link>
                <Link to="/register" className="btn-primary text-sm py-2 px-5">Register — ₹999</Link>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 text-slate-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 py-4 bg-slate-950/98">
            <div className="flex flex-col gap-1">
              {navLinks.map(([path, label]) => (
                <Link key={path} to={path}
                  className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive(path) ? 'bg-teal-900/30 text-teal-400 font-medium' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}>
                  {label}
                </Link>
              ))}
              <div className="border-t border-slate-800 mt-2 pt-3 flex flex-col gap-2">
                {student ? (
                  <>
                    <Link to="/dashboard" className="btn-outline text-sm py-2.5 text-center">Dashboard</Link>
                    <button onClick={logout} className="btn-primary text-sm py-2.5">Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="btn-outline text-sm py-2.5 text-center">Login</Link>
                    <Link to="/register" className="btn-primary text-sm py-2.5 text-center">Register — ₹999</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
