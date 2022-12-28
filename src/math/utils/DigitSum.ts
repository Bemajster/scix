export function DigitSum(n: number): number {
  if (Math.abs(n).toString().length === 1) {
    return n
  } else {
    let sum = 0
    for (let i = 0; i < n.toString().length; i++) {
      sum += Number(String(Math.abs(n)).charAt(i))
    }
    return sum
  }
}
