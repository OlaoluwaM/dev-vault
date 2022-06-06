function concatenateClassNames(
  initialClassName: string,
  otherClassNames: string
): string {
  const SEPARATOR = ' ';
  const concatenatedClassNames = initialClassName.concat(SEPARATOR, otherClassNames);
  return concatenatedClassNames;
}
