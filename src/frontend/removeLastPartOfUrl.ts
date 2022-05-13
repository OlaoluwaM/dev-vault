export function removeLastPartOfUrl(url: string): string {
  const indexOfLastSlash = url.lastIndexOf('/');

  return url.slice(0, indexOfLastSlash);
}
