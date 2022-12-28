export function isEven(n: number): boolean {
  return Number(String(n).slice(-1)) % 2 === 0
}
