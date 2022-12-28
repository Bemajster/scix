import { ReverseNum } from "./../../../src"

describe("Reverse number", () => {
  test("Reverse number - 1", () => {
    const n1 = 13
    const n2 = 31

    expect(ReverseNum(n1)).toBe(n2)
  })

  test("Reverse number - 2", () => {
    const n1 = -52542
    const n2 = -24525

    expect(ReverseNum(n1)).toBe(n2)
  })

  test("Reverse number - 3", () => {
    const n1 = 532
    const n2 = 235

    expect(ReverseNum(n1)).toBe(n2)
  })

  test("Reverse number - 4", () => {
    const n1 = 2413234
    const n2 = 4323142

    expect(ReverseNum(n1)).toBe(n2)
  })

  test("Reverse number - 5", () => {
    const n1 = 523253
    const n2 = 352325

    expect(ReverseNum(n1)).toBe(n2)
  })
})
