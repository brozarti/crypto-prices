---
name: crypto-prices
description: "Real-time cryptocurrency prices from CoinGecko. No API key needed."
auto-activate: false
version: 1.0.0
price: 2 USDC
---
# crypto-prices

Fetch live cryptocurrency prices, 24h changes, and market caps for any coin.
Uses CoinGecko free API — no API key required.

## Usage

Get top 10 coins by market cap:
```
node ~/.automaton/skills/crypto-prices/index.js top 10
```

Get specific coins:
```
node ~/.automaton/skills/crypto-prices/index.js bitcoin ethereum solana
```

Use in your agent code:
```javascript
const { getPrices, getTop } = require('./skills/crypto-prices/index.js');
const prices = await getTop(10);
```

## Returns
- Coin name and symbol
- Current USD price
- 24h price change %
- Market cap

## Supported Coins
Any coin listed on CoinGecko (10,000+). Use the coin's CoinGecko ID (e.g. "bitcoin", "ethereum", "solana", "chainlink").
