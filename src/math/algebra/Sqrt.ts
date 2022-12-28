import { Complex, Sgn, Round } from "./../../../src"

export function Sqrt(a: number | Complex) {
  if (a instanceof Complex) {
    return new Complex([
      Round(
        Math.sqrt(
          ((a as Complex).re +
            Math.sqrt(
              Math.pow((a as Complex).re, 2) + Math.pow((a as Complex).im, 2)
            )) /
            2
        ),
        15
      ),
      Round(
        Sgn((a as Complex).im) *
          Math.sqrt(
            (Math.sqrt(
              Math.pow((a as Complex).re, 2) + Math.pow((a as Complex).im, 2)
            ) -
              (a as Complex).re) /
              2
          ),
        15
      ),
    ])
  } else {
    if ((a as number) < 0) {
      return new Complex([0, Round(Math.sqrt(-(a as number)), 15)])
    } else {
      return Round(Math.sqrt(a as number), 15)
    }
  }
}
