export function Derivative(
  f: (x: number) => number,
  a: number,
  dx: number
): number {
  return (f(a + dx) - f(a)) / dx
}
