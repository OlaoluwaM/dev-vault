import { AnyObject } from './utility-types/misc';
import { rawTypeOf } from './valueIs-and-rawTypeOf';

export function isObjSubset<PSubS extends AnyObject, PSupS extends AnyObject>(
  potentialSupersetObj: PSupS,
  potentialSubsetObj: PSubS
): boolean {
  const potentialSubset = Object.entries(potentialSubsetObj);

  return potentialSubset.some(([key, value]) => {
    const propertyInSuperset = potentialSupersetObj[key];
    const propertyMatchesInSuperset =
      rawTypeOf(value) === rawTypeOf(propertyInSuperset);

    return !!propertyInSuperset && propertyMatchesInSuperset;
  });
}
