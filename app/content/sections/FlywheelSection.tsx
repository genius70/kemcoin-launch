import Image from 'next/image';

export default function FlywheelSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">🎯 The Traderama Pro Flywheel</h2>
          <p className="text-gray-400 text-lg">Your Path to Automated Wealth</p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="space-y-4">
            {[
              'Buy KEM in Presale',
              'Get Genesis Trader Status + Exclusive Benefits',
              'Copy Winning Trades (auto-pilot profits)',
              'Share Your Own Strategies (earn revenue share)',
              'Earn 10X Rewards on ALL Platform Activity',
              'Stake KEM for up to 30% APY',
              'Receive Quarterly Revenue Share Payouts',
              'Reinvest → Compound → Build Wealth'
            ].map((text, idx) => (
              <div key={idx}>
                <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-lg p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="text-xl font-semibold text-gray-200">{text}</div>
                  </div>
                </div>
                {idx < 7 && <div className="flex justify-center py-2"><div className="text-3xl text-purple-400">↓</div></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Image src="https://tokenbrice.xyz/img/2021/defi-flywheel/crv-tokenomics.png" alt="DeFi Flywheel Example" width={1456} height={992} className="rounded-2xl shadow-2xl" />
          <Image src="https://tokenbrice.xyz/img/2021/defi-flywheel/protocole-x-liquity-en.png" alt="Protocol Synergy Flywheel" width={1920} height={1080} className="rounded-2xl shadow-2xl" />
          <Image src="https://miro.medium.com/v2/resize:fit:1400/1*aF2TbG73hmO20lv0rWAjpQ.png" alt="Velocity Token Flywheel" width={1400} height={1068} className="rounded-2xl shadow-2xl" />
        </div>

        <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-lg p-10 rounded-3xl border border-green-500/30 max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-bold text-center mb-6 text-green-300">Projected Outcomes (Conservative)</h3>
          <div className="space-y-4 text-lg">
            <div className="flex items-start gap-3"><span className="text-yellow-400 text-2xl">★</span><div><span className="font-bold text-purple-300">Year 1:</span> <span className="text-gray-300">3X–5X your investment</span></div></div>
            <div className="flex items-start gap-3"><span className="text-yellow-400 text-2xl">★</span><div><span className="font-bold text-purple-300">Year 3:</span> <span className="text-gray-300">10X–20X with compounding</span></div></div>
            <div className="flex items-start gap-3"><span className="text-yellow-400 text-2xl">★</span><div><span className="font-bold text-purple-300">Year 5:</span> <span className="text-gray-300">50X–100X if Traderama becomes dominant</span></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}