// Funct to count prime numbers from 2 to 100
function countPrimeNumbers() {
  let count = 0;

  // Funct to check if number is prime
  function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
      }
      return true;
  }

  // Count primes from 2 to 100
  for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) count++;
  }
  return count;
}

// Measure extim
const startTime = performance.now();
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}
const endTime = performance.now();

// Log the result and execution time
console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
