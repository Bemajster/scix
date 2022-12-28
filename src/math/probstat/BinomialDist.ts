import { NewtonSymbol } from "./../../../src"

export function BinomialDist(n: number, k: number, p: number): number {
  return NewtonSymbol(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k)
}
