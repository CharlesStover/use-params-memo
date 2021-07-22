/* eslint-disable @typescript-eslint/no-magic-numbers */
import { renderHook } from '@testing-library/react-hooks';
import useParamsMemo from '.';

// We return an array so that we can test constant memory references across
//   renders.
const add = (a: number, b: number): [number] => [a + b];

describe('useParamsMemo', (): void => {
  it('should memoize the result of the function', (): void => {
    const { rerender, result } = renderHook(
      ([f, args]: readonly [
        (...fArgs: readonly number[]) => [number],
        readonly number[],
      ]): [number] => useParamsMemo(f, args),
      {
        initialProps: [add, [1, 2]],
      },
    );

    const result1: [number] = result.current;
    expect(result1).toEqual([3]);

    rerender([add, [1, 2]]);

    const result2: [number] = result.current;
    expect(result2).toEqual([3]);

    expect(result1).toBe(result2);
  });
});
