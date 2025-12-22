export default function ProblemSection() {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">📉 The Problems KEMCOIN (KEM) Token Solves</h2>
            <p className="text-gray-400 text-lg">Why Most Traders Lose Money</p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💸', title: '95% of traders lose money going solo without real support' },
              { icon: '💰', title: 'Expert strategies cost $500-$5,000/mth' },
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
    );
  }