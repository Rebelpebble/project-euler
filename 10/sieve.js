const _ = require('lodash')


function solution(maxNumber) {
  const booleanValues = Array(maxNumber + 1).fill(false) // false = prime, true = not prime
  booleanValues[0] = true
  booleanValues[1] = true

  for (let i = 2; i <= maxNumber; i++) {
    if (booleanValues[i]) {
      continue
    }

    for (let j = i * 2; j <= maxNumber; j += i) {
      booleanValues[j] = true
    }
  }

  const allPrimes = []

  booleanValues.forEach( (boolean, index) => {
    if (!boolean) {
      allPrimes.push(index)
    }
  })

  return allPrimes
}

console.log(solution(1000000))
