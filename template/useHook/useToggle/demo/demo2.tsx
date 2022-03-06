/// <reference path="../../../type.d.ts" />
import React from 'react';
import { useToggle } from 'shooks';

export default () => {
  const [state, { toggle, setLeft, setRight }] = useToggle('Hello', 'World');

  return (
    <div>
      <p>Effects: {`${state}`}</p>
      <div>
        <button onClick={() => toggle()}>Toggle</button>
        <button onClick={() => toggle(false)}>Toggle False</button>
        <button onClick={() => toggle(true)}>Toggle True</button>
      </div>
    </div>
  );
};
