import { AnyObject } from './utility-types/misc';
import doesObjectHaveProperty from './doesObjHaveProp';

export function objSet<
  Obj extends AnyObject,
  Prop extends string | number,
  NewValue extends Obj[Prop]
>(obj: Obj, property: Prop, value: NewValue) {
  const objHasProperty = doesObjectHaveProperty(obj, property);
  const ObjIsSealed = Object.isSealed(obj);
  const objIsFrozen = Object.isFrozen(obj);

  const objCannotBeModified = (ObjIsSealed && objHasProperty) || objIsFrozen;
  if (objCannotBeModified) return obj;

  return {
    ...obj,
    ...{ [property]: value },
  } as { [Key in keyof Obj | Prop]: Key extends Prop ? NewValue : Obj[Key] };
}
