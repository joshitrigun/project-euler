const nthPrime = (number) => {
  let primes = [2];
  for (let i = 3; primes.length <= number; i += 2) {
    if (primes.every(v => i % v !== 0)) {
      primes.push(i);
      if (primes.length === number) return i;
    }
  }
}
console.log(nthPrime(10001));
