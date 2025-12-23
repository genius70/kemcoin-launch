'use client';
// Import all new section components
import CountdownTimer from './sections/CountdownTimer';
import PriceTimeline from './sections/PriceTimeLine';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import BenefitsSection from './sections/BenefitsSection';
import InvestmentTiers from './sections/InvestmentTiers';
import FlywheelSection from './sections/FlywheelSection';
import UseCaseScenarios from './sections/UseCaseScenarios';
import ComparisonTable from './sections/ComparisonTable';
import ThreeChoicesSection from './sections/ThreeChoicesSection';
import FAQSection from './sections/KemCoinFaq';
import KemTokenDistribution from './sections/KemTokenDistribution';

import Link from 'next/link';

export default function KemCoinPresale() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-white">
        
        {/* Header is now outside, but we keep the hero inside */}
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
              <p className="text-2xl text-gray-300 mb-12">
                The Token That Pays You to Trade Smarter
              </p>

              {/* Price Timeline */}
              <PriceTimeline />

              {/* CTA Buttons with Tokenomics Link */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Link
                  href="#presale"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
                >
                  Join Presale Now →
                </Link>
                <Link
                  href="#benefits"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-lg px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
                >
                  Learn More
                </Link>
                <Link
                  href="#tokenomics"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
                >
                  View Tokenomics 📊
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Problems */}
        <ProblemSection />

        {/* Solution */}
        <SolutionSection />

        {/* Benefits */}
        <section id="benefits">
          <BenefitsSection />
        </section>

        {/* Investment Tiers */}
        <InvestmentTiers />

        {/* Tokenomics - New Section */}
        <KemTokenDistribution />

        {/* Flywheel */}
        <FlywheelSection />

        {/* Use Cases */}
        <UseCaseScenarios />

        {/* Comparison */}
        <ComparisonTable />

        {/* Three Choices */}
        <ThreeChoicesSection />

        {/* FAQ */}
        <FAQSection />

        {/* Final CTA Community Join */}
        <section className="py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">⚡ Come Join The Community</h2>
          <p className="text-gray-400 text-lg mb-8">Earn Crypto from Traderama Copy Trading Platform</p>
          <div className="flex justify-center gap-6">
            {/* Add your social links here */}
            <Link href="https://t.me/traderamapro" className="text-2xl hover:text-purple-400">Telegram</Link>
            <Link href="https://x.com/traderamapro" className="text-2xl hover:text-purple-400">Twitter</Link>
            <Link href="https://discord.gg/traderamapro" className="text-2xl hover:text-purple-400">Discord</Link>
          </div>
        </section>
      </div>
    </>
  );
}