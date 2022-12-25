const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});
