import axios from "axios";

export const getCoinData = async (req, res) => {
  try {
    const id = req.params.id;
    const URL = `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`;

    const { data } = await axios.get(URL)

    res.status(200).json(data)
    
  } catch (error) {
    res.status(404).json({ message: error.message})
  }
}