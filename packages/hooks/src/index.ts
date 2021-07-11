import useUpdate from './useUpdate';
import useToggle from './useToggle';
import useBoolean from './useBoolean';

// 弃用demo
// const useControlledValue: typeof useControllableValue = function (...args) {
//   console.warn(
//     'useControlledValue is deprecated and will be removed in the next major version. Please use useControllableValue instead.',
//   );
//   return useControllableValue(...args);
// };

export { useUpdate, useToggle, useBoolean };
