type PredicateFn<T> = (currentValue: T, currentElemInd: number, array: T[]) => boolean;
export function removeFromArr<ArrT>(array: ArrT[], predicate: PredicateFn<ArrT>) {
  const result = array.filter((...args) => !predicate(...args));
  return result;
}
