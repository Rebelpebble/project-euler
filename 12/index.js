function solution(numberOfFactors) {
  let term = 1
  let triangleNumber = findTriangleNumber(term) // 1
  let allFactors = findAllFactors(triangleNumber) // 1

  while (allFactors.length <= numberOfFactors) { // This will continue evaluating to the next term that has more divisors than the numberOfFactors
    term += 1
    triangleNumber = findTriangleNumber(term)
    allFactors = findAllFactors(triangleNumber)
  }

  return [triangleNumber, allFactors, allFactors.length]
}

function findAllFactors(number) {
  const allFactors = []
  for (let i = 1; i <= Math.pow(number, 0.5); i++) {
    if (number % i === 0) {
      allFactors.push(i)
      allFactors.push(number / i)
    }
  }

  return allFactors.sort( (a, b) => a - b )
}

function findTriangleNumber(termNumber) {
  let runningTotal = 0

  for (let i = 1; i <= termNumber; i++) {
    runningTotal += i
  }

  return runningTotal
}

console.log(solution(500)) // [76576500, [Factors], 576]
