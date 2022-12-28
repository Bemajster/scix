import { Sgn } from "./../../../src"

describe("Sgn function", () => {
  test("Sgn function - 1", () => {
    const n = -235325
    expect(Sgn(n)).toBe(-1)
  })

  test("Sgn function - 2", () => {
    const n = 0.00000001
    expect(Sgn(n)).toBe(1)
  })

  test("Sgn function - 3", () => {
    const n = -0.000000001
    expect(Sgn(n)).toBe(-1)
  })

  test("Sgn function - 4", () => {
    const n = 0
    expect(Sgn(n)).toBe(0)
  })

  test("Sgn function - 5", () => {
    const n = -235447532563.346
    expect(Sgn(n)).toBe(-1)
  })
})
