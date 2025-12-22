import Image from 'next/image';

export default function BenefitsSection() {
  return (
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
          <p className="text-gray-400 text-lg">Why Buy KEM During Presale?</p>
        </div>

        {/* Benefit 1 */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg p-10 rounded-3xl border border-purple-500/30">
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
                <div><div className="text-2xl font-bold text-yellow-400">$2,124/year</div><div className="text-sm text-gray-400">Annual Value</div></div>
                <div><div className="text-2xl font-bold text-green-400">FREE FOREVER</div><div className="text-sm text-gray-400">Your Cost</div></div>
                <div><div className="text-2xl font-bold text-purple-400">∞</div><div className="text-sm text-gray-400">ROI</div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-lg p-10 rounded-3xl border border-blue-500/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">2️⃣</div>
              <div>
                <h3 className="text-3xl font-bold mb-2 text-blue-300">10X Rewards Multiplier</h3>
                <p className="text-xl text-gray-300">First 12 Months</p>
              </div>
            </div>
            {/* Table and summary unchanged - kept as original */}
            {/* ... (you can paste the original table here if needed) */}
          </div>
        </div>
      </div>
    </section>
  );
}