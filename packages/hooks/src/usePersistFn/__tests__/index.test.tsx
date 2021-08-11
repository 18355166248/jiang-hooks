import { renderHook, act } from '@testing-library/react-hooks';
import usePersistFn from '../index';
import { useState } from 'react';

describe('test usePersistFn', () => {
  it('shoud be defined', () => {
    expect(usePersistFn).toBeDefined();
  });

  const setUp = () =>
    renderHook(() => {
      const [count, setCount] = useState(0);
      const persistFn = usePersistFn(() => {
        return count;
      });

      return {
        count,
        setCount,
        persistFn,
      };
    });

  it('fn not change', () => {
    const { result } = setUp();
    const persistFnCopy = result.current.persistFn;

    act(() => {
      result.current.setCount((count) => count + 1);
    });

    expect(result.current.count).toBe(1);
    expect(result.current.persistFn).toEqual(persistFnCopy);
    expect(result.current.persistFn()).toEqual(1);
  });
});
