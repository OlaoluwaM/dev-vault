export default function splitStringIntoArrBasedOnLength(str: string, length: number): string[] {
  const LENGTH_REGEX = new RegExp(`(\\w{${length}})`, 'g');

  // We filter Boolean to remove empty strings
  const lengthSplitRegex = str.split(LENGTH_REGEX).filter(Boolean);
  return lengthSplitRegex;
}
