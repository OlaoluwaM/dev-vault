export default function normalizeArrForSentence(arrOfWords: string[]): string {
  switch (arrOfWords.length) {
    case 0:
    case 1:
      return arrOfWords[0] ?? '';
    case 2:
      return `${arrOfWords[0]} and ${arrOfWords[1]}`;
    default:
      return createGrammaticalSentence(arrOfWords);
  }
}

function createGrammaticalSentence(arrOfWords: string[]): string {
  const arrCopy = [...arrOfWords];

  const lastSentenceElement = `and ${arrCopy.pop()}`;
  arrCopy.push(lastSentenceElement);

  const sentenceList = arrCopy.join(', ');
  return sentenceList;
}
