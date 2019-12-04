const MIN = 273025
const MAX = 767253

const hasMatchingAdjacentDigits = str =>
  str
    .split("")
    .some((n, i, arr) => arr[i - 1] === n && arr[i - 2] !== n && arr[i + 1] !== n)

const digitsAscend = str =>
  str.split("").sort().join('') === str

let matches = 0

for (let i = MIN; i <= MAX; i++) {
  const str = String(i)
  if (hasMatchingAdjacentDigits(str) && digitsAscend(str)) {
    matches++
  }
}

console.log(matches)