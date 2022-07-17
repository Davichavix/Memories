import axios from "axios";
import dotenv from 'dotenv';

export const getCoinData = async (req, res) => {
  const apiKey = process.env.API_KEY
  try {
    const id = req.params.id;
    const URL = `https://api.polygon.io/v2/aggs/ticker/${id}/prev?adjusted=true&apiKey=${apiKey}`;

    const { data } = await axios.get(URL)

    res.status(200).json(data)

  } catch (error) {
    res.status(404).json({ message: error.message})
  }
}