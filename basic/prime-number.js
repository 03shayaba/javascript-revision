function prime(n) {
  if (n < 2) return false;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    return true;
  }
  return false;
}
console.log(prime(7));
console.log(prime(2));
console.log(prime(5));
console.log(prime(1));