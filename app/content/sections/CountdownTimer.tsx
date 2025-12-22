'use client';

import { useState, useEffect } from 'react';

const PRESALE_START_DATE = new Date('2026-03-01T00:00:00Z');
const PRESALE_DURATION_DAYS = 15;

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });
  const [presaleStatus, setPresaleStatus] = useState<'upcoming' | 'live' | 'ended'>('upcoming');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const startTime = PRESALE_START_DATE.getTime();
      const endTime = startTime + (PRESALE_DURATION_DAYS * 24 * 60 * 60 * 1000);

      if (now < startTime) {
        setPresaleStatus('upcoming');
        const diff = startTime - now;
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        });
      } else if (now < endTime) {
        setPresaleStatus('live');
        const diff = endTime - now;
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        });
      } else {
        setPresaleStatus('ended');
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg border-y border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">
            {presaleStatus === 'upcoming' && '⏰ Presale Begins In'}
            {presaleStatus === 'live' && '🔥 Presale Ends In'}
            {presaleStatus === 'ended' && '✅ Presale Has Ended'}
          </h3>
          {presaleStatus === 'upcoming' && (
            <p className="text-gray-400">Mark your calendar for March 1, 2026!</p>
          )}
        </div>
        <div className="flex justify-center gap-4 md:gap-8">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item) => (
            <div key={item.label} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 min-w-[80px] border border-purple-500/20">
              <div className={`text-3xl md:text-5xl font-bold ${presaleStatus === 'live' ? 'text-green-400' : 'text-purple-400'}`}>
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm text-gray-400 mt-2">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}