/* eslint-disable react-hooks/set-state-in-effect */
// components/sections/PriceTimeline.tsx
import { useEffect, useState } from 'react';

const PRESALE_START_DATE = new Date('2026-03-01T00:00:00Z');
const PRESALE_DURATION_DAYS = 15;

export default function PriceTimeLine() {
  const [currentPhase, setCurrentPhase] = useState<'private' | 'presale' | 'dex'>('private');

  useEffect(() => {
    const now = new Date();
    const endTime = new Date(PRESALE_START_DATE.getTime() + PRESALE_DURATION_DAYS * 24 * 60 * 60 * 1000);

    if (now < PRESALE_START_DATE) setCurrentPhase('private');
    else if (now < endTime) setCurrentPhase('presale');
    else setCurrentPhase('dex');
  }, []);

  return (
    <div className="mb-12">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="text-purple-500">📈</span> Token Price Timeline
          </h3>
          <p className="text-sm text-gray-400 mt-1">Fair launch progression</p>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
            Current: {currentPhase === 'private' ? 'Private Sale' : currentPhase === 'presale' ? 'Presale Live' : 'DEX Launched'}
          </span>
        </div>
      </div>

      {/* Simple Progress Bar */}
      <div className="relative mb-10 px-2">
        <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 to-green-400 transition-all duration-1000"
            style={{ width: currentPhase === 'private' ? '33%' : currentPhase === 'presale' ? '66%' : '100%' }}
          ></div>
        </div>
      </div>

      {/* Three Stage Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Private Sale */}
        <div className={`p-6 rounded-2xl border ${currentPhase === 'private' ? 'bg-purple-900/30 border-purple-500 shadow-lg scale-105' : 'bg-white/5 border-white/10 opacity-70'}`}>
          {currentPhase === 'private' && <div className="absolute -top-3 left-4 px-3 py-1 bg-purple-500 text-xs font-bold rounded uppercase">Active</div>}
          <div className="text-sm uppercase text-purple-300 mb-2">Private Sale</div>
          <div className="text-2xl font-bold">$0.00211</div>
          <div className="text-xs text-gray-400 mt-2">Ended / Limited Access</div>
          <div className="mt-4 text-green-400 text-sm font-bold">Best Entry Price</div>
        </div>

        {/* Presale */}
        <div className={`p-6 rounded-2xl border ${currentPhase === 'presale' ? 'bg-purple-900/30 border-purple-500 shadow-lg scale-105' : currentPhase === 'private' ? 'bg-white/5 border-white/10 opacity-70' : 'bg-white/5 border-white/10'}`}>
          {currentPhase === 'presale' && <div className="absolute -top-3 left-4 px-3 py-1 bg-green-500 text-xs font-bold rounded uppercase">Live Now 🔥</div>}
          <div className="text-sm uppercase text-purple-300 mb-2">Public Presale</div>
          <div className="text-2xl font-bold">$0.00422</div>
          <div className="text-xs text-gray-400 mt-2">Mar 1 - Mar 15, 2026</div>
          <div className="mt-4 text-green-400 text-sm font-bold">60% Higher than Private</div>
        </div>

        {/* DEX Listing */}
        <div className={`p-6 rounded-2xl border ${currentPhase === 'dex' ? 'bg-blue-900/30 border-blue-500 shadow-lg scale-105' : 'bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-blue-500/30 opacity-70'}`}>
          <div className="text-sm uppercase text-blue-400 mb-2">DEX Listing</div>
          <div className="text-2xl font-bold">$0.008455</div>
          <div className="text-xs text-gray-400 mt-2">Public Launch</div>
          <div className="mt-4 text-blue-400 text-sm font-bold uppercase">🚀 Fair Launch Price</div>
        </div>
      </div>
    </div>
  );
}