/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

function solution(numberOfPrimes) {
  const allPrimes = [2]
  let currentNumber = 3

  while (allPrimes.length <= numberOfPrimes - 1) {
    if (isPrime(currentNumber)) {
      allPrimes.push(currentNumber)
    }

    currentNumber += 1
  }

  return allPrimes.pop()
}

function isPrime(number) {
  for (let i = 2; i <= number - 1; i++) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

console.log(solution(10001))
