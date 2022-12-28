import { Derivative } from "../../../src"

describe("Derivative function", () => {
  test("Derivative function - 1", () => {
    expect(
      Math.round(
        Derivative(
          (x) => {
            return Math.pow(x, 2)
          },
          2,
          0.000000001
        )
      )
    ).toBe(4)
  })

  test("Derivative function - 2", () => {
    expect(
      Derivative(
        (x) => {
          return 2 * x
        },
        5,
        0.5
      )
    ).toBe(2)
  })

  test("Derivative function - 3", () => {
    expect(
      Derivative(
        () => {
          return 2
        },
        5,
        0.5
      )
    ).toBe(0)
  })
})
