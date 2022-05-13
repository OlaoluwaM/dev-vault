// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export default function debounce<T extends (...args: any[]) => void>(
  fn: T,
  ms = 0
): (this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  return function (this: ThisParameterType<T>, ...args: Parameters<T>): any {
    // eslint-disable-next-line
    clearTimeout(timeoutId!);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
}
