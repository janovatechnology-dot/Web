import React from 'react';
import HeroCanvas from './components/canvas/HeroCanvas';
import { ShieldCheck, Cpu, Globe, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden font-sans">
      {/* 3D Background element */}
      <HeroCanvas />

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-slate-800/50 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
          JANOVA
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <a href="#solutions" className="hover:text-cyan-400 transition">Solutions</a>
          <a href="#products" className="hover:text-cyan-400 transition">Software Suite</a>
          <a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a>
        </div>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2 rounded-full font-bold text-sm transition shadow-[0_0_20px_rgba(6,182,212,0.5)]">
          Client Portal
        </button>
      </nav>

      {/* Hero Content */}
      <section className="flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 max-w-4xl mx-auto z-10 relative">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6">
          NEXT-GEN ENTERPRISE ECOSYSTEM
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Architecting Software for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Future</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10">
          JANOVA delivers high-performance Billing Systems, AI-driven Attendance Trackers, and immersive 3D Websites tailored for modern businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg">
            Explore Products <ArrowRight size={18} />
          </button>
          <button className="bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold px-8 py-4 rounded-xl transition">
            Book a Demo
          </button>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="products" className="py-24 px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">The JANOVA Suite</h2>
          <p className="text-slate-400">Engineered for absolute speed, clarity, and scale.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl p-8 rounded-2xl hover:border-cyan-500/50 transition group">
            <div className="bg-cyan-500/10 text-cyan-400 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Billing</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Automated invoicing, multi-currency support, and real-time transaction tracking secured via robust Node backend architectures.
            </p>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl p-8 rounded-2xl hover:border-cyan-500/50 transition group">
            <div className="bg-indigo-500/10 text-indigo-400 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition">
              <Cpu size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Attendance Engine</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Biometric synchronization and smart-geofenced tracking systems built to optimize enterprise workforce management.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl p-8 rounded-2xl hover:border-cyan-500/50 transition group">
            <div className="bg-purple-500/10 text-purple-400 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition">
              <Globe size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Immersive 3D Web</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Custom-tailored, high-impact interactive web apps built with React and WebGL to differentiate your brand globally.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
