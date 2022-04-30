export type Primitive = string | number;
export type AnyObject = Record<Primitive, unknown>;

export default function doesObjectHaveProperty(
  obj: AnyObject,
  property: Primitive
): boolean {
  return Object.prototype.hasOwnProperty.call(obj, property);
}
