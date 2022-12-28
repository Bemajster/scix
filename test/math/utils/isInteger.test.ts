import { isInteger } from "./../../../src"

describe("Is integer function", () => {
  test("Is integer function - 1", () => {
    expect(isInteger(1)).toBe(true)
  })

  test("Is integer function - 2", () => {
    expect(isInteger(1.52254)).toBe(false)
  })

  test("Is integer function - 3", () => {
    expect(isInteger(0.72357)).toBe(false)
  })

  test("Is integer function - 4", () => {
    expect(isInteger(-354531)).toBe(true)
  })

  test("Is integer function - 5", () => {
    expect(isInteger(0)).toBe(true)
  })
})
