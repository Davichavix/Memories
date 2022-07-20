import { useState } from "react";
import { getCurrentPrice } from '../actions/posts'

export const useTickerPrice = () => {
  const blankName = "";
  const zeroPrice = 0;

  const [tickerName, setTickerName] = useState(blankName);
  const [currentPrice, setCurrentPrice] = useState(zeroPrice);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const price = await getCurrentPrice(tickerName);
      if (typeof price["results"][0]["c"] === "number") {
        setCurrentPrice(price["results"][0]["c"]);
      } else {
        setCurrentPrice("Invalid Ticker")
      }
    } catch (error) {
      setCurrentPrice("Invalid Ticker")
      console.log(error.message);
    }
  }

  const clear = () => {
    setTickerName("");
    setCurrentPrice(0);
  };

  return {currentPrice, setCurrentPrice, tickerName, setTickerName, clear, handleSubmit, blankName, zeroPrice};
}