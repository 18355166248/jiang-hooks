import React from 'react';
import { useUpdate } from 'mihooks';

export default () => {
  const update = useUpdate();

  return (
    <>
      <div>Time: {Date.now()}</div>
      <button type="button" onClick={update} style={{ marginTop: 16 }}>
        update
      </button>
    </>
  );
};
