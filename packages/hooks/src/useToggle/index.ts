import { useState, useMemo } from 'react';

type IState = string | number | boolean | undefined;

export interface Actions<T = IState> {
  setLeft: () => void;
  setRight: () => void;
  toggle: (value?: T) => void;
}

function useToggle<T = boolean | undefined>(): [boolean, Actions<T>];

function useToggle(defaultValue, reverseValue) {
  const [state, setState] = useState(defaultValue);
  const reverseValueOrigin = useMemo(
    () => (reverseValue === undefined ? !reverseValue : reverseValue),
    [reverseValue],
  );

  const actions = useMemo(() => {
    // 切换
    const toggle = (value) => {
      if (value !== undefined) {
        setState(value);
        return;
      }
      setState((s) => (s === defaultValue ? reverseValueOrigin : reverseValue));
    };
    // 设置默认值
    const setLeft = () => setState(defaultValue);
    // 设置取反值
    const setRight = () => setState(reverseValueOrigin);

    return [setLeft, setRight, toggle];
  }, [setState]);

  return [state, actions];
}

export default useToggle;
