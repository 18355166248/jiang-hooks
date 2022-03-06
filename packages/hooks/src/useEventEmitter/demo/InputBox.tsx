import React, { useRef, FC } from 'react';
import { EventEmitter } from 'shooks/lib/useEventEmitter';

const InputBox: FC<{
  focus$: EventEmitter<void>;
}> = (props) => {
  const inputRef = useRef(null);

  props.focus$.useOn(() => {
    inputRef.current.focus();
  });

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default InputBox;
