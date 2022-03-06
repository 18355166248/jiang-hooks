---
title: useEventEmitter
nav:
  title: Hooks
  path: /hooks
group:
  title: Hooks集合
  path: /jiangHooks
---

# useEventEmitter

使用订阅发布模式完成组件之间的通讯
在多个组件之间进行事件通知有时会让人非常头疼，借助 EventEmitter ，可以让这一过程变得更加简单。

## 代码演示

### 父组件向子组件共享事件

<code src="./demo/demo1.tsx" />

## API

```javascript
const result: Result = useEventEmitter<T>();
```

## Result

| 参数 | 说明 | 类型 |
|----|----|----|
| emit | 发送一个事件通知 | `(val: T) => void` |
| on | 订阅事件 | `(callback: (val: T) => void) => void` |
