const exurl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=false&price_change_percentage=24h';

export const getCoinPriceData = () => axios.get(exurl)