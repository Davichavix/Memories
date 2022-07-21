import React from "react";
import {render, cleanup, act, fireEvent, userEvent } from "@testing-library/react";
import TickerPrice from './TickerPrice'

// afterEach(cleanup);

describe("TickerPrice", () => {
  it("renders without crashing", () => {
    render(<TickerPrice />);
  });

  it("renders default state", () => {
      const { getByTestId } = render(<TickerPrice />);

      const tickerName = getByTestId("text-field")
      const stockPrice = getByTestId("price-field")

      expect(tickerName.value).toEqual("")
      expect(stockPrice.textContent).toEqual("$0")

  });

});