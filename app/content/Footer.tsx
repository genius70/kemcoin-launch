import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-purple-500/20 bg-gradient-to-b from-slate-950 to-purple-950/50">
      <div className="container mx-auto px-4">
        {/* Action Links */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
          <Link 
            href="https://peerpush.net/p/traderama-pro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-lg hover:bg-white/10 border border-purple-500/30 hover:border-purple-500/50 px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
            🚀 Upvote on PeerPush
          </Link>
          
          <Link 
            href="https://nextbigproduct.com/product/traderama-pro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-lg hover:bg-white/10 border border-purple-500/30 hover:border-purple-500/50 px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
            ⭐ Upvote on NextBigThing
          </Link>
          
          <Link 
            href="https://www.producthunt.com/products/traderama/launches/traderama"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-lg hover:bg-white/10 border border-purple-500/30 hover:border-purple-500/50 px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
            🏆 Upvote on Product Hunt
          </Link>
          
          <Link 
            href="https://kemcoin.gitbook.io/kemcoin-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 hover:from-blue-600/50 hover:to-cyan-600/50 border border-blue-500/30 hover:border-blue-500/50 px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
            📄 White Paper
          </Link>
          
          <Link 
            href="https://www.kemcoin.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-xl text-sm font-bold transition-all hover:scale-110 shadow-xl hover:shadow-2xl hover:shadow-purple-500/50">
            🔥 Join Pre-Sale Now
          </Link>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          <Link 
            href="https://twitter.com/TraderamaPro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-lg hover:bg-white/10 border border-purple-500/20 hover:border-purple-500/40 p-4 rounded-xl text-center transition-all hover:scale-105">
            <div className="text-3xl mb-2">🦅</div>
            <div className="text-sm font-semibold text-purple-300">Twitter</div>
          </Link>
          
          <Link 
            href="https://t.me/TraderamaPro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-lg hover:bg-white/10 border border-purple-500/20 hover:border-purple-500/40 p-4 rounded-xl text-center transition-all hover:scale-105">
            <div className="text-3xl mb-2">💬</div>
            <div className="text-sm font-semibold text-purple-300">Telegram</div>
          </Link>
          
          <Link 
            href="https://discord.gg/TraderamaPro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-lg hover:bg-white/10 border border-purple-500/20 hover:border-purple-500/40 p-4 rounded-xl text-center transition-all hover:scale-105">
            <div className="text-3xl mb-2">👾</div>
            <div className="text-sm font-semibold text-purple-300">Discord</div>
          </Link>
          
          <Link 
            href="https://traderamapro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-lg hover:bg-white/10 border border-purple-500/20 hover:border-purple-500/40 p-4 rounded-xl text-center transition-all hover:scale-105">
            <div className="text-3xl mb-2">🌐</div>
            <div className="text-sm font-semibold text-purple-300">Website</div>
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-purple-500/10 pt-8">
          <p>© 2025 KemCoin. All rights reserved.</p>
          <p className="mt-2">
            <span className="font-semibold text-yellow-400">Disclaimer:</span> Cryptocurrency investments carry risk. DYOR. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}