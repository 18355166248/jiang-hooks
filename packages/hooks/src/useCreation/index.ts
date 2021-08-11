import { useRef } from 'react';

export default function useCreation<T>(fn: () => T, deps: any[]) {
  const { current } = useRef({
    deps,
    obj: undefined as undefined | T,
    initial: false,
  });

  if (current.initial === false || !isSameObj(current.deps, deps)) {
    current.deps = deps;
    current.obj = fn();
    current.initial = true;
  }

  return current.obj;
}

function isSameObj(oldVal, val) {
  if (oldVal === val) return true;
  for (let i = 0; i < oldVal.length; i++) {
    if (oldVal[i] !== val[i]) return false;
  }
  return true;
}
