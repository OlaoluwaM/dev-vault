function generateAlphabetsArr(): string[] {
  const TOTAL_NUM_ALPHABETS = 26;
  const CHAR_CODE_OF_LETTER_A = 97;

  const alphabets = Array.from({ length: TOTAL_NUM_ALPHABETS }, (_, ind) =>
    String.fromCharCode(ind + CHAR_CODE_OF_LETTER_A)
  );

  return alphabets;
}
