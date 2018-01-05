const _ = require('lodash')

function solution(maxNumber) {
  const allOddNumbers = _.range(3, maxNumber + 1, 2)

  allOddNumbers.forEach(function(oddNumber, index, thisArray) {
    thisArray = thisArray.filter(eachNumber => eachNumber % oddNumber !== 0)
  })

  return allOddNumbers
}

console.log(solution(1000))
