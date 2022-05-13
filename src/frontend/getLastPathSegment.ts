export function getLastPathSegment(path: string): string {
  const indexOfLastBackslash = path.lastIndexOf('/');

  return path.slice(indexOfLastBackslash + 1);
}
