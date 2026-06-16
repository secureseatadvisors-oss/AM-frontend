import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo  from "../public/cet.png"
import AM from "../public/am.png"

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
    ['/pricing', 'Pricing'],
    ['/faq', 'FAQ'],
    ['/contact', 'Contact'],
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-white ${
      scrolled ? 'border-slate-200 shadow-sm bg-white/95 backdrop-blur-md' : 'border-slate-100'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LEFT: Instagram Style Brand Identity with Profile Image Layout */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Round Mini Profile Avatar Frame (From Image 1 Style) */}
            <div className="w-10 h-10 rounded-full border-2 border-[#0095f6] p-[1.5px] shrink-0 hidden sm:block">
              <div className="w-full h-full rounded-full bg-slate-200 overflow-hidden">
                <img 
                  src={AM} 
                  alt="Ankush Mayachari" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-bold text-slate-900 tracking-tight text-base group-hover:text-blue-600 transition-colors">
                  ankushmayacharya
                </span>
                {/* Official Instagram Style Blue Tick SVG */}
                <svg className="w-[16px] h-[16px] text-[#0095f6] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="text-slate-500 font-medium text-[11px] uppercase tracking-wider leading-none mt-0.5">
                MHT-CET CAP Specialist
              </span>
            </div>
          </Link>

          {/* CENTER: Navigation Options */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(([path, label]) => (
              <Link key={path} to={path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(path) ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                }`}>
                {label}
              </Link>
            ))}
          </div>

          {/* RIGHT: Actual Official MHT-CET Logo Asset + Auth CTA Block */}
          <div className="hidden md:flex items-center gap-5">
            {/* Official MHT-CET Logo Link Component */}
            <div className="flex items-center gap-2.5 border-r border-slate-200 pr-5">
              <img 
                src={logo} 
                alt="State Common Entrance Test Cell, Maharashtra" 
                className="h-9 w-auto object-contain"
                title="State CET Cell Authority System"
                onError={(e) => { 
                  // Fallback styled layout if image path fails during compilation
                  e.target.style.display = 'none'; 
                }}
              />
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold text-slate-800 tracking-tight uppercase leading-tight">
                  MHT-CET
                </span>
                <span className="text-[9px] font-medium text-slate-500 leading-none">
                  Official Admission Guidelines
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {student ? (
                <>
                  <Link to="/dashboard" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                    Dashboard
                  </Link>
                  <button onClick={logout} className="border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-sm py-2 px-4 rounded-lg transition-colors">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                    Login
                  </Link>
                  <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2.5 px-5 rounded-lg shadow-sm transition-all transform active:scale-95">
                    Register — ₹2499
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Hamburg Trigger Toggle */}
          <button className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile View Navigation Drawer */}
        {menuOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4 bg-white absolute left-0 right-0 px-4 shadow-lg border-b rounded-b-xl">
            <div className="flex flex-col gap-1">
              {navLinks.map(([path, label]) => (
                <Link key={path} to={path}
                  className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive(path) ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}>
                  {label}
                </Link>
              ))}
              
              <div className="border-t border-slate-100 mt-3 pt-4 flex flex-col gap-2.5">
                {/* Official Mobile Logo representation */}
                <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                    Aligned with State CET Cell Regulations
                  </span>
                </div>
                
                {student ? (
                  <>
                    <Link to="/dashboard" className="w-full text-center border border-slate-200 text-slate-700 py-2.5 rounded-lg font-semibold text-sm">
                      Dashboard
                    </Link>
                    <button onClick={logout} className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold text-sm">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="w-full text-center border border-slate-200 text-slate-700 py-2.5 rounded-lg font-semibold text-sm">
                      Login
                    </Link>
                    <Link to="/register" className="w-full text-center bg-blue-600 text-white py-2.5 rounded-lg font-semibold text-sm">
                      Register — ₹2499
                    </Link>
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
