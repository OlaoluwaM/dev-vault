export default function pipe(...fns: readonly ((...args: any[]) => any)[]) {
  return (initialValue?: unknown) =>
    fns.reduce(
      (accumulatedValue, fnToRun) => fnToRun(accumulatedValue),
      initialValue
    );
}
