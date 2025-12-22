export default function FAQSection() {
    const faqs = [
      { q: "When does the presale end?", a: "January 8, 2026 – only 7 days total." },
      { q: "What price will KEM launch at on DEX?", a: "$0.008 – 100% higher than current presale price." },
      { q: "Is there a minimum or maximum investment?", a: "Min: $50. Max: $5,000 to keep distribution fair." },
      { q: "When can I use Traderama Pro?", a: "Beta access Q2 2025. Genesis presale buyers get priority." },
      { q: "Do I need trading experience?", a: "No! Just copy verified profitable traders automatically." },
      { q: "How are rewards paid?", a: "KEM tokens earned for every action – 10X multiplier for presale buyers first 12 months." },
      { q: "Is liquidity locked?", a: "Yes – 300M KEM (30%) locked for 24 months." },
      { q: "What about team tokens?", a: "Only 1.3% total supply, 4-year vesting with 1-year cliff." },
      { q: "Can I sell my tokens immediately?", a: "50% unlocked at DEX listing, 50% linear vest over 3 months." }
    ];
  
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">❓ Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">Clear answers to common questions</p>
          </div>
  
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <h3 className="text-xl font-bold text-purple-300 mb-3">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }