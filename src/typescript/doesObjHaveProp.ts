type Primitive = string | number;
type AnyObject = Record<Primitive, unknown>;

export default function doesObjectHaveProperty(
  obj: AnyObject,
  property: Primitive
): boolean {
  return Object.prototype.hasOwnProperty.call(obj, property);
}
