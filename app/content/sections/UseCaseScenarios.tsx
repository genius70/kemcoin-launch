export default function UseCaseScenarios() {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">📊 Real-World Scenarios</h2>
            <p className="text-gray-400 text-lg">How Different Traders Win with KEM</p>
          </div>
  
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Scenario 1: Copy Trader */}
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-lg p-8 rounded-3xl border border-blue-500/30">
              <h3 className="text-3xl font-bold mb-4 text-blue-300">Copy Trader (Passive)</h3>
              <p className="text-xl text-gray-300 mb-6">$1,000 Presale Investment → 250,000 KEM @ $0.004</p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/5 p-6 rounded-xl"><h4 className="font-bold text-blue-300">Month 6</h4><p className="mt-4 text-2xl text-green-400">~185% ROI</p></div>
                <div className="bg-white/5 p-6 rounded-xl"><h4 className="font-bold text-blue-300">Year 1</h4><p className="mt-4 text-2xl text-green-400">~607% ROI</p></div>
                <div className="bg-green-900/30 p-6 rounded-xl border border-green-500/30"><h4 className="font-bold text-green-300">Outcome</h4><p className="mt-4 text-xl">Portfolio $7,000 (trading profits + rewards + appreciation)</p></div>
              </div>
            </div>
  
            {/* Scenario 2: Strategy Creator */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg p-8 rounded-3xl border border-purple-500/30">
              <h3 className="text-3xl font-bold mb-4 text-purple-300">Strategy Creator (Active)</h3>
              <p className="text-xl text-gray-300 mb-6">$500 Presale → Full-time Income Potential</p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/5 p-6 rounded-xl"><h4 className="font-bold text-purple-300">Month 6</h4><p className="mt-4 text-2xl text-green-400">~725% ROI</p></div>
                <div className="bg-white/5 p-6 rounded-xl"><h4 className="font-bold text-purple-300">Year 1</h4><p className="mt-4 text-2xl text-green-400">$120K+ Annual Income</p></div>
                <div className="bg-green-900/30 p-6 rounded-xl border border-green-500/30"><h4 className="font-bold text-green-300">Outcome</h4><p className="mt-4 text-xl">6-figure revenue from copiers</p></div>
              </div>
            </div>
  
            {/* Scenario 3: Passive Staker */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-lg p-8 rounded-3xl border border-emerald-500/30">
              <h3 className="text-3xl font-bold mb-4 text-emerald-300">Passive Staker</h3>
              <p className="text-xl text-gray-300 mb-6">$2,000 Presale → Hands-Off Growth</p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/5 p-6 rounded-xl"><h4 className="font-bold text-emerald-300">Month 6</h4><p className="mt-4 text-2xl text-green-400">~123% ROI</p></div>
                <div className="bg-white/5 p-6 rounded-xl"><h4 className="font-bold text-emerald-300">Year 1</h4><p className="mt-4 text-2xl text-green-400">~346% ROI</p></div>
                <div className="bg-green-900/30 p-6 rounded-xl border border-green-500/30"><h4 className="font-bold text-green-300">Outcome</h4><p className="mt-4 text-xl">Fully passive compounding</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }