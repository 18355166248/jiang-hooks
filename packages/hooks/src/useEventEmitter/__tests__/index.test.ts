import { renderHook, act } from '@testing-library/react-hooks';
import useEventEmitter from '../index';
import { useState } from 'react';

describe('test useEventEmitter', () => {
  it('shoud be defined', () => {
    expect(useEventEmitter).toBeDefined();
  });

  const setUp = (): any =>
    renderHook(() => {
      let event$ = useEventEmitter<number>();
      const [count, setCount] = useState(0);
      event$.useOn((val) => {
        setCount((count) => count + val);
      });
      event$.useOn((val) => {
        setCount((count) => count + val + 10);
      });

      return {
        event$,
        count,
      };
    });

  it('emit and on should wrod', () => {
    const { result } = setUp();

    act(() => {
      result.current.event$.emit(1);
    });
    expect(result.current.count).toBe(12);

    act(() => {
      result.current.event$.emit(4);
    });
    expect(result.current.count).toBe(30);
  });
});
