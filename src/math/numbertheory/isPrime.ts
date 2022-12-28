export function isPrime(n: number): boolean {
  if (n === 1 || n < 0) {
    return false
  }

  for (let i = 2; i < Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}
