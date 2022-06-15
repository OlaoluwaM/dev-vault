import { AnyFunction } from '../../typescript/utility-types/misc';

// Playground link: https://tsplay.dev/WPR9KN
/*
 * Comfortable midway between lazy and eager execution
 * Computation does not happen until the second function call
 * After which, subsequent invocations simply references the cached output
 * This gives us both the advantages of eager & lazy execution, but with one downside
 * The cache can grown indefinitely if the inputs of the memoized function always change
 * Moreover, if the function passed into `memoize` is not pure, then it is possible that we may get stale results
 */

function memoize<Func extends AnyFunction>(func: Func) {
  const cache: Map<string, ReturnType<Func>> = new Map();

  return function memoized(...args: Parameters<Func>) {
    const stringifiedKey = JSON.stringify(args);
    if (cache.has(stringifiedKey)) return cache.get(stringifiedKey)!;

    const computedValueFromPassedInFunc = func.apply(
      this,
      args
    ) as ReturnType<Func>;

    const updatedCacheMap = cache.set(
      stringifiedKey,
      computedValueFromPassedInFunc
    );
    return updatedCacheMap.get(stringifiedKey)!;
  };
}

// Example
function pow(a: number, b: number): number {
  return a ** b;
}

const memoizedPow = memoize(pow); // No computation happens here

memoizedPow(3, 4); // Computation occurs here
memoizedPow(3, 4); // No computation occurs here, returned value is gotten from cache

memoizedPow(5, 5); // Computation will occur again since the function is receiving new arguments
