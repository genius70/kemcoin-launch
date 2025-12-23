export default function FAQSection() {
  const faqs = [
    { 
      q: "Where did the team tokens go?", 
      a: "Only 2% (20M KEM) allocated to team with 4-year vesting and 1-year cliff. We can't touch them for 12 months, then they unlock slowly over 3 more years. We're in this for the long haul." 
    },
    { 
      q: "Can the team dump on us?", 
      a: "Impossible. We hold 0.3% liquid (2.72M KEM = $17k worth). Everything else is sold, locked in liquidity pools, or vesting over multiple years. Check the blockchain - it's all verifiable." 
    },
    { 
      q: "What about liquidity?", 
      a: "We're launching with $1.5M in locked liquidity - that's 10-20x more than typical launches. 300M KEM (30% of supply) locked for 24 months. This ensures stable trading and protects all holders." 
    },
    { 
      q: "How are you funding operations?", 
      a: "We aim to raise $670k from private/presale. 80% will go straight to liquidity. The 20% ($134k) covers marketing, development, and exchange listings. Plus we have a 90M KEM ecosystem fund for long-term growth." 
    },
    { 
      q: "What's the Traderama Pro reserve for?", 
      a: "37% (369M KEM) is locked in the smart contract and automatically distributes 5% every 30 days to Traderama Pro platform users. This is our reward mechanism - immutable and automated. No team access." 
    },
    { 
      q: "When does the presale end?", 
      a: "Presale runs until hard cap of $420,000 is reached. Private sale allocation of $250,000 already completed." 
    },
    { 
      q: "What price will KEM launch at on DEX?", 
      a: "$0.00845592 - providing 1.49x return for presale buyers and 2.98x for private sale investors (vested)." 
    },
    { 
      q: "Is there a minimum or maximum investment?", 
      a: "Presale: Min $500, Max $10,000 per wallet to ensure fair distribution across community members." 
    },
    { 
      q: "When can I use Traderama Pro?", 
      a: "Platform beta launches Q2 2026. All KEM holders get early access with priority based on holding size and duration." 
    },
    { 
      q: "Do I need trading experience?", 
      a: "No! Traderama Pro is designed for beginners. Copy verified profitable traders automatically or use AI-powered signals." 
    },
    { 
      q: "How are platform rewards paid?", 
      a: "KEM tokens distributed automatically every 30 days from the 369M token platform reserve (5% of remaining balance per distribution cycle)." 
    },
    { 
      q: "Can I sell my tokens immediately after launch?", 
      a: "Private sale: 10% unlock at launch, 90% linear vest over 6 months. Presale: 30-day lock after launch, then full unlock. This protects all investors from dumps." 
    },
    { 
      q: "How is this different from other copy trading platforms?", 
      a: "We own our tokenomics with 30% supply locked in liquidity forever, automated platform rewards, and zero team control. Most platforms keep 50%+ for team dumps." 
    },
    { 
      q: "What happens to unsold presale tokens?", 
      a: "Any unsold tokens from the 100M presale allocation go to additional liquidity pools or ecosystem development - never to team wallets." 
    },
    { 
      q: "Is the smart contract audited?", 
      a: "Yes, full audit report available before launch. Contract is UUPS upgradeable with 48-hour timelock and community review period for any changes." 
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">❓ Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Clear answers to protect your investment</p>
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