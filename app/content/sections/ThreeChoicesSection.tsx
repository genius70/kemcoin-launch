import Image from 'next/image';

export default function ThreeChoicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">🎯 You Have 3 Choices</h2>
          <p className="text-gray-400 text-lg">What will you decide today?</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Best Choice */}
          <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-lg p-8 rounded-3xl border-2 border-green-500/50 hover:scale-105 transition-all relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 px-6 py-2 rounded-full font-bold">BEST CHOICE</div>
            <h3 className="text-2xl font-bold mb-6 text-green-300 text-center">Join Presale Now ✅</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3"><span className="text-green-400 text-xl">✓</span> Buy at $0.004</li>
              <li className="flex items-start gap-3"><span className="text-green-400 text-xl">✓</span> Genesis Trader Status</li>
              <li className="flex items-start gap-3"><span className="text-green-400 text-xl">✓</span> 10X Rewards First Year</li>
              <li className="flex items-start gap-3"><span className="text-green-400 text-xl">✓</span> 30% APY Staking</li>
              <li className="flex items-start gap-3"><span className="text-green-400 text-xl">✓</span> Revenue Share Multiplier</li>
            </ul>
          </div>

          {/* Wait */}
          <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-lg p-8 rounded-3xl border border-yellow-500/30 hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold mb-6 text-yellow-300 text-center">Wait for DEX ⚠️</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3"><span className="text-yellow-400 text-xl">⚠</span> Pay $0.008 (100% more)</li>
              <li className="flex items-start gap-3"><span className="text-yellow-400 text-xl">⚠</span> No Genesis Benefits</li>
              <li className="flex items-start gap-3"><span className="text-yellow-400 text-xl">⚠</span> Standard Rewards Only</li>
              <li className="flex items-start gap-3"><span className="text-yellow-400 text-xl">⚠</span> Miss Early Advantages</li>
            </ul>
          </div>

          {/* Regret */}
          <div className="bg-gradient-to-br from-red-900/30 to-red-950/30 backdrop-blur-lg p-8 rounded-3xl border border-red-500/30 hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold mb-6 text-red-300 text-center">FOMO Later ❌</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3"><span className="text-red-400 text-xl">✗</span> Pay $0.05+ (10X+ more)</li>
              <li className="flex items-start gap-3"><span className="text-red-400 text-xl">✗</span> Watch others profit</li>
              <li className="flex items-start gap-3"><span className="text-red-400 text-xl">✗</span> &quot;I should have bought...&quot;</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          <Image src="https://preview.redd.it/e9f1oam1x6vz.jpg?auto=webp&s=41cd9823904b99c0315ce8980b872c7a4e07881e" alt="Bitcoin Regret Meme 1" width={563} height={348} className="rounded-2xl" />
          <Image src="https://preview.redd.it/shu3p1cshi601.jpg?width=640&crop=smart&auto=webp&s=1bcc460d2e48269c9525fdcf1b6b10d3f746f3cf" alt="Bitcoin Regret Meme 2" width={640} height={440} className="rounded-2xl" />
          <Image src="https://preview.redd.it/your-choice-v0-hzn0v0su2s7g1.png?auto=webp&s=480b46971c739bfbe416ff30859d50f2d4fbbc3e" alt="Your Choice Meme" width={600} height={449} className="rounded-2xl" />
        </div>
      </div>
    </section>
  );
}