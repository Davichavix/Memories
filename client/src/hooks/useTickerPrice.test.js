import { renderHook, act } from '@testing-library/react';
import { useTickerPrice } from './useTickerPrice';

describe('useTickerPriceHook', () => {
  it('Should provide a default tickerName value of ""', () => {
    const initialName = "";
    const { result } = renderHook(() => useTickerPrice());
    expect(result.current.tickerName).toEqual(initialName);
  });

  it('Should update the ticker name', () => {
    const updatedName = 'bitcoin';
    const { result } = renderHook(() => useTickerPrice());

    act(() => {
      result.current.setTickerName(updatedName);
    });

    expect(result.current.tickerName).toEqual(updatedName);
  });

  it('Should provide a default currentPrice value of 0', () => {
    const initialPrice = 0;
    const { result } = renderHook(() => useTickerPrice());
    expect(result.current.currentPrice).toEqual(initialPrice);
  });

  it('Should update the ticker name', () => {
    const updatedPrice = 100;
    const { result } = renderHook(() => useTickerPrice());

    act(() => {
      result.current.setCurrentPrice(updatedPrice);
    });

    expect(result.current.currentPrice).toEqual(updatedPrice);
  });
});