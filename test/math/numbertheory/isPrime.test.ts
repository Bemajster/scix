import { isPrime } from "./../../../src"

describe("Is prime function", () => {
  test("Is prime function - 1", () => {
    expect(isPrime(1)).toBe(false)
  })

  test("Is prime function - 2", () => {
    expect(isPrime(7)).toBe(true)
  })

  test("Is prime function - 3", () => {
    expect(isPrime(51)).toBe(false)
  })

  test("Is prime function - 4", () => {
    expect(isPrime(127)).toBe(true)
  })

  test("Is prime function - 5", () => {
    expect(isPrime(-435341)).toBe(false)
  })
})
