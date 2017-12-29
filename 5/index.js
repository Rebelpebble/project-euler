/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20.
*/

const _ = require('lodash')

function solution(start, end) {
  const allNumbers = _.range(start, end + 1, 1)
  let highestProduct = end

  while (!allNumbers.every(number => highestProduct % number === 0)) {
    highestProduct += 1
  }

  return highestProduct
}

console.log(solution(1, 20))
