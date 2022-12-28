export function isPerfect(n: number): boolean {
  let sod = 0

  for (let i = n - 1; i > 0; i--) {
    if (n % i === 0) {
      sod += i
    }
  }

  return sod === n
}
