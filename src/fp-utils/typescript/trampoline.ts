type AnyFunction<RT = unknown> = (...args: any[]) => RT;

function trampoline<Fn extends AnyFunction>(fn: Fn) {
  return (...args: Parameters<Fn>) => {
    let callResult = fn(...args);

    while (typeof callResult === "function") {
      callResult = callResult();
    }

    return callResult;
  };
}
