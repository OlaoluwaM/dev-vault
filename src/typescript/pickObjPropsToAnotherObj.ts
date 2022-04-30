import extractSetFromCollection from './extractSubsetFromArray';

export default function pickObjPropsToAnotherObj<
  O extends {},
  P extends keyof O
>(initialObject: O, targetProperties: P[], excludeProperties: true): Omit<O, P>;
export default function pickObjPropsToAnotherObj<
  O extends {},
  P extends keyof O
>(
  initialObject: O,
  targetProperties: P[],
  excludeProperties: false
): Pick<O, P>;
export default function pickObjPropsToAnotherObj<
  O extends {},
  P extends keyof O
>(initialObject: O, targetProperties: P[]): Pick<O, P>;
export default function pickObjPropsToAnotherObj<
  O extends {},
  P extends keyof O
>(initialObject: O, targetProperties: P[], excludeProperties?: boolean) {
  const desiredPropertyKeys = extractSetFromCollection(
    Object.keys(initialObject),
    targetProperties,
    excludeProperties
  ) as P[];

  const objWithDesiredProperties = desiredPropertyKeys.reduce(
    (filteredObj, propName) => {
      filteredObj[propName] = initialObject[propName];
      return filteredObj;
    },
    {} as O
  );

  return objWithDesiredProperties;
}
