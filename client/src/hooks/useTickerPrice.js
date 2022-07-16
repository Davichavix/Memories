import React, { useState, useEffect } from "react";
import { getCurrentPrice } from '../actions/posts'

export const useTickerPrice = () => {
  const [tickerName, setTickerName] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const price = await getCurrentPrice(tickerName);
      if (price) {
        setCurrentPrice(price[0]["current_price"]);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const clear = () => {
    setTickerName("");
    setCurrentPrice(0);
  };

  return {currentPrice, tickerName, clear, handleSubmit, setTickerName};
}