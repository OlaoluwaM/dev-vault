 export function extractSetFromCollection<ArrA, ArrB>(
   collectionOne: ArrA[],
   collectionTwo: (ArrA | ArrB)[],
   excludeSubset = false
 ) {
   return collectionOne.filter(elem => {
     const elemIsInSubset = collectionTwo.includes(elem);
     return excludeSubset ? !elemIsInSubset : elemIsInSubset;
   });
 }
