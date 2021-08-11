import { renderHook, act } from '@testing-library/react-hooks';
import { useState } from 'react';
import useCreation from '../index';

describe('useCreation', () => {
  it('should be defined', () => {
    expect(useCreation).toBeDefined();
  });

  class Foo {
    data: number;
    constructor() {
      this.data = Math.random();
    }
  }

  const setUp = (): any =>
    renderHook(() => {
      const [count, setCount] = useState(0);
      const [, setFlag] = useState({ a: 1 });
      const foo = useCreation(() => new Foo(), []);
      const foo1 = useCreation(() => new Foo(), [count]);

      return {
        foo,
        foo1,
        setCount,
        setFlag,
      };
    });

  it('show word', () => {
    const hook = setUp();
    const { foo, foo1, setCount, setFlag } = hook.result.current;
    act(() => {
      setFlag({ a: 2 });
    });
    expect(hook.result.current.foo).toBe(foo);
    act(() => {
      setCount(1);
    });
    expect(hook.result.current.foo).toBe(foo);
    expect(hook.result.current.foo1).not.toBe(foo1);
  });
});
