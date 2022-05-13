export default function extractResourceNameOnly(resourcePath: string): string {
  const indexOfLastSlash = resourcePath.lastIndexOf('/');

  const indexOfDot = resourcePath.lastIndexOf('.');

  return resourcePath.slice(indexOfLastSlash + 1, indexOfDot);
}
