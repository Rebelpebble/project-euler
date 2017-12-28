/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function allFactors(maxNumber) {
  const arrayOfAllFactors = []
  let highestFactor = maxNumber

  for (let i = 2; i <= highestFactor && highestFactor > 1; i++) {
    while (highestFactor % i === 0) {
      arrayOfAllFactors.push(i)
      highestFactor = highestFactor / i

      console.log([i, highestFactor])
    }
  }

  arrayOfAllFactors.sort( (a, b) => a - b )
  return arrayOfAllFactors.pop()
}

//console.log(allFactors(600851475143))

console.log(allFactors(600851475143))
