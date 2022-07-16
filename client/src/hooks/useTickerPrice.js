import React, { useState, useEffect } from "react";
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

  return {currentPrice, setCurrentPrice, tickerName, setTickerName, clear, handleSubmit, blankName, zeroPrice};
}