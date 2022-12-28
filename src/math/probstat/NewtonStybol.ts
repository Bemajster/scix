import { Factorial, isInteger } from "./../../../src"

export function NewtonSymbol(n: number, k: number) {
  if (isInteger(n) === false || isInteger(k) === false) {
    throw new Error("Cannot take factorial of non-integer")
  } else {
    return Math.round(Factorial(n) / (Factorial(n - k) * Factorial(k)))
  }
}
