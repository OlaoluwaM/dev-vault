import {AnyObject} from './utility-types/misc'

export function objSet<
  Obj extends AnyObject,
  Prop extends string | number,
  NewValue extends Obj[Prop]
>(obj: Obj, property: Prop, value: NewValue) {
  return {
    ...obj,
    ...{ [property]: value },
  } as { [Key in keyof Obj | Prop]: Key extends Prop ? NewValue : Obj[Key] };
}
