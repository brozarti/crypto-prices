#!/usr/bin/env node
/**
 * crypto-prices — Conway Agent Skill
 * Fetches real-time crypto prices from CoinGecko (free, no API key)
 */

const BASE = "https://api.coingecko.com/api/v3";

async function getPrices(symbols = ["bitcoin", "ethereum", "solana"]) {
  const ids = symbols.join(",");
  const url = `${BASE}/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true&include_market_cap=true`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`CoinGecko error: ${res.status}`);
  const data = await res.json();
  return Object.entries(data).map(([id, v]) => ({
    id,
    price: v.usd,
    change24h: v.usd_24h_change?.toFixed(2) + "%",
    marketCap: "$" + (v.usd_market_cap / 1e9).toFixed(2) + "B",
  }));
}

async function getTop(limit = 10) {
  const url = `${BASE}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`CoinGecko error: ${res.status}`);
  const data = await res.json();
  return data.map(c => ({
    rank: c.market_cap_rank,
    name: c.name,
    symbol: c.symbol.toUpperCase(),
    price: "$" + c.current_price.toLocaleString(),
    change24h: c.price_change_percentage_24h?.toFixed(2) + "%",
    marketCap: "$" + (c.market_cap / 1e9).toFixed(2) + "B",
  }));
}

// CLI usage
const args = process.argv.slice(2);
if (args[0] === "top") {
  getTop(parseInt(args[1]) || 10).then(r => console.table(r)).catch(console.error);
} else if (args.length > 0) {
  getPrices(args).then(r => console.table(r)).catch(console.error);
} else {
  getTop(10).then(r => console.table(r)).catch(console.error);
}

module.exports = { getPrices, getTop };
