export default function InvestmentTiers() {
    return (
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">💰 Investment Tiers</h2>
            <p className="text-gray-400 text-lg">Choose Your Path to Genesis Trader Status</p>
          </div>
  
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Bronze Tier */}
            <div className="bg-gradient-to-br from-amber-900/20 to-amber-950/20 backdrop-blur-lg p-8 rounded-3xl border border-amber-500/30 hover:border-amber-500/50 hover:scale-105 transition-all">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🥉</div>
                <h3 className="text-2xl font-bold mb-2">Bronze Founder</h3>
                <div className="text-4xl font-bold text-amber-400 mb-2">$100 – $999</div>
              </div>
              <ul className="space-y-3 text-gray-300 text-left">
                <li className="flex items-start gap-3"><span className="text-amber-400">✓</span> Genesis Trader Status</li>
                <li className="flex items-start gap-3"><span className="text-amber-400">✓</span> 10X Rewards Multiplier (12 months)</li>
                <li className="flex items-start gap-3"><span className="text-amber-400">✓</span> Exclusive Bronze Badge</li>
                <li className="flex items-start gap-3"><span className="text-amber-400">✓</span> Early Beta Access</li>
              </ul>
            </div>
  
            {/* Silver Tier */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg p-8 rounded-3xl border border-gray-400/40 hover:border-gray-300/60 hover:scale-105 transition-all">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🥈</div>
                <h3 className="text-2xl font-bold mb-2">Silver Founder</h3>
                <div className="text-4xl font-bold text-gray-300 mb-2">$1,000 – $4,999</div>
              </div>
              <ul className="space-y-3 text-gray-300 text-left">
                <li className="flex items-start gap-3"><span className="text-gray-300">✓</span> Everything in Bronze</li>
                <li className="flex items-start gap-3"><span className="text-gray-300">✓</span> 12X Rewards Multiplier (12 months)</li>
                <li className="flex items-start gap-3"><span className="text-gray-300">✓</span> Exclusive Silver Badge + NFT</li>
                <li className="flex items-start gap-3"><span className="text-gray-300">✓</span> Priority Strategy Copying</li>
                <li className="flex items-start gap-3"><span className="text-gray-300">✓</span> Quarterly Revenue Share Bonus</li>
              </ul>
            </div>
  
            {/* Gold Tier */}
            <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-950/30 backdrop-blur-lg p-8 rounded-3xl border-2 border-yellow-500/60 hover:border-yellow-400/80 hover:scale-110 transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-600 px-6 py-2 rounded-full text-sm font-bold text-black">
                MOST POPULAR
              </div>
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🥇</div>
                <h3 className="text-2xl font-bold mb-2">Gold Founder</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-2">$5,000+</div>
              </div>
              <ul className="space-y-3 text-gray-300 text-left">
                <li className="flex items-start gap-3"><span className="text-yellow-400">✓</span> Everything in Silver</li>
                <li className="flex items-start gap-3"><span className="text-yellow-400">✓</span> 15X Rewards Multiplier (12 months)</li>
                <li className="flex items-start gap-3"><span className="text-yellow-400">✓</span> Exclusive Gold Badge + Rare NFT</li>
                <li className="flex items-start gap-3"><span className="text-yellow-400">✓</span> Personal Onboarding Call</li>
                <li className="flex items-start gap-3"><span className="text-yellow-400">✓</span> 2X Revenue Share Multiplier</li>
                <li className="flex items-start gap-3"><span className="text-yellow-400">✓</span> Lifetime VIP Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }