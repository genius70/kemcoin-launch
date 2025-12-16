import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-lg border-b border-purple-500/20">
      <div className="w-full px-2 sm:px-4 py-3">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <Link 
            href="https://peerpush.net/p/traderama-pro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-lg hover:bg-white/10 border border-purple-500/30 hover:border-purple-500/50 px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all hover:scale-105 whitespace-nowrap">
            🚀 PeerPush
          </Link>
          
          <Link 
            href="https://nextbigproduct.com/product/traderama-pro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-lg hover:bg-white/10 border border-purple-500/30 hover:border-purple-500/50 px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all hover:scale-105 whitespace-nowrap">
            ⭐ NextBigProduct
          </Link>
          
          <Link 
            href="https://www.producthunt.com/products/traderama/launches/traderama"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-lg hover:bg-white/10 border border-purple-500/30 hover:border-purple-500/50 px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all hover:scale-105 whitespace-nowrap">
            🏆 ProductHunt
          </Link>
          
          <Link 
            href="https://kemcoin.gitbook.io/kemcoin-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 hover:from-blue-600/50 hover:to-cyan-600/50 border border-blue-500/30 hover:border-blue-500/50 px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all hover:scale-105 whitespace-nowrap">
            📄 White Paper
          </Link>
          
          <Link 
            href="https://pinksale.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-3 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all hover:scale-110 shadow-xl whitespace-nowrap">
            🔥 PinkSale
          </Link>

          <Link 
            href="https://gempad.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-3 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all hover:scale-110 shadow-xl whitespace-nowrap">
            🔥 GemPad
          </Link>
        </div>
      </div>
    </header>
  );
}