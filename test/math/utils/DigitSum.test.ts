import { DigitSum } from "../../../src"

describe("Digit sum", () => {
  test("Digit sum - 1", () => {
    const n = 134135
    expect(DigitSum(n)).toBe(17)
  })

  test("Digit sum - 2", () => {
    const n = 5
    expect(DigitSum(n)).toBe(5)
  })

  test("Digit sum - 3", () => {
    const n = 1632534135426
    expect(DigitSum(n)).toBe(45)
  })

  test("Digit sum - 4", () => {
    const n = -134135
    expect(DigitSum(n)).toBe(17)
  })

  test("Digit sum - 5", () => {
    const n = 132454135
    expect(DigitSum(n)).toBe(28)
  })
})
