import { isPerfect } from "./../../../src"

describe("Is perfect function", () => {
  test("Is perfect function - 1", () => {
    expect(isPerfect(1)).toBe(false)
  })

  test("Is perfect function - 2", () => {
    expect(isPerfect(7)).toBe(false)
  })

  test("Is perfect function - 3", () => {
    expect(isPerfect(6)).toBe(true)
  })

  test("Is perfect function - 4", () => {
    expect(isPerfect(28)).toBe(true)
  })

  test("Is perfect function - 5", () => {
    expect(isPerfect(-6)).toBe(false)
  })
})
