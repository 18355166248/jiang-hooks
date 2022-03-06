import React, { useState, useCallback } from 'react';
import { usePersistFn } from 'mihooks';
import { message } from 'antd';
import ViewCount from './ViewCount';

export default function () {
  const [count, setCount] = useState(1);

  const showCountPersistFn = usePersistFn(() => {
    message.success('showCountPersistFn: ' + count);
  });

  const showCount = () => {
    message.success('showCountPersistFn: ' + count);
  };

  const showCountCallback = useCallback(() => {
    message.success('showCountCallback: ' + count);
  }, [count]);

  return (
    <div>
      <div>count: {count}</div>

      <button onClick={() => setCount((count) => count + 1)}>增加count</button>

      <div>
        {/* 弊端: 因为每次都会生成新的函数, 雷同于 useCallback 会重新渲染子组件 */}
        <div>原生组件</div>
        <ViewCount showCount={showCount} />
      </div>
      <div>
        {/* 内存会对新的函数包一层缓存, 缓存内部去调用新的函数, 所以不会触发子组件重新渲染 */}
        <div>usePersistFn组件</div>
        <ViewCount showCount={showCountPersistFn} />
      </div>
      <div>
        {/* 弊端: 因为每次都会生成新的函数, 会重新渲染子组件 */}
        <div>showCountCallback组件</div>
        <ViewCount showCount={showCountCallback} />
      </div>
    </div>
  );
}
