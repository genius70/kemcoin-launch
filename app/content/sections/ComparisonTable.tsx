import Image from 'next/image';

export default function ComparisonTable() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">⚡ Why Traderama Pro Wins</h2>
          <p className="text-gray-400 text-lg">vs Traditional Platforms like eToro</p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-purple-500/30 p-8">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-purple-500/30">
                  <th className="pb-4 text-xl text-purple-300">Feature</th>
                  <th className="pb-4 text-xl text-gray-400 text-center">eToro / Others</th>
                  <th className="pb-4 text-xl text-green-400 text-center">Traderama Pro</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-purple-500/10"><td className="py-4 font-semibold">Monthly Fee</td><td className="py-4 text-center text-red-400">$50–$500</td><td className="py-4 text-center text-green-400 font-bold">FREE for Genesis</td></tr>
                <tr className="border-b border-purple-500/10"><td className="py-4 font-semibold">Revenue Sharing</td><td className="py-4 text-center text-red-400">None</td><td className="py-4 text-center text-green-400 font-bold">30–50% to Holders</td></tr>
                <tr className="border-b border-purple-500/10"><td className="py-4 font-semibold">Usage Rewards</td><td className="py-4 text-center text-red-400">None</td><td className="py-4 text-center text-green-400 font-bold">Earn KEM Daily</td></tr>
                <tr className="border-b border-purple-500/10"><td className="py-4 font-semibold">Staking APY</td><td className="py-4 text-center text-red-400">None</td><td className="py-4 text-center text-green-400 font-bold">Up to 30%</td></tr>
                <tr><td className="py-4 font-semibold">Ownership</td><td className="py-4 text-center text-red-400">Company</td><td className="py-4 text-center text-green-400 font-bold">Community</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Image src="https://globalextramoney.com/wp-content/uploads/2019/08/copy-trading-competition-comparison-table.jpg" alt="Copy Trading Comparison Table" width={925} height={695} className="rounded-2xl" />
          <Image src="https://dwptxtcjzzofa.cloudfront.net/webp/g9o34mr/eToro-web-trading-platform-cryptocurrency-watchlist.webp" alt="eToro Platform Example" width={1000} height={728} className="rounded-2xl" />
        </div>

        <div className="mt-12 text-center text-2xl font-bold text-purple-300">
          eToro makes <span className="text-red-400">THEM</span> rich. Traderama makes <span className="text-green-400">YOU</span> rich.
        </div>
      </div>
    </section>
  );
}