const _ = require('lodash')

function solution(maxNumber) {
  const allOdds = _.range(3, maxNumber + 1, 2)
  const usedFactors = [2]
  const allPrimes = [2]

  allOdds.forEach(function(number) {
    if (usedFactors.every(factor => number % factor !== 0)) {
      allPrimes.push(number)
    }

    usedFactors.push(number)
  })

  return allPrimes.reduce( (accumulator, number) => accumulator + number)
}

console.log(solution(1000))
