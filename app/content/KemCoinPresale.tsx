'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function KemCoinPresale() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
              KemCoin - Projecting Real Growth
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                and Wealth Creation
              </span>
            </h1>
            
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
            <h3 className="text-2xl font-bold mb-2">⏰ Presale Ends In</h3>
          </div>
          <div className="flex justify-center gap-4 md:gap-8">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item) => (
              <div key={item.label} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 min-w-[80px] border border-purple-500/20">
                <div className="text-3xl md:text-5xl font-bold text-purple-400">{String(item.value).padStart(2, '0')}</div>
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

      {/* Social Links */}
      <section className="py-16 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-gray-400">Stay updated and connect with fellow traders</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '🐦', name: 'Twitter', link: 'https://twitter.com/TraderamaPro' },
              { icon: '💬', name: 'Telegram', link: 'https://t.me/TraderamaPro' },
              { icon: '👾', name: 'Discord', link: 'https://discord.gg/TraderamaPro' },
              { icon: '🌐', name: 'Website', link: 'https://traderamapro.com' }
            ].map((social, idx) => (
              <Link 
                key={idx}
                href={social.link}
                target="_blank"
                className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 text-center">
                <div className="text-5xl mb-4">{social.icon}</div>
                <div className="font-bold text-purple-300">{social.name}</div>
              </Link>
            ))}
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