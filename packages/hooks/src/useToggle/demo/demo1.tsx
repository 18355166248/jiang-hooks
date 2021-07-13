import React from 'react';
import { useToggle } from 'jiang-hooks';

export default () => {
  const [state, { toggle }] = useToggle();

  return (
    <div>
      <p>Effects: {`${state}`}</p>
      <div>
        <button onClick={() => toggle()}>Toggle</button>
        <button onClick={() => toggle(false)} style={{ margin: '0 8px' }}>
          Toggle False
        </button>
        <button onClick={() => toggle(true)}>Toggle True</button>
      </div>
    </div>
  );
};
