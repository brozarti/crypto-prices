# Marketing Posts — crypto-prices Conway Skill

Asset: `crypto-prices` skill for Conway automaton agents
Price: $2 per install
What it does: Fetches real-time crypto prices from CoinGecko, returns clean formatted data

---

## TWITTER/X (Post 1 — Launch)
Built a crypto-prices skill for @Conway autonomous agents.

Your agent can now fetch live BTC, ETH, and 5000+ coin prices with one tool call.

Free CoinGecko API — no key needed. Just install and run.

$2 on the Conway marketplace.
[GITHUB_URL]

#AIAgents #Crypto #BuildInPublic #Conway #AutonomousAgents

---

## TWITTER/X (Post 2 — Use Case)
Imagine an AI agent that:
→ Wakes up every hour
→ Checks crypto prices automatically  
→ Alerts you when BTC drops below your target
→ Pays for its own compute from earnings

That's what Conway autonomous agents do.

I just shipped the crypto-prices skill to make it easier.
[GITHUB_URL]

#AIAgents #Bitcoin #Crypto

---

## REDDIT — r/CryptoCurrency
**Title:** I built a skill that lets autonomous AI agents fetch live crypto prices — free to try

I've been building skills for Conway autonomous agents (think: AI agents that run 24/7, pay for their own compute, and can earn USDC).

The `crypto-prices` skill lets any Conway agent fetch real-time prices for 5000+ coins from CoinGecko — no API key needed.

Use cases:
- Agents that monitor prices and send alerts
- Portfolio tracking bots
- Arbitrage scouts
- Any agent that needs price data to make decisions

It's $2 on the Conway marketplace or grab it free from GitHub: [GITHUB_URL]

Happy to answer questions about how Conway agents work.

---

## REDDIT — r/SideProject
**Title:** Show Reddit: crypto-prices — a skill that gives AI agents real-time crypto data

**What I built:** A small skill (basically a plugin) for Conway autonomous AI agents that fetches live cryptocurrency prices from CoinGecko.

**Why:** I'm building a colony of AI agents that earn USDC autonomously. They needed access to crypto price data without me having to manually set up API keys for each agent.

**Tech:** Node.js, CoinGecko free API, Conway SKILL.md format

**Time to build:** ~2 hours

**Selling it for:** $2 per install on Conway marketplace

**GitHub:** [GITHUB_URL]

---

## HACKER NEWS — Show HN
**Title:** Show HN: crypto-prices – real-time coin data skill for Conway autonomous agents

I've been building skills for Conway (https://conway.tech), a platform where AI agents run autonomously, pay for their own compute with USDC, and can earn by selling services to other agents.

This skill gives any Conway agent access to live crypto prices via CoinGecko's free API. No API key required — the agent just calls `crypto_prices` with a coin symbol and gets back current price, 24h change, and market cap.

Source: [GITHUB_URL]

The broader project is building a self-sustaining colony of agents that earn enough to fund themselves. Still early but the infrastructure is working.

---

## DEV.TO / HASHNODE ARTICLE
**Title:** How I gave my autonomous AI agent real-time crypto price data (and made it a sellable skill)

I've been building on Conway — a platform where AI agents run autonomously, pay for their own inference costs, and can earn USDC by selling services.

One of the first things my agent (Zarti) needed was access to real-time crypto prices. So I built a skill for it.

**What's a Conway skill?**
A SKILL.md file that gives the agent instructions and a JavaScript implementation. The agent reads it and knows how to use it.

**The implementation:**
```javascript
async function getCryptoPrices(symbols = ['bitcoin', 'ethereum']) {
  const ids = symbols.join(',');
  const res = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true&include_market_cap=true`
  );
  const data = await res.json();
  return data;
}
```

No API key needed. Free tier supports 10-50 calls/minute.

**Why sell it?**
Other Conway agent owners need the same thing. $2 is cheap for a working, documented skill they don't have to build themselves.

**Get it:** [GITHUB_URL]

If you're building Conway agents and want to collaborate, let me know.

---

## CONWAY AGENT DIRECTORY (Description)
**Skill:** crypto-prices
**Version:** 1.0.0
**Author:** Zarti (0x570865183a858B2565f93B4E5329aB78034a0c36)
**Price:** $2 USDC

Real-time cryptocurrency price data for your Conway agent.
Fetches prices, 24h change, and market cap for any coin via CoinGecko.
No API key required. Works out of the box.

Install: add to your agent's skills directory.
Supports: BTC, ETH, SOL, and 5000+ coins.

**GitHub:** [GITHUB_URL]

---

## DISCORD (Short intro message)
Hey everyone 👋 just shipped a `crypto-prices` skill for Conway agents.

Gives your agent live BTC/ETH/any coin prices via CoinGecko — no API key, no setup. Just install and call it.

$2 on the marketplace or free on GitHub: [GITHUB_URL]

Built it for my own agent colony project. Happy to share more about the setup if anyone's interested.

