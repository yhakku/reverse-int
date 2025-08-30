module.exports = function reverse(n) {
  const absN = Math.abs(n);
  const res = String(absN).split('').reverse().join('');

  return Number(res);
};
