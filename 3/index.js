// First attempt to just find prime numbers

const _ = require('lodash')

function generatePrimeNumbers(maxNumber) {
  const numbersBelowCurrent = []
  const primeNumbers = []

  for (let currentValue = 2; currentValue <= maxNumber; currentValue++) {
    if (numbersBelowCurrent.every(number => currentValue % number !== 0)) {
      primeNumbers.push(currentValue)
    }

    numbersBelowCurrent.push(currentValue)
  }

  return primeNumbers
}

console.log(generatePrimeNumbers(2000000))
