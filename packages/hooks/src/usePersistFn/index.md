---
title: usePersistFn
nav:
  title: Hooks
  path: /hooks
group:
  title: Hooks集合
  path: /jiangHooks
---

# usePersistFn

持久化 function 的 Hook。

在某些场景中，你可能会需要用 useCallback 记住一个回调，但由于内部函数必须经常重新创建，记忆效果不是很好，导致子组件重复 render。对于超级复杂的子组件，重新渲染会对性能造成影响。通过 usePersistFn，可以保证函数地址永远不会变化。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

## API

```javascript
usePersistFn();
```
