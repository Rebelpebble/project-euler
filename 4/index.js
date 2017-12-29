function solution(start, end) {
  const allPalindromeNumbers = []

  for (let i = start; i <= end; i++) {
    for (let j = end; j >= start; j--) {
      if (checkIfPalindrome(i * j)) {
        allPalindromeNumbers.push([i, j, i * j])
      }
    }
  }


  allPalindromeNumbers.sort( (a, b) => {
    const productA = a[2]
    const productB = b[2]

    return productA - productB
  })

  return allPalindromeNumbers.pop()
}

function checkIfPalindrome(number) {
  const digits = String(number)
  const digitsReversed = digits.split('').reverse().join('')

  return digits === digitsReversed
}

console.log(solution(100, 999))
