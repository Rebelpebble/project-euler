/*
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const _ = require('lodash')

function solution(maxNumber) {
  const allNumbers = _.range(1, maxNumber + 1, 1)

  const sumOfSquares = allNumbers.reduce( (accumulator, number) => accumulator + Math.pow(number, 2))
  const squareOfSum = Math.pow(allNumbers.reduce( (accumulator, number) => accumulator + number), 2)

  return squareOfSum - sumOfSquares
}

console.log(solution(100))
