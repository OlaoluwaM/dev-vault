export default type isTuple<T extends unknown[] | readonly unknown[]> =  T['length'] extends number ? (number extends T['length'] ? false : true) : false
