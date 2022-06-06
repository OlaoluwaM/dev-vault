import { AnyObject } from './utility-types/misc';

type RawTypes =
  | 'function'
  | 'object'
  | 'array'
  | 'null'
  | 'undefined'
  | 'string'
  | 'number'
  | 'boolean'
  | 'symbol';

export function rawTypeOf(value: unknown): RawTypes {
  return Object.prototype.toString
    .call(value)
    .replace(/\[|\]|object|\s/g, '')
    .toLocaleLowerCase() as RawTypes;
}

export const valueIs = {
  aString(val: unknown): val is string {
    return rawTypeOf(val) === 'string';
  },

  anArray(val: unknown): val is unknown[] {
    return rawTypeOf(val) === 'array';
  },

  anObject(val: unknown): val is AnyObject {
    return rawTypeOf(val) === 'object';
  },

  aNumber(val: unknown): val is number {
    return rawTypeOf(val) === 'number';
  },

  true(val: unknown): val is true {
    return val === true;
  },
};
