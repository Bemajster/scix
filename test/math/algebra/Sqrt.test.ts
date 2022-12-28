import { Sqrt, Complex, Round } from "./../../../src"

describe("Square root function", () => {
  test("Square root function - 1", () => {
    expect(Sqrt(5)).toBe(Math.sqrt(5))
  })

  test("Square root function - 2", () => {
    const c1 = new Complex([0, Math.sqrt(2)])
    expect(Sqrt(-2)).toEqual(c1)
  })

  test("Square root function - 3", () => {
    const c1 = new Complex([0, 2])
    const c2 = new Complex([1, 1])
    expect(Sqrt(c1)).toEqual(c2)
  })

  test("Square root function - 4", () => {
    const c1 = new Complex([0, 1])
    const c2 = new Complex([
      Round(1 / Math.sqrt(2), 15),
      Round(1 / Math.sqrt(2), 15),
    ])
    expect(Sqrt(c1)).toEqual(c2)
  })

  test("Square root function - 5", () => {
    expect(Round(1 / Number(Sqrt(2)), 15)).toBe(Round(Number(Sqrt(2)) / 2, 15))
  })
})
