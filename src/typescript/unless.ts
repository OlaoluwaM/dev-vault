type AnyFunction<PT = unknown, RT = unknown> = (...args: PT[]) => RT
export default function unless(condition: boolean, cb): ReturnType<cb> | void {
    if (condition) return;
    return cb()
}
