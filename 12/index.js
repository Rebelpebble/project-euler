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
  const allFactors = []
  for (let i = 1; i <= Math.pow(number, 0.5); i++) {
    if (number % i === 0) {
      allFactors.push(i)
      allFactors.push(number / i)
    }
  }

  return allFactors
}

function findTriangleNumber(termNumber) {
  return _.range(0, termNumber + 1, 1).reduce( (accumulator, number) => accumulator + number)
}

console.log(solution(500)) // [76576500, [Factors], 576]
