import React from 'react';
import { useEventEmitter } from 'jiang-hooks';
import InputBox from './InputBox';
import View from './View';

export default () => {
  const focus$ = useEventEmitter();

  return (
    <div>
      <View focus$={focus$} />
      <InputBox focus$={focus$} />
    </div>
  );
};
