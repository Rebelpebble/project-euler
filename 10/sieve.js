const _ = require('lodash')


function solution(maxNumber) {
  const allNumbers = _.range(2, maxNumber + 1, 1)

  // iterates through each value in the array as it shrinks in length
  for (let i = 0; i <= allNumbers.length - 1; i++) {
    let step = allNumbers[i]
    let multiplier = step * 2

    while (multiplier <= allNumbers[allNumbers.length - 1]) {
      let indexOfMultiplier = allNumbers.findIndex(number => number === multiplier)

      if (indexOfMultiplier !== -1) {
        allNumbers.splice(indexOfMultiplier, 1)
      }

      multiplier += step
    }
  }

  return allNumbers
}

console.log(solution(100))
