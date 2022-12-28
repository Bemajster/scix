export function Sum(a: number, b: number, f: (a: number) => number): number {
  let s = 0
  for (let i = a; i <= b; i++) {
    s += f(i)
  }
  return s
}
