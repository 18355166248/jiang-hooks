import { useRef } from 'react';

export type noop = (...args: any[]) => any;

export default function usePersistFn<T extends noop>(fn: T) {
  const fnRef = useRef<T>(fn);
  fnRef.current = fn; // 这地方如果不重新赋值 而是在useRef里面初始化赋值的话 函数内部拿不到最新的值
  // 原因分析: useRef也是有缓存的, 如果不重新赋值的话 fn 是不会重新赋值给fnRef的 但是这个时候 fn已经变了 所以需要重新赋值

  const persistFn = useRef<T>();

  // console.log(fnRef.current === fn, fnRef, persistFn);
  if (!persistFn.current) {
    persistFn.current = function (...args) {
      // console.log(this, args);
      return fnRef.current();
    } as T;
  }

  return persistFn.current;
}
