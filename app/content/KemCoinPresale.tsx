 'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// DEVELOPER CONFIGURATION - Moved outside component to prevent re-creation on every render
const PRESALE_START_DATE = new Date('2026-01-01T00:00:00Z'); // Set your presale start date
const PRESALE_DURATION_DAYS = 7; // How many days the presale runs

export default function KemCoinPresale() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [presaleStatus, setPresaleStatus] = useState<'upcoming' | 'live' | 'ended'>('upcoming');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const startTime = PRESALE_START_DATE.getTime();
      const endTime = startTime + (PRESALE_DURATION_DAYS * 24 * 60 * 60 * 1000);
      
      let status: 'upcoming' | 'live' | 'ended' = 'upcoming';
      let timeData = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      
      // Check presale status
      if (now < startTime) {
        // Presale hasn't started yet - countdown to start
        status = 'upcoming';
        const difference = startTime - now;
        
        timeData = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
      } else if (now >= startTime && now < endTime) {
        // Presale is live - countdown to end
        status = 'live';
        const difference = endTime - now;
        
        timeData = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
      } else {
        // Presale has ended
        status = 'ended';
        timeData = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      return { status, timeData };
    };

    const updateCountdown = () => {
      const { status, timeData } = calculateTimeLeft();
      setPresaleStatus(status);
      setTimeLeft(timeData);
    };

    updateCountdown(); // Initial call

    const timer = setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Empty dependency array - effect runs once on mount and cleans up on unmount

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-sm font-semibold mb-8 animate-pulse">
              🔥 PRESALE LIVE NOW
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Support KEMCOIN (KEM) PRE-SALE
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Powering Traderama Pro&apos;s Trading Revolution
              </span>
            </h1>
            <h2><span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
             Copy-Trading Experts • Earn KEMCOIN (KEM) Rewards • Share in Platform Profits • Real Growth 
              </span></h2>
            <p className="text-2xl text-gray-300 mb-12">
              The Token That Pays You to Trade Smarter
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400">$0.008</div>
                <div className="text-sm text-gray-400 mt-2">Presale Price</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
                <div className="text-3xl font-bold text-green-400">25%</div>
                <div className="text-sm text-gray-400 mt-2">Launch Gain</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
                <div className="text-3xl font-bold text-blue-400">30%</div>
                <div className="text-sm text-gray-400 mt-2">APY Staking</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
                <div className="text-3xl font-bold text-yellow-400">10X</div>
                <div className="text-sm text-gray-400 mt-2">Rewards Boost</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#presale" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl">
                Join Presale Now →
              </Link>
              <Link 
                href="#benefits" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-lg px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
