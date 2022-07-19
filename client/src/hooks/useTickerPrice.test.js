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
    expect(typeof result.current.tickerName).toStrictEqual('string')
  });

  it('Should provide a default currentPrice value of 0', () => {
    const initialPrice = 0;
    const { result } = renderHook(() => useTickerPrice());
    expect(result.current.currentPrice).toStrictEqual(initialPrice);
  });

  it('Should update the ticker name', () => {
    const updatedPrice = 100;
    const { result } = renderHook(() => useTickerPrice());

    act(() => {
      result.current.setCurrentPrice(updatedPrice);
    });

    expect(result.current.currentPrice).toStrictEqual(updatedPrice);
    expect(typeof result.current.currentPrice).toStrictEqual('number')
  });

  it('Should update TickerPrice to inital 0 when clear function is called', () => {
    const initialPrice = 0;
    const updatedPrice = 100;
    const { result } = renderHook(() => useTickerPrice());

    act(() => {
      result.current.setCurrentPrice(updatedPrice);
      result.current.clear();
    })

    expect(result.current.currentPrice).toStrictEqual(initialPrice);

  });

});