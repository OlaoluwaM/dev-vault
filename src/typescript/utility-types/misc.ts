export type Primitive = string | number | boolean | symbol;

export interface AnyObject {
  [key: Exclude<Primitive, boolean>]: unknown;
}

export type AnyFunction<RT = unknown> = (...args: any[]) => RT;
