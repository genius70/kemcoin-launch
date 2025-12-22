// components/sections/KemTokenDistribution.tsx
import Image from 'next/image';

export default function KemTokenDistribution() {
  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">📊 KEM Token Distribution & Tokenomics</h2>
          <p className="text-gray-400 text-lg">Fully transparent allocation • No team dumps • Locked liquidity</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Pie Chart Visuals */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">Total Supply Allocation</h3>
              {/* Example pie charts from real projects */}
              <div className="grid grid-cols-2 gap-4">
                <Image src="https://4irelabs.com/wp-content/uploads/2024/01/125-2.png" alt="Tokenomics Pie Chart Example 1" width={600} height={400} className="rounded-xl" />
                <Image src="https://cheqd.io/wp-content/uploads/2022/06/cheqds-tokenomics-for-SSI-split-pie-chart-1.png" alt="Tokenomics Pie Chart Example 2" width={600} height={400} className="rounded-xl" />
              </div>
            </div>
          </div>

          {/* Detailed Allocation Table */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20 overflow-x-auto">
            <h3 className="text-2xl font-bold text-purple-300 mb-6">Detailed Breakdown</h3>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-purple-500/30">
                  <th className="py-3">Category</th>
                  <th className="py-3 text-right">Tokens</th>
                  <th className="py-3 text-right">%</th>
                  <th className="py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-purple-500/10"><td>Private Sale</td><td className="text-right">118M</td><td className="text-right">11.8%</td><td>Vested investors</td></tr>
                <tr className="border-b border-purple-500/10"><td>Presale</td><td className="text-right">100M</td><td className="text-right">10.0%</td><td>Public fair sale</td></tr>
                <tr className="border-b border-purple-500/10"><td>Liquidity Pools</td><td className="text-right">300M</td><td className="text-right">30.0%</td><td>Locked 24 months</td></tr>
                <tr className="border-b border-purple-500/10"><td>Platform Contract</td><td className="text-right">369.28M</td><td className="text-right">36.9%</td><td>Rewards, auto-distributed</td></tr>
                <tr className="border-b border-purple-500/10"><td>Ecosystem/Marketing</td><td className="text-right">100M</td><td className="text-right">10.0%</td><td>CEX, partnerships, staking</td></tr>
                <tr><td>Team & Operations</td><td className="text-right">12.72M</td><td className="text-right">1.3%</td><td>4-year vest + cliff</td></tr>
              </tbody>
            </table>
            <p className="mt-6 text-green-400 font-bold text-center">Total Supply: 1,000,000,000 KEM</p>
          </div>
        </div>
      </div>
    </section>
  );
}