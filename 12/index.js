const _ = require('lodash')

function solution(numberOfFactors) {
  let term = 1
  let triangleNumber
  let allFactors = []

  while (allFactors.length <= numberOfFactors) { // This will continue evaluating to the next term that has more divisors than the numberOfFactors
    term += 1
    triangleNumber = findTriangleNumber(term)
    allFactors = findAllFactors(triangleNumber)
  }

  return triangleNumber
}

function findAllFactors(number) {
  const lowerFactors = _.range(1, Math.pow(number, 0.5), 1).filter(possibleFactor => number % possibleFactor === 0)
  return lowerFactors.concat(lowerFactors.map(eachLowerFactor => number / eachLowerFactor))
}

function findTriangleNumber(termNumber) {
  return _.range(0, termNumber + 1, 1).reduce( (accumulator, number) => accumulator + number)
}

console.log(solution(500)) // [76576500, [Factors], 576]
