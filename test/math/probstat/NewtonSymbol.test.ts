import { NewtonSymbol } from "./../../../src"

describe("Newton symbol", () => {
  test("Newton symbol - 1", () => {
    expect(NewtonSymbol(3, 2)).toBe(3)
  })

  test("Newton symbol - 2", () => {
    expect(NewtonSymbol(3, 1)).toBe(3)
  })

  test("Newton symbol - 3", () => {
    expect(NewtonSymbol(13, 8)).toBe(1287)
  })

  test("Newton symbol - 4", () => {
    expect(NewtonSymbol(5, 2)).toBe(10)
  })

  test("Newton symbol - 15", () => {
    expect(NewtonSymbol(32, 12)).toBe(225792840)
  })
})
