import axios from "axios";

export const getCoinData = async (req, res) => {
  try {
    const id = req.params.id;
    const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=1&page=1&sparkline=false&price_change_percentage=24h`;

    const { data } = await axios.get(URL)

    res.status(200).json(data)

  } catch (error) {
    res.status(404).json({ message: error.message})
  }
}