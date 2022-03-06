import React from 'react';
import { useEventEmitter } from 'mihooks';
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
