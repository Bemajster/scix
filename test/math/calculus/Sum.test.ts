import { Sum } from "./../../../src"

describe("Sum function", () => {
  test("Sum function - 1", () => {
    expect(
      Sum(0, 5, (n) => {
        return n
      })
    ).toBe(15)
  })

  test("Sum function - 2", () => {
    expect(
      Sum(0, 3, (n) => {
        return Math.pow(n, 3)
      })
    ).toBe(36)
  })
})
