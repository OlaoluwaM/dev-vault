import { AnyObject } from './utility-types/misc';

export const isEmpty = {
  obj(possiblyEmptyObj: AnyObject): boolean {
    const hasNoProperties = Object.keys(possiblyEmptyObj).length === 0;
    return hasNoProperties;
  },

  array(possiblyEmptyArr: unknown[]): boolean {
    return possiblyEmptyArr.length === 0;
  },

  string(possiblyEmptyString: string): boolean {
    const EMPTY_STRING = '' as const;
    return possiblyEmptyString === EMPTY_STRING;
  },
};
