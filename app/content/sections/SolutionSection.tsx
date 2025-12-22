export default function SolutionSection() {
    return (
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
              <div key={idx} className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
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
    );
  }