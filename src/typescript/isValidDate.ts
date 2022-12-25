function isValidDate(potentialDate: unknown): potentialDate is Date {
  const isDateType = rawTypeOf(potentialDate) === 'date';
  const isInvalidDate = Number.isNaN(potentialDate);

  return isDateType && !isInvalidDate;
}


// https://stackoverflow.com/questions/643782/how-to-check-whether-an-object-is-a-date



function isValidDateString(potentialDateString: unknown): potentialDateString is string {
  if (typeof potentialDateString !== 'string') return false;
  const epochMilliseconds = Date.parse(potentialDateString);
  return !Number.isNaN(epochMilliseconds);
}

// An 'Invalid Date' is actually NaN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse 
