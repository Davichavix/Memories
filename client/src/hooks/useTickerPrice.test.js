import { renderHook, act } from '@testing-library/react-hooks';
import { useTickerPrice } from './useTickerPrice';

describe('useTickerPriceHook', () => {
  it('Should provide a default price', () => {
    const initialName = "";
    const { result } = renderHook(useTickerPrice);
    expect(result.current.tickerName).toEqual(initialName);
  });

  it('Should update the ticker name', () => {
    const updatedName = 'bitcoin';
    const { result } = renderHook(useTickerPrice);

    act(() => {
      result.current.setTickerName(updatedName);
    });

    expect(result.current.tickerName).toEqual(updatedName);
  });
});