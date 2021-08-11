import React, { useRef } from 'react';

function ViewCount({ showCount }) {
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;
  return (
    <div>
      <div>renderCountRef.current: {renderCountRef.current}</div>
      <button onClick={showCount}>显示count</button>
    </div>
  );
}

export default React.memo(ViewCount);
