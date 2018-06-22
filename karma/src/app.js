function fnum(n) {
  if (n === 1 || n === 2) return 1;
  return fnum(n - 1) + fnum(n - 2);
}

module.exports = fnum;