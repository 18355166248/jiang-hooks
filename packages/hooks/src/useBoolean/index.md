---
title: useBoolean
nav:
  title: Hooks
  path: /hooks
group:
  title: Hooks集合
  path: /jiangHooks
---

# useBoolean

优雅的管理 booolean 值的hook

## Examples

### Default usage

<code src="./demo/demo1.tsx" />

### Advanced usage

## API

```typescript
const [state, { toggle, setTrue, setFalse }] = useBoolean(
  defaultValue?: boolean,
);

```

### Params

| 参数           | 说明           | 类型                                       | 默认值   |
| ------------ | ------------ | ---------------------------------------- | ----- |
| defaultValue | 可选项，传入默认的状态值 | `boolean` | `false` |

### Result

| 参数      | 说明   | 类型      |
| ------- | ---- | ------- |
| state   | 状态值  | `boolean` |
| actions | 操作集合 | `Actions`  |

### Actions

| 参数       | 说明                        | 类型                    |
| -------- | ------------------------- | --------------------- |
| toggle   | 触发状态更改的函数,可以接受一个可选参数修改状态值 | (state?: `boolean`) => void |
| setTrue  | 设置为true                    | `() => void  `          |
| setFalse | 设置为false                   | `() => void  `          |

