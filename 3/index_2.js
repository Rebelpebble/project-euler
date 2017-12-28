// Second attempt to find primes.

let _ = require('lodash')

function generatePrimeNumbers(maxNumber) {
  const allNumbers = _.range(3, maxNumber, 2)
  let i = 0
  let currentValue

  while (i <= allNumbers.length - 1) {
    currentValue = allNumbers[i]

    for (let nextIndex = i + 1; nextIndex <= allNumbers.length - 1; nextIndex++) {
      if (allNumbers[nextIndex] % currentValue === 0) {
        allNumbers.splice(nextIndex, 1)
      }
    }

    i += 1
  }

  allNumbers.unshift(2)
  return allNumbers
}

console.log(generatePrimeNumbers(100000))
