export default function generateRandomId(initVal: number): string {
  let initialValue = new Uint32Array(initVal);
  window.crypto.getRandomValues(initialValue);

  return (
    performance.now().toString(36) +
    Array.from(initialValue)
      .map(A => A.toString(36))
      .join('')
  ).replace(/\./g, '');
}
