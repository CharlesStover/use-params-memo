import { useMemo } from 'react';

export default function useParamsMemo<T, A extends readonly unknown[]>(
  f: (...fArgs: A) => T,
  args: A,
): T {
  return useMemo((): T => {
    return f(...args);
    // react-hooks/exhaustive-deps can't handle spread arrays in the dependency
    //   array, but it is technically accurate in this case.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [f, ...args]);
}
