import { BinomialDist, Trunc } from "./../../../src"

describe("Binomial distribution", () => {
  test("Binomial distribution - 1", () => {
    expect(BinomialDist(10, 7, 0.5)).toBe(15 / 128)
  })

  test("Binomial distribution - 2", () => {
    expect(BinomialDist(40, 21, 0.5)).toBe(8205150525 / 68719476736)
  })

  test("Binomial distribution - 3", () => {
    expect(Trunc(BinomialDist(4, 3, 0.2), 15)).toBe(16 / 625)
  })

  test("Binomial distribution - 4", () => {
    expect(Trunc(BinomialDist(10, 7, 0.4), 15)).toBe(82944 / 1953125)
  })

  test("Binomial distribution - 5", () => {
    expect(BinomialDist(10, 5, 0.5)).toBe(63 / 256)
  })
})
