import React, { FC } from 'react';
import { EventEmitter } from 'mihooks/lib/useEventEmitter';

interface Props {
  focus$: EventEmitter<void>;
}

const View: FC<Props> = (props: Props) => {
  const { focus$ } = props;

  function emit() {
    focus$.emit();
  }
  return <div onClick={emit}>点击获取输入框焦点</div>;
};

export default View;
