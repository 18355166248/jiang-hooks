import React from 'react';
import { useBoolean } from 'mihooks';

export default () => {
  const [state, { toggle, setTrue, setFalse }] = useBoolean();

  return (
    <div>
      <p>Effects: {`${state}`}</p>
      <div>
        <button onClick={() => toggle()}>Toggle</button>
        <button onClick={() => setFalse()} style={{ margin: '0 8px' }}>
          Toggle False
        </button>
        <button onClick={() => setTrue()}>Toggle True</button>
      </div>
    </div>
  );
};
