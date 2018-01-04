// Sum all the primes below 2 million.

function solution(maxNumber) {
  let totalOfPrimes = 2

  for (let currentNumber = 3; currentNumber <= maxNumber; currentNumber += 2) {
    let lowerNumber = 3

    while (currentNumber % lowerNumber !== 0) {
      lowerNumber += 2
    }

    if (currentNumber / lowerNumber === 1) {
      totalOfPrimes += currentNumber
      console.log(currentNumber)
    }
  }

  return totalOfPrimes
}

console.log(solution(2000000)) // 142913828922
