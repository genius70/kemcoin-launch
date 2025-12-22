// components/sections/KemTokenDistribution.tsx
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function KemTokenDistribution() {
  const chartData = {
    labels: [
      'Private Sale (11.8%)',
      'Presale (10.0%)',
      'Liquidity Pools (30.0%)',
      'Platform Contract (36.9%)',
      'Ecosystem/Marketing (10.0%)',
      'Team & Operations (1.3%)',
    ],
    datasets: [
      {
        data: [118000000, 100000000, 300000000, 369280000, 100000000, 12720000],
        backgroundColor: [
          '#A855F7', // Purple
          '#EC4899', // Pink
          '#3B82F6', // Blue
          '#10B981', // Green
          '#EAB308', // Yellow
          '#EF4444', // Red
        ],
        borderColor: '#1E293B',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: '#D1D5DB',
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<'pie'>): string => {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw as number;
            const percentage = ((value / 1000000000) * 100).toFixed(1);
            return `${label}: ${value.toLocaleString()} KEM (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">📊 KEM Token Distribution & Tokenomics</h2>
          <p className="text-gray-400 text-lg">Fully transparent allocation • No team dumps • Locked liquidity</p>
        </div>

        <div className="flex flex-col gap-16 max-w-5xl mx-auto">
          {/* Token Supply Allocation Chart */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-purple-500/20">
            <h3 className="text-3xl font-bold text-purple-300 mb-10 text-center">
              Token Supply Allocation Chart
            </h3>
            <div className="w-full h-[500px] max-w-[800px] mx-auto">
              <Pie data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Detailed Breakdown Table */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-purple-500/20 overflow-x-auto">
            <h3 className="text-3xl font-bold text-purple-300 mb-10 text-center">
              Detailed Breakdown
            </h3>
            <table className="w-full text-left text-base">
              <thead>
                <tr className="border-b border-purple-500/30">
                  <th className="py-4">Category</th>
                  <th className="py-4 text-right">Tokens</th>
                  <th className="py-4 text-right">%</th>
                  <th className="py-4">Notes</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-purple-500/10">
                  <td>Private Sale</td>
                  <td className="text-right">118M</td>
                  <td className="text-right">11.8%</td>
                  <td>Vested investors</td>
                </tr>
                <tr className="border-b border-purple-500/10">
                  <td>Presale</td>
                  <td className="text-right">100M</td>
                  <td className="text-right">10.0%</td>
                  <td>Public fair sale</td>
                </tr>
                <tr className="border-b border-purple-500/10">
                  <td>Liquidity Pools</td>
                  <td className="text-right">300M</td>
                  <td className="text-right">30.0%</td>
                  <td>Locked 24 months</td>
                </tr>
                <tr className="border-b border-purple-500/10">
                  <td>Platform Contract</td>
                  <td className="text-right">369.28M</td>
                  <td className="text-right">36.9%</td>
                  <td>Rewards, auto-distributed</td>
                </tr>
                <tr className="border-b border-purple-500/10">
                  <td>Ecosystem/Marketing</td>
                  <td className="text-right">100M</td>
                  <td className="text-right">10.0%</td>
                  <td>CEX, partnerships, staking</td>
                </tr>
                <tr>
                  <td>Team & Operations</td>
                  <td className="text-right">12.72M</td>
                  <td className="text-right">1.3%</td>
                  <td>4-year vest + cliff</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-10 text-green-400 font-bold text-center text-2xl">
              Total Supply: 1,000,000,000 KEM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}