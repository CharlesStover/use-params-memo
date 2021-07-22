# Parameterized React hooks

[![version](https://img.shields.io/npm/v/use-params-memo.svg)](https://www.npmjs.com/package/use-params-memo)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/use-params-memo.svg)](https://www.npmjs.com/package/use-params-memo)
[![downloads](https://img.shields.io/npm/dt/use-params-memo.svg)](https://www.npmjs.com/package/use-params-memo)

`useParamsMemo` is an implementation of React's `useMemo` that applies its
dependency array as the arguments to its function.

This allows the memoization function to easily be abstracted away, code split,
and unit tested as a standalone module with no concerns of React or hooks.

This decreases common errors when the memoization function uses stateful
variables that are not included in the dependency array.

This results in significantly shorter hooks and more maintainable code.

## Install

- `npm install use-params-memo` or
- `yarn add use-params-memo`

## Use

```javascript
import useParamsMemo from 'use-params-memo';

const add = (a, b) => a + b;

export default function useOurSum({ mine, yours }) {
  // Equivalent to: useMemo(() => add(mine, yours), [mine, yours])
  return useParamsMemo(add, [mine, yours]);
}
```

## Contributing

- `yarn set version latest`
- `yarn up * @*/*`
- `yarn add --dev @yarnpkg/sdks`
- `yarn sdks vscode`
