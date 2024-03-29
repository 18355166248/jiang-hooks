---
title: useCreation
nav:
  title: Hooks
  path: /hooks
group:
  title: Hooks集合
  path: /jiangHooks
---

# useCreation

useCreation 是 useMemo 或 useRef 的替代品。

因为 useMemo 不能保证被 memo 的值一定不会被重计算，而 useCreation 可以保证这一点

而相比于 useRef，你可以使用 useCreation 创建一些常量，这些常量和 useRef 创建出来的 ref 有很多使用场景上的相似，但对于复杂常量的创建，useRef 却容易出现潜在的性能隐患。

```javascript
const a = useRef(new Subject()) // 每次重渲染，都会执行实例化 Subject 的过程，即便这个实例立刻就被扔掉了
const b = useCreation(() => new Subject(), []) // 通过 factory 函数，可以避免性能隐患
```

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

## API

```javascript
useCreation();
```
