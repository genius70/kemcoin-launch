export default function InvestmentTiers() {
    return (
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">💰 Investment Tiers</h2>
            <p className="text-gray-400 text-lg">Choose Your Path to Genesis Trader Status</p>
          </div>
  
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Example tiers - adjust as needed */}
            <div className="bg-gradient-to-br from-amber-900/20 to-amber-950/20 backdrop-blur-lg p-8 rounded-3xl border border-amber-500/30 hover:border-amber-500/50 hover:scale-105 transition-all">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🥉</div>
                <h3 className="text-2xl font-bold mb-2">Bronze Founder</h3>
                <div className="text-4xl font-bold text-amber-400 mb-2">$100 - $999</div>
              </div>
              {/* Add perks list */}
            </div>
            {/* Silver & Gold tiers similarly */}
          </div>
        </div>
      </section>
    );
  }