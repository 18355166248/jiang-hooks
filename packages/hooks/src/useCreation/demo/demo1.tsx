import React, { useState, useRef, useMemo } from 'react';
import { useCreation } from 'mihooks';

class Foo {
  constructor(name) {
    console.log(name);
    this.data = Math.random();
  }

  data: number;
}

export default function () {
  const foo = useCreation(() => new Foo(2), []);
  const foo1 = useMemo(() => {
    console.log('meno');
    return new Foo(3);
  }, []);
  const foo2 = useRef(new Foo(4));
  const [, setFlag] = useState<any>({ a: 1 });

  return (
    <div>
      {/* <div>{foo.data}</div> */}
      <div>{foo1.data}</div>
      <div>{foo2.current.data}</div>
      <button onClick={() => setFlag({})}>刷新页面</button>
    </div>
  );
}
