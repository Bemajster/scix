import { isEven } from "./../../../src"

describe("Is even", () => {
  test("Is even - 1", () => {
    const n = 32424
    expect(isEven(n)).toBe(true)
  })

  test("Is even - 2", () => {
    const n = -32424
    expect(isEven(n)).toBe(true)
  })

  test("Is even - 3", () => {
    const n = 324245
    expect(isEven(n)).toBe(false)
  })

  test("Is even - 4", () => {
    const n = -3
    expect(isEven(n)).toBe(false)
  })

  test("Is even - 5", () => {
    const n = 49257020
    expect(isEven(n)).toBe(true)
  })
})