<section className="py-12 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg border-y border-purple-500/20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-6">
      <h3 className="text-2xl font-bold mb-2">
        {presaleStatus === 'upcoming' && '⏰ Presale Begins In'}
        {presaleStatus === 'live' && '🔥 Presale Ends In'}
        {presaleStatus === 'ended' && '✅ Presale Has Ended'}
      </h3>
      {presaleStatus === 'upcoming' && (
        <p className="text-gray-400">Mark your calendar for January 1, 2026!</p>
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

      {/* Problem Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">📉 The Problem</h2>
            <p className="text-gray-400 text-lg">Why Most Traders Lose Money</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💸', title: '95% of traders lose money going solo' },
              { icon: '💰', title: 'Expert strategies cost $500-$5,000/month' },
              { icon: '🤔', title: 'No way to verify if "gurus" actually profit' },
              { icon: '😤', title: 'You trade → Exchanges get rich → You get nothing' }
            ].map((problem, idx) => (
              <div key={idx} className="bg-gradient-to-br from-red-900/20 to-red-950/20 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all">
                <div className="text-5xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-semibold text-red-300">{problem.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">💡 The Traderama Pro Solution</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Copy winning strategies, earn rewards, and build wealth automatically</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: '🎯', title: 'Copy Proven Traders', desc: 'Automatically copy profitable strategies from verified traders' },
              { icon: '💬', title: 'Social Trading Network', desc: 'Share insights, strategies, and earn from the community' },
              { icon: '📊', title: 'Advanced Tools', desc: 'Crypto + options trading tools for serious traders' },
              { icon: '🎓', title: 'Trade Education', desc: 'Learn while you trade with integrated educational content' },
              { icon: '💰', title: 'Use-to-Earn', desc: 'Earn KEM rewards for EVERY platform action' },
              { icon: '🔄', title: 'Compound Growth', desc: 'Stake rewards and reinvest for exponential gains' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-purple-300">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-lg p-8 rounded-2xl border border-purple-500/20 max-w-4xl mx-auto">
            <p className="text-xl text-center">
              <span className="font-bold text-purple-300">The Model:</span> Use the platform → Copy winning strategies → Earn KEM → Stake for more rewards → <span className="text-green-400 font-bold">Repeat</span>
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
  <div className="text-center">
    <Image 
      src="/kemcoin-presale-logo.png" 
      alt="KEM - Crypto Goddess of Success"
      width={200}
      height={200}
      className="mx-auto mb-4"
    />
    <p className="text-gray-400 text-sm italic">KEM - Crypto Goddess of Success</p>
  </div>
</div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">💎 Presale Exclusive Benefits</h2>
            <p className="text-gray-400 text-lg">Why Buy KEM in Presale?</p>
          </div>

          {/* Benefit 1 - Genesis Trader Status */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg p-10 rounded-3xl border border-purple-500/30 hover:border-purple-500/50 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">1️⃣</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-purple-300">Genesis Trader Status</h3>
                  <p className="text-xl text-gray-300">LIFETIME VIP</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {[
                  'Unlimited strategy copying (normally $99/mo)',
                  'Premium trading signals (normally $49/mo)',
                  'Advanced analytics dashboard (normally $29/mo)',
                  'Priority customer support',
                  '"Genesis Trader" badge (permanent flex)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">$2,124/year</div>
                    <div className="text-sm text-gray-400">Annual Value</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">FREE FOREVER</div>
                    <div className="text-sm text-gray-400">Your Cost</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">∞</div>
                    <div className="text-sm text-gray-400">ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefit 2 - 10X Rewards */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-lg p-10 rounded-3xl border border-blue-500/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">2️⃣</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-blue-300">10X Rewards Multiplier</h3>
                  <p className="text-xl text-gray-300">First 12 Months</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-blue-500/20">
                      <th className="pb-4 text-blue-300">Platform Action</th>
                      <th className="pb-4 text-gray-400">Regular Reward</th>
                      <th className="pb-4 text-green-400">Presale Holder</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {[
                      { action: 'Copy a trade', regular: '10 KEM', presale: '100 KEM' },
                      { action: 'Share strategy', regular: '50 KEM', presale: '500 KEM' },
                      { action: 'Daily login', regular: '5 KEM', presale: '50 KEM' },
                      { action: 'Refer trader', regular: '100 KEM', presale: '1,000 KEM' },
                      { action: 'Win trade contest', regular: '1,000 KEM', presale: '10,000 KEM' }
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-blue-500/10">
                        <td className="py-4">{row.action}</td>
                        <td className="py-4">{row.regular}</td>
                        <td className="py-4 text-green-400 font-bold">{row.presale}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/20">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg text-gray-400">Regular User</div>
                    <div className="text-2xl font-bold text-gray-300">~5,000 KEM</div>
                  </div>
                  <div>
                    <div className="text-lg text-gray-400">Presale Holder</div>
                    <div className="text-2xl font-bold text-green-400">~50,000 KEM</div>
                  </div>
                  <div>
                    <div className="text-lg text-gray-400">Value Difference</div>
                    <div className="text-2xl font-bold text-yellow-400">$500+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More benefits can be added following the same pattern */}
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">💰 Investment Tiers</h2>
            <p className="text-gray-400 text-lg">Choose Your Path to Genesis Trader Status</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Bronze Tier */}
            <div className="bg-gradient-to-br from-amber-900/20 to-amber-950/20 backdrop-blur-lg p-8 rounded-3xl border border-amber-500/30 hover:border-amber-500/50 transition-all hover:transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🥉</div>
                <h3 className="text-2xl font-bold mb-2">Bronze Founder</h3>
                <div className="text-4xl font-bold text-amber-400 mb-2">$100 - $500</div>
                <div className="text-sm text-gray-400">12,500 - 62,500 KEM</div>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  'Genesis Trader status (lifetime)',
                  '10X rewards multiplier (12 months)',
                  '3X revenue share multiplier',
                  '13% APY staking',
                  '3X governance voting power',
                  '1 Genesis Strategy NFT',
                  'First 1,000 Hall of Fame'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-amber-500/20">
                <div className="text-2xl font-bold text-amber-400">$2,000+</div>
                <div className="text-sm text-gray-400">Total Value</div>
              </div>
            </div>

            {/* Silver Tier - Featured */}
            <div className="bg-gradient-to-br from-gray-400/20 to-gray-600/20 backdrop-blur-lg p-8 rounded-3xl border-2 border-purple-500 relative hover:transform hover:scale-105 transition-all">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🥈</div>
                <h3 className="text-2xl font-bold mb-2">Silver Founder</h3>
                <div className="text-4xl font-bold text-gray-300 mb-2">$500 - $2,000</div>
                <div className="text-sm text-gray-400">62,500 - 250,000 KEM</div>
              </div>

              <div className="mb-4 text-center text-purple-300 font-semibold">Everything in Bronze PLUS:</div>

              <ul className="space-y-3 mb-6">
                {[
                  'Copy trading revenue: 15% cut',
                  'Strategy featured priority',
                  '17% APY staking',
                  'Private Silver traders channel',
                  '2 Genesis Strategy NFTs (you choose)',
                  'Monthly strategy consultation',
                  'Early access to features (7 days)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-purple-500/30">
                <div className="text-2xl font-bold text-purple-400">$5,000+</div>
                <div className="text-sm text-gray-400">Total Value</div>
              </div>
            </div>

            {/* Gold Tier */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-950/20 backdrop-blur-lg p-8 rounded-3xl border border-yellow-500/30 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🥇</div>
                <h3 className="text-2xl font-bold mb-2">Gold Founder</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-2">$2,000+</div>
                <div className="text-sm text-gray-400">250,000+ KEM</div>
              </div>

              <div className="mb-4 text-center text-yellow-300 font-semibold">Everything in Silver PLUS:</div>

              <ul className="space-y-3 mb-6">
                {[
                  'Copy trading revenue: 20% cut',
                  'Verified trader fast-track (30 days)',
                  '30% APY staking',
                  '5X governance voting power',
                  '5 Genesis Strategy NFTs',
                  '1-on-1 pro trader mentorship',
                  'Platform advisory board seat',
                  '5X revenue share multiplier',
                  'Annual Gold summit (expenses paid)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-yellow-500/20">
                <div className="text-2xl font-bold text-yellow-400">$15,000+</div>
                <div className="text-sm text-gray-400">Total Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presale Details CTA */}
      <section id="presale" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-purple-900/60 to-pink-900/60 backdrop-blur-lg p-12 rounded-3xl border-2 border-purple-500/50 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">🔥 Join the Presale</h2>
              <p className="text-xl text-gray-300">Become a Genesis Trader Today</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                { label: 'Presale Price', value: '$0.008 per KEM' },
                { label: 'Launch Price', value: '$0.010 per KEM' },
                { label: 'Soft Cap', value: '$150,000' },
                { label: 'Hard Cap', value: '$400,000' },
                { label: 'Min Investment', value: '$100' },
                { label: 'Max Investment', value: '$5,000' },
                { label: 'Platform', value: 'GemPad (Polygon)' },
                { label: 'Duration', value: '7-10 days' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-purple-500/20">
                  <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                  <div className="text-lg font-bold text-purple-300">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link 
                href="https://gempad.app/presale/kemcoin"
                target="_blank"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-6 rounded-xl font-bold text-2xl transition-all transform hover:scale-105 shadow-2xl">
                Connect Wallet & Join Presale →
              </Link>
              <p className="text-sm text-gray-400 mt-4">
                Connect Wallet → Enter Amount → Confirm → Become a Genesis Trader
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Flywheel Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">🎯 The Traderama Pro Flywheel</h2>
            <p className="text-gray-400 text-lg">Your Path to Automated Wealth</p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="space-y-4">
              {[
                { step: 1, text: 'Buy KEM in Presale' },
                { step: 2, text: 'Get Genesis Trader Status + NFT Strategies' },
                { step: 3, text: 'Copy Winning Trades (auto-pilot profits)' },
                { step: 4, text: 'Share Your Own Strategies (earn KEM + revenue share)' },
                { step: 5, text: 'Earn 10X Rewards on ALL Platform Activity' },
                { step: 6, text: 'Stake KEM for 30% APY (presale holders)' },
                { step: 7, text: 'Receive Quarterly Revenue Payouts (3X-5X multiplier)' },
                { step: 8, text: 'Reinvest → Compound → Build Wealth' }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-lg p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all hover:transform hover:translate-x-2">
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-600 text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="text-xl font-semibold text-gray-200">{item.text}</div>
                    </div>
                  </div>
                  {idx < 7 && (
                    <div className="flex justify-center py-2">
                      <div className="text-3xl text-purple-400">↓</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-lg p-10 rounded-3xl border border-green-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6 text-green-300">The Result:</h3>
            <div className="space-y-4 text-lg">
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 text-2xl">★</span>
                <div>
                  <span className="font-bold text-purple-300">Year 1:</span>
                  <span className="text-gray-300"> 3X-5X your initial investment (conservative)</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 text-2xl">★</span>
                <div>
                  <span className="font-bold text-purple-300">Year 3:</span>
                  <span className="text-gray-300"> 10X-20X (platform growth + compounding)</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 text-2xl">★</span>
                <div>
                  <span className="font-bold text-purple-300">Year 5:</span>
                  <span className="text-gray-300"> 50X-100X (if Traderama becomes major player)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Scenarios */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">📊 Real Use Case Scenarios</h2>
            <p className="text-gray-400 text-lg">See How Different Traders Win with KEM</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Scenario 1 */}
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-lg p-8 rounded-3xl border border-blue-500/30">
              <h3 className="text-3xl font-bold mb-4 text-blue-300">Scenario 1: The Copy Trader</h3>
              <p className="text-xl text-gray-300 mb-6">Profile: Sarah, $1,000 presale investment</p>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-blue-500/20">
                  <h4 className="text-xl font-bold text-blue-300 mb-4">Month 1:</h4>
                  <ul className="space-y-2 text-gray-300 font-mono text-sm">
                    <li>├─ Buys 125,000 KEM at $0.008</li>
                    <li>├─ Gets Genesis Trader status</li>
                    <li>├─ Copies 3 profitable strategies (NFTs)</li>
                    <li>├─ Strategies profit 12% = $120</li>
                    <li>├─ Earns 1,500 KEM from activity (10X boost)</li>
                    <li>└─ <span className="text-green-400 font-bold">Net: $120 profit + 1,500 KEM earned</span></li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-blue-500/20">
                  <h4 className="text-xl font-bold text-blue-300 mb-4">Month 6:</h4>
                  <ul className="space-y-2 text-gray-300 font-mono text-sm">
                    <li>├─ Original KEM now $0.015 = $1,875 value</li>
                    <li>├─ Earned 12,000 additional KEM (10X boost) = $180</li>
                    <li>├─ Trading profits: $800 (copying strategies)</li>
                    <li>├─ Total portfolio: $2,855</li>
                    <li>└─ <span className="text-green-400 font-bold">ROI: 185% in 6 months</span></li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-green-500/30">
                  <h4 className="text-xl font-bold text-green-300 mb-4">Year 1:</h4>
                  <ul className="space-y-2 text-gray-300 font-mono text-sm">
                    <li>├─ KEM price: $0.025 = $3,125 value</li>
                    <li>├─ Earned 50,000 KEM (10X boost) = $1,250</li>
                    <li>├─ Trading profits: $2,500</li>
                    <li>├─ Revenue share payouts: $200</li>
                    <li>├─ Total portfolio: $7,075</li>
                    <li>└─ <span className="text-green-400 font-bold">ROI: 607% in 12 months</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg p-8 rounded-3xl border border-purple-500/30">
              <h3 className="text-3xl font-bold mb-4 text-purple-300">Scenario 2: The Strategy Creator</h3>
              <p className="text-xl text-gray-300 mb-6">Profile: Mike, $500 presale investment</p>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20">
                  <h4 className="text-xl font-bold text-purple-300 mb-4">Month 1:</h4>
                  <ul className="space-y-2 text-gray-300 font-mono text-sm">
                    <li>├─ Buys 62,500 KEM at $0.008</li>
                    <li>├─ Shares his BTC scalping strategy</li>
                    <li>├─ 50 traders copy it (earns 15% of their profits)</li>
                    <li>├─ Total copier profits: $5,000</li>
                    <li>├─ Mike&apos;s cut: $750</li>
                    <li>├─ Plus 2,000 KEM bonus (10X boost)</li>
                    <li>└─ <span className="text-green-400 font-bold">Net: $750 + 2,000 KEM in month 1</span></li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20">
                  <h4 className="text-xl font-bold text-purple-300 mb-4">Month 6:</h4>
                  <ul className="space-y-2 text-gray-300 font-mono text-sm">
                    <li>├─ Strategy now has 300 copiers</li>
                    <li>├─ Monthly revenue share: $3,000-$5,000</li>
                    <li>├─ KEM holdings: 75,000 (original + earned)</li>
                    <li>├─ Value: $1,125 at $0.015</li>
                    <li>├─ Total: $4,125+ portfolio</li>
                    <li>└─ <span className="text-green-400 font-bold">ROI: 725% in 6 months (from strategy sharing alone!)</span></li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-green-500/30">
                  <h4 className="text-xl font-bold text-green-300 mb-4">Year 1:</h4>
                  <ul className="space-y-2 text-gray-300 font-mono text-sm">
                    <li>├─ Verified trader status (fast-tracked)</li>
                    <li>├─ 1,000+ copiers on multiple strategies</li>
                    <li>├─ Monthly revenue: $10,000-$15,000</li>
                    <li>├─ Annual copy trading income: $120K+</li>
                    <li>├─ KEM holdings value: $5,000+</li>
                    <li>└─ <span className="text-green-400 font-bold">ROI: Became full-time trader earning 6 figures</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-lg p-8 rounded-3xl border border-emerald-500/30">
              <h3 className="text-3xl font-bold mb-4 text-emerald-300">Scenario 3: The Passive Staker</h3>
              <p className="text-xl text-gray-300 mb-6">Profile: David, $2,000 presale investment</p>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-emerald-500/20">
                  <h4 className="text-xl font-bold text-emerald-300 mb-4">Month 1:</h4>
                  <ul className="space-y-2 text-gray-300 font-mono text-sm">
                    <li>├─ Buys 250,000 KEM at $0.008</li>
                    <li>├─ Stakes at Platinum tier (30% APY presale bonus)</li>
                    <li>├─ Monthly rewards: 6,250 KEM</li>
                    <li>├─ Value: $62.50 at $0.01</li>
                    <li>└─ <span className="text-green-400 font-bold">Passive income starts immediately</span></li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-emerald-500/20">
                  <h4 className="text-xl font-bold text-emerald-300 mb-4">Month 6:</h4>
                  <ul className="space-y-2 text-gray-300 font-mono text-sm">
                    <li>├─ Staking rewards: 37,500 KEM earned</li>
                    <li>├─ Original + earned: 287,500 KEM</li>
                    <li>├─ KEM price: $0.015</li>
                    <li>├─ Portfolio value: $4,312</li>
                    <li>├─ Revenue share payouts: $150</li>
                    <li>└─ <span className="text-green-400 font-bold">Total: $4,462 (123% ROI, fully passive)</span></li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-green-500/30">
                  <h4 className="text-xl font-bold text-green-300 mb-4">Year 1:</h4>
                  <ul className="space-y-2 text-gray-300 font-mono text-sm">
                    <li>├─ Staking rewards: 75,000 KEM earned</li>
                    <li>├─ Total holdings: 325,000 KEM</li>
                    <li>├─ KEM price: $0.025</li>
                    <li>├─ Portfolio value: $8,125</li>
                    <li>├─ Revenue share payouts: $800</li>
                    <li>├─ Total: $8,925</li>
                    <li>└─ <span className="text-green-400 font-bold">ROI: 346% doing absolutely nothing</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">⚡ Why KemCoin Wins</h2>
            <p className="text-gray-400 text-lg">vs Traditional Copy Trading Platforms</p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-purple-500/30 p-8">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-purple-500/30">
                    <th className="pb-4 text-xl text-purple-300">Feature</th>
                    <th className="pb-4 text-xl text-gray-400 text-center">eToro/3Commas</th>
                    <th className="pb-4 text-xl text-green-400 text-center">Traderama Pro</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {[
                    { feature: 'Monthly Fee', etoro: '$50-$500', traderama: 'FREE (Genesis holders)', highlight: true },
                    { feature: 'Copy Trader Cut', etoro: '10-20%', traderama: '0% (Genesis holders)', highlight: true },
                    { feature: 'Revenue Sharing', etoro: '❌ None', traderama: '✅ 30-50% to holders', highlight: true },
                    { feature: 'Rewards for Usage', etoro: '❌ None', traderama: '✅ Earn KEM daily', highlight: true },
                    { feature: 'Governance', etoro: '❌ None', traderama: '✅ Vote on everything', highlight: false },
                    { feature: 'Staking Income', etoro: '❌ None', traderama: '✅ Up to 30% APY', highlight: true },
                    { feature: 'NFT Strategies', etoro: '❌ None', traderama: '✅ Exclusive access', highlight: false },
                    { feature: 'Ownership', etoro: 'Company', traderama: 'Community', highlight: true }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-purple-500/10">
                      <td className="py-4 font-semibold">{row.feature}</td>
                      <td className="py-4 text-center text-red-400">{row.etoro}</td>
                      <td className={`py-4 text-center font-bold ${row.highlight ? 'text-green-400' : 'text-gray-300'}`}>
                        {row.traderama}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-8 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl p-6 border border-purple-500/20 text-center">
                <p className="text-2xl font-bold text-purple-300">
                  Bottom Line: <span className="text-red-400">eToro makes THEM rich.</span>{' '}
                  <span className="text-green-400">Traderama makes YOU rich.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">❓ Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">Everything You Need to Know</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Is this another pump-and-dump token?",
                a: "No. KEM has real utility: copy trading access, staking rewards, governance, revenue sharing. The token is needed to use the platform."
              },
              {
                q: "When can I start using Traderama Pro?",
                a: "Beta launches Q2 2025 (3-4 months after presale). Genesis holders get early access."
              },
              {
                q: "What if I don't know how to trade?",
                a: "Perfect! That's the point. Copy strategies from verified profitable traders. Zero skill needed."
              },
              {
                q: "Can I sell my KEM tokens anytime?",
                a: "Yes, 50% unlocked at launch, 50% linear over 3 months. But why sell when you're earning rewards + revenue share?"
              },
              {
                q: "Is there a maximum investment?",
                a: "Yes, $5,000 max to prevent whales from dominating. We want decentralized ownership."
              },
              {
                q: "What chains does Traderama support?",
                a: "Launch: Polygon. 2025: Ethereum, BSC, Arbitrum. 2026: Solana, Base."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <h3 className="text-xl font-bold text-purple-300 mb-3">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Take Action Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">🎯 You Have 3 Choices</h2>
            <p className="text-gray-400 text-lg">What Will You Decide?</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Choice 1 - Join Presale */}
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-lg p-8 rounded-3xl border-2 border-green-500/50 hover:transform hover:scale-105 transition-all relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-2 rounded-full text-sm font-bold">
                BEST CHOICE
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-green-300">Choice 1: Join the Presale ✅</h3>
              </div>

              <ul className="space-y-3">
                {[
                  'Pay $0.008 per KEM',
                  'Get Genesis Trader status',
                  'Earn 10X rewards for 12 months',
                  '3X-5X revenue share multiplier',
                  '30% APY staking',
                  'NFT strategy vault',
                  'Become founding member'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-400 text-xl mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Choice 2 - Wait for DEX */}
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-lg p-8 rounded-3xl border border-yellow-500/30 hover:transform hover:scale-105 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-yellow-300">Choice 2: Wait for DEX Launch ⚠️</h3>
              </div>

              <ul className="space-y-3">
                {[
                  'Pay $0.010 per KEM (25% more expensive)',
                  'No Genesis status',
                  'Standard 1X rewards',
                  '1X revenue share',
                  '25% APY staking',
                  'No NFT strategies',
                  'Miss founding member benefits'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-yellow-400 text-xl mt-1">⚠</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Choice 3 - FOMO Later */}
            <div className="bg-gradient-to-br from-red-900/30 to-red-950/30 backdrop-blur-lg p-8 rounded-3xl border border-red-500/30 hover:transform hover:scale-105 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-red-300">Choice 3: FOMO in 6 Months ❌</h3>
              </div>

              <ul className="space-y-3">
                {[
                  'Pay $0.050+ per KEM (500%+ more expensive)',
                  'Platform already successful',
                  'You missed 10X opportunity',
                  'See others making $10K+ monthly',
                  'Regret kicks in',
                  '"I should have bought the presale..."'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-400 text-xl mt-1">✗</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">❓ Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">Everything You Need to Know</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Is this another pump-and-dump token?",
                a: "No. KEM has real utility: copy trading access, staking rewards, governance, revenue sharing. The token is needed to use the platform."
              },
              {
                q: "When can I start using Traderama Pro?",
                a: "Beta launches Q2 2025 (3-4 months after presale). Genesis holders get early access."
              },
              {
                q: "What if I don't know how to trade?",
                a: "Perfect! That's the point. Copy strategies from verified profitable traders. Zero skill needed."
              },
              {
                q: "Can I sell my KEM tokens anytime?",
                a: "Yes, 50% unlocked at launch, 50% linear over 3 months. But why sell when you're earning rewards + revenue share?"
              },
              {
                q: "Is there a maximum investment?",
                a: "Yes, $5,000 max to prevent whales from dominating. We want decentralized ownership."
              },
              {
                q: "What chains does Traderama support?",
                a: "Launch: Polygon. 2025: Ethereum, BSC, Arbitrum. 2026: Solana, Base."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <h3 className="text-xl font-bold text-purple-300 mb-3">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Take Action Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">🎯 You Have 3 Choices</h2>
            <p className="text-gray-400 text-lg">What Will You Decide?</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Choice 1 - Join Presale */}
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-lg p-8 rounded-3xl border-2 border-green-500/50 hover:transform hover:scale-105 transition-all relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-2 rounded-full text-sm font-bold">
                BEST CHOICE
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-green-300">Choice 1: Join the Presale ✅</h3>
              </div>

              <ul className="space-y-3">
                {[
                  'Pay $0.008 per KEM',
                  'Get Genesis Trader status',
                  'Earn 10X rewards for 12 months',
                  '3X-5X revenue share multiplier',
                  '30% APY staking',
                  'NFT strategy vault',
                  'Become founding member'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-400 text-xl mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Choice 2 - Wait for DEX */}
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-lg p-8 rounded-3xl border border-yellow-500/30 hover:transform hover:scale-105 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-yellow-300">Choice 2: Wait for DEX Launch ⚠️</h3>
              </div>

              <ul className="space-y-3">
                {[
                  'Pay $0.010 per KEM (25% more expensive)',
                  'No Genesis status',
                  'Standard 1X rewards',
                  '1X revenue share',
                  '25% APY staking',
                  'No NFT strategies',
                  'Miss founding member benefits'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-yellow-400 text-xl mt-1">⚠</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Choice 3 - FOMO Later */}
            <div className="bg-gradient-to-br from-red-900/30 to-red-950/30 backdrop-blur-lg p-8 rounded-3xl border border-red-500/30 hover:transform hover:scale-105 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-red-300">Choice 3: FOMO in 6 Months ❌</h3>
              </div>

              <ul className="space-y-3">
                {[
                  'Pay $0.050+ per KEM (500%+ more expensive)',
                  'Platform already successful',
                  'You missed 10X opportunity',
                  'See others making $10K+ monthly',
                  'Regret kicks in',
                  '"I should have bought the presale..."'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-400 text-xl mt-1">✗</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2025 KemCoin. All rights reserved.</p>
          <p className="mt-2">
            <span className="font-semibold text-yellow-400">Disclaimer:</span> Cryptocurrency investments carry risk. DYOR. Not financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
}