import React, { useMemo } from 'react';
import useToggle from '../useToggle';

interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  toggle: (val?: boolean | undefined) => void;
}

function useBoolean(defaultValue = false): [boolean, Actions] {
  const [state, { toggle }] = useToggle(defaultValue);

  const actions: Actions = useMemo(() => {
    const setTrue = () => toggle(true);
    const setFalse = () => toggle(false);
    return { setTrue, setFalse, toggle };
  }, [toggle]);

  return [state, actions];
}

export default useBoolean;
