import { Matrix, Vector, ValidateSize } from "./../../../../src"

describe("Matrix area", () => {
  test("Matrix area - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])

    expect(m1.area).toBe(4)
  })

  test("Matrix area - 2", () => {
    const m1 = new Matrix([
      [1, 2],
      [5, 6],
      [3, 4],
    ])

    expect(m1.area).toBe(6)
  })

  test("Matrix area - 3", () => {
    const m1 = new Matrix([
      [1, 2, 7, 8],
      [3, 4, 9, 2],
    ])

    expect(m1.area).toBe(8)
  })

  test("Matrix area - 4", () => {
    const m1 = new Matrix([
      [1, 2, 4],
      [3, 4],
    ])

    expect(m1.area).toBe(5)
  })

  test("Matrix area - 5", () => {
    const m1 = new Matrix([[1, 2], [3, 4], [2, 4], [1]])

    expect(m1.area).toBe(7)
  })
})

describe("Is square", () => {
  test("Is square - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])

    expect(m1.isSquare).toBe(true)
  })

  test("Is square - 2", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
      [5, 6],
    ])

    expect(m1.isSquare).toBe(false)
  })

  test("Is square - 3", () => {
    const m1 = new Matrix([[1, 2], [3]])

    expect(m1.isSquare).toBe(false)
  })

  test("Is square - 4", () => {
    const m1 = new Matrix([
      [1, 2, 5],
      [3, 4, 6],
      [4, 4, 7],
    ])

    expect(m1.isSquare).toBe(true)
  })

  test("Is square - 5", () => {
    const m1 = new Matrix([])

    expect(m1.isSquare).toBe(true)
  })
})

describe("Get value", () => {
  test("Get value - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])

    expect(m1.getValue(0, 1)).toBe(3)
  })

  test("Get value - 2", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
      [5, 6],
    ])

    expect(m1.getValue(1, 2)).toBe(6)
  })

  test("Get value - 3", () => {
    const m1 = new Matrix([
      [1, 2235],
      [3, 4],
    ])

    expect(m1.getValue(1, 0)).toBe(2235)
  })

  test("Get value - 4", () => {
    const m1 = new Matrix([
      [1, 2, 5],
      [3, 4, 8],
    ])

    expect(m1.getValue(2, 0)).toBe(5)
  })

  test("Get value - 5", () => {
    const m1 = new Matrix([[], []])

    expect(m1.getValue(0, 1)).toBe(undefined)
  })
})

describe("Get row", () => {
  test("Get row - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [2, 3],
    ])
    const v1 = new Vector([1, 2])
    const v2 = new Vector([2, 3])

    expect(m1.getRow(0)).toEqual(v1)
    expect(m1.getRow(1)).toEqual(v2)
  })

  test("Get row - 2", () => {
    const m1 = new Matrix([
      [1, 2],
      [2, 3],
      [3, 5],
    ])
    const v1 = new Vector([1, 2])
    const v2 = new Vector([2, 3])
    const v3 = new Vector([3, 5])

    expect(m1.getRow(0)).toEqual(v1)
    expect(m1.getRow(1)).toEqual(v2)
    expect(m1.getRow(2)).toEqual(v3)
  })

  test("Get row - 3", () => {
    const m1 = new Matrix([
      [1, 2, 3],
      [2, 3, 4],
    ])
    const v1 = new Vector([1, 2, 3])
    const v2 = new Vector([2, 3, 4])

    expect(m1.getRow(0)).toEqual(v1)
    expect(m1.getRow(1)).toEqual(v2)
  })

  test("Get row - 4", () => {
    const m1 = new Matrix([[], []])
    const v1 = new Vector([])
    const v2 = new Vector([])

    expect(m1.getRow(0)).toEqual(v1)
    expect(m1.getRow(1)).toEqual(v2)
  })

  test("Get row - 5", () => {
    const m1 = new Matrix([
      [1, 2, 5, 6, 7],
      [2, 3],
    ])
    const v1 = new Vector([1, 2, 5, 6, 7])
    const v2 = new Vector([2, 3])

    expect(m1.getRow(0)).toEqual(v1)
    expect(m1.getRow(1)).toEqual(v2)
  })
})

describe("Get column", () => {
  test("Get column - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])
    const v1 = new Vector([1, 3])
    const v2 = new Vector([2, 4])

    expect(m1.getCol(0)).toEqual(v1)
    expect(m1.getCol(1)).toEqual(v2)
  })

  test("Get column - 2", () => {
    const m1 = new Matrix([
      [1, 52],
      [32, 4],
    ])
    const v1 = new Vector([1, 32])
    const v2 = new Vector([52, 4])

    expect(m1.getCol(0)).toEqual(v1)
    expect(m1.getCol(1)).toEqual(v2)
  })

  test("Get column - 3", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
      [3, 5],
    ])
    const v1 = new Vector([1, 3, 3])
    const v2 = new Vector([2, 4, 5])

    expect(m1.getCol(0)).toEqual(v1)
    expect(m1.getCol(1)).toEqual(v2)
  })

  test("Get column - 4", () => {
    const m1 = new Matrix([
      [1, 2, 5],
      [3, 4, 7],
    ])
    const v1 = new Vector([1, 3])
    const v2 = new Vector([2, 4])
    const v3 = new Vector([5, 7])

    expect(m1.getCol(0)).toEqual(v1)
    expect(m1.getCol(1)).toEqual(v2)
    expect(m1.getCol(2)).toEqual(v3)
  })

  test("Get column - 5", () => {
    const m1 = new Matrix([[], []])
    const v1 = new Vector([])
    const v2 = new Vector([])

    expect(m1.getCol(0)).toEqual(v1)
    expect(m1.getCol(1)).toEqual(v2)
  })
})

describe("Validate size", () => {
  test("Validate size - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])
    const m2 = new Matrix([
      [2, 5],
      [6, 7],
    ])

    expect(ValidateSize(m1, m2)).toBe(true)
  })

  test("Validate size - 2", () => {
    const m1 = new Matrix([[1, 2], [3]])
    const m2 = new Matrix([
      [2, 5],
      [6, 7],
    ])

    expect(ValidateSize(m1, m2)).toBe(false)
  })

  test("Validate size - 3", () => {
    const m1 = new Matrix([
      [1, 2, 5],
      [3, 4, 6],
    ])
    const m2 = new Matrix([
      [2, 5, 7],
      [6, 7, 9],
    ])

    expect(ValidateSize(m1, m2)).toBe(true)
  })

  test("Validate size - 4", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
      [5, 6],
    ])
    const m2 = new Matrix([
      [2, 5],
      [6, 7],
      [7, 9],
    ])

    expect(ValidateSize(m1, m2)).toBe(true)
  })

  test("Validate size - 5", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
      [10, 134],
    ])
    const m2 = new Matrix([
      [2, 5],
      [6, 7],
    ])

    expect(ValidateSize(m1, m2)).toBe(false)
  })
})

describe("Matrix addition", () => {
  test("Matrix addition - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])
    const m2 = new Matrix([
      [5, 6],
      [7, 8],
    ])

    const m3 = new Matrix([
      [6, 8],
      [10, 12],
    ])

    expect(m1.add(m2)).toEqual(m3)
  })
})

describe("Matrix multiplication", () => {
  test("Matrix multiplication - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])
    const m2 = new Matrix([
      [5, 6],
      [7, 8],
    ])

    const m3 = new Matrix([
      [23, 34],
      [31, 46],
    ])

    expect(m1.mulBy(m2)).toEqual(m3)
  })

  test("Matrix multiplication - 2", () => {
    const m1 = new Matrix([
      [5, 623],
      [2, -5],
    ])
    const m2 = new Matrix([
      [1, 225],
      [31, 4],
    ])

    const m3 = new Matrix([
      [455, -502],
      [163, 19293],
    ])

    expect(m1.mulBy(m2)).toEqual(m3)
  })

  test("Matrix multiplication - 3", () => {
    const m1 = new Matrix([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ])
    const m2 = new Matrix([
      [32, 36, 63],
      [235, 63, 5],
      [54, 634, 35],
    ])

    const m3 = new Matrix([
      [293, 686, 1079],
      [376, 1285, 2194],
      [1427, 3596, 5765],
    ])

    expect(m1.mulBy(m2)).toEqual(m3)
  })

  test("Matrix multiplication - 4", () => {
    const m1 = new Matrix([[6]])
    const m2 = new Matrix([[2]])

    const m3 = new Matrix([[12]])

    expect(m1.mulBy(m2)).toEqual(m3)
  })

  test("Matrix multiplication - 5", () => {
    const m1 = new Matrix([
      [1, 2, 5],
      [3, 4, 3],
    ])
    const m2 = new Matrix([
      [5, 6],
      [7, 8],
      [8, 9],
    ])

    const m3 = new Matrix([
      [23, 34, 43],
      [31, 46, 59],
      [35, 52, 67],
    ])

    expect(m1.mulBy(m2)).toEqual(m3)
  })
})

describe("Matrix determinant", () => {
  test("Matrix determinant - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])

    expect(m1.det).toBe(-2)
  })

  test("Matrix determinant - 2", () => {
    const m1 = new Matrix([[1]])

    expect(m1.det).toBe(1)
  })

  test("Matrix determinant - 3", () => {
    const m1 = new Matrix([
      [2, 5, 6],
      [3, 4, 9],
      [4, 7, 8],
    ])

    expect(m1.det).toBe(28)
  })

  test("Matrix determinant - 4", () => {
    const m1 = new Matrix([
      [-1, 5, 0],
      [5, 0, -4],
      [4, 6, 9],
    ])

    expect(m1.det).toBe(-329)
  })

  test("Matrix determinant - 5", () => {
    const m1 = new Matrix([
      [52, -25],
      [25, 32],
    ])

    expect(m1.det).toBe(2289)
  })
})

describe("Set column", () => {
  test("Set column - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])

    const v1 = new Vector([5, 6])

    const m2 = new Matrix([
      [5, 2],
      [6, 4],
    ])

    expect(m1.setCol(v1, 0)).toEqual(m2)
  })

  test("Set column - 2", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])

    const v1 = new Vector([5, 6])

    const m2 = new Matrix([
      [1, 5],
      [3, 6],
    ])

    expect(m1.setCol(v1, 1)).toEqual(m2)
  })

  test("Set column - 3", () => {
    const m1 = new Matrix([
      [2, 1, 3],
      [5, 1, 9],
      [6, 8, 4],
    ])

    const v1 = new Vector([5, 6, 7])

    const m2 = new Matrix([
      [2, 5, 3],
      [5, 6, 9],
      [6, 7, 4],
    ])

    expect(m1.setCol(v1, 1)).toEqual(m2)
  })

  test("Set column - 4", () => {
    const m1 = new Matrix([
      [15, 55],
      [352, 225],
    ])

    const v1 = new Vector([5, 6])

    const m2 = new Matrix([
      [5, 55],
      [6, 225],
    ])

    expect(m1.setCol(v1, 0)).toEqual(m2)
  })

  test("Set column - 5", () => {
    const m1 = new Matrix([[1], [3]])

    const v1 = new Vector([5, 6])

    const m2 = new Matrix([[5], [6]])

    expect(m1.setCol(v1, 0)).toEqual(m2)
  })
})

describe("Set row", () => {
  test("Set row - 1", () => {
    const m1 = new Matrix([
      [15, 55],
      [352, 225],
    ])

    const v1 = new Vector([5, 6])

    const m2 = new Matrix([
      [5, 6],
      [352, 225],
    ])

    expect(m1.setRow(v1, 0)).toEqual(m2)
  })

  test("Set row - 2", () => {
    const m1 = new Matrix([[15]])

    const v1 = new Vector([5])

    const m2 = new Matrix([[5]])

    expect(m1.setRow(v1, 0)).toEqual(m2)
  })

  test("Set row - 3", () => {
    const m1 = new Matrix([
      [15, 55, 2452],
      [352, 225, 524542],
      [34523, 345, -535],
    ])

    const v1 = new Vector([-71, 66, 856])

    const m2 = new Matrix([
      [15, 55, 2452],
      [-71, 66, 856],
      [34523, 345, -535],
    ])

    expect(m1.setRow(v1, 1)).toEqual(m2)
  })

  test("Set row - 4", () => {
    const m1 = new Matrix([
      [1653355, 54],
      [352, 225],
      [235, 346],
    ])

    const v1 = new Vector([3465, -3566])

    const m2 = new Matrix([
      [1653355, 54],
      [352, 225],
      [3465, -3566],
    ])

    expect(m1.setRow(v1, 2)).toEqual(m2)
  })

  test("Set row - 5", () => {
    const m1 = new Matrix([
      [15, 55, 346],
      [352, 225, 3653],
    ])

    const v1 = new Vector([5, 6])

    const m2 = new Matrix([
      [5, 6],
      [352, 225, 3653],
    ])

    expect(m1.setRow(v1, 0)).toEqual(m2)
  })
})

describe("Get submatrix", () => {
  test("Get submatrix - 1", () => {
    const m1 = new Matrix([
      [1, 2, 2],
      [3, 4, 3],
      [5, 6, 7],
    ])

    const m2 = new Matrix([
      [4, 3],
      [6, 7],
    ])

    expect(m1.getSubmatrix(0, 0)).toEqual(m2)
  })

  test("Get submatrix - 2", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])

    const m2 = new Matrix([[4]])

    expect(m1.getSubmatrix(0, 0)).toEqual(m2)
  })

  test("Get submatrix - 3", () => {
    const m1 = new Matrix([
      [1, 2, 2],
      [3, 4, 3],
      [5, 6, 7],
    ])

    const m2 = new Matrix([
      [3, 3],
      [5, 7],
    ])

    expect(m1.getSubmatrix(1, 0)).toEqual(m2)
  })

  test("Get submatrix - 4", () => {
    const m1 = new Matrix([
      [1, 2, 2],
      [3, 4, 3],
      [5, 6, 7],
    ])

    const m2 = new Matrix([
      [1, 2],
      [5, 7],
    ])

    expect(m1.getSubmatrix(1, 1)).toEqual(m2)
  })

  test("Get submatrix - 5", () => {
    const m1 = new Matrix([
      [1, 2, 2, 5],
      [3, 4, 3, 32],
      [5, 6, 7, 52],
      [52, 25, 2, 52],
    ])

    const m2 = new Matrix([
      [4, 3, 32],
      [6, 7, 52],
      [25, 2, 52],
    ])

    expect(m1.getSubmatrix(0, 0)).toEqual(m2)
  })
})

describe("Matrix permanent", () => {
  test("Matrix permanent - 1", () => {
    const m = new Matrix([
      [1, 2, 2],
      [3, 4, 3],
      [5, 6, 7],
    ])

    expect(m.perm).toBe(194)
  })

  test("Matrix permanent - 2", () => {
    const m = new Matrix([
      [11, 2],
      [-3, 7],
    ])

    expect(m.perm).toBe(71)
  })

  test("Matrix permanent - 3", () => {
    const m = new Matrix([[-518]])

    expect(m.perm).toBe(-518)
  })

  test("Matrix permanent - 4", () => {
    const m = new Matrix([
      [1, 2, 75, 8],
      [5, -3, 3, -53],
      [5, 6, 7, 89],
      [-1, 5, 8, -7],
    ])

    expect(m.perm).toBe(103693)
  })

  test("Matrix permanent - 5", () => {
    const m = new Matrix([
      [1, 2, 2],
      [3, 4, 3],
      [5, 6, 7],
    ])

    expect(m.perm).toBe(194)
  })
})

describe("Matrix transposition", () => {
  test("Matrix transposition - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])

    const m2 = new Matrix([
      [1, 3],
      [2, 4],
    ])

    expect(m1.tran).toEqual(m2)
  })

  test("Matrix transposition - 2", () => {
    const m1 = new Matrix([
      [5, -6, 8],
      [9, 0, 1],
    ])

    const m2 = new Matrix([
      [5, 9],
      [-6, 0],
      [8, 1],
    ])

    expect(m1.tran).toEqual(m2)
  })

  test("Matrix transposition - 3", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
      [-6, 0],
    ])

    const m2 = new Matrix([
      [1, 3, -6],
      [2, 4, 0],
    ])

    expect(m1.tran).toEqual(m2)
  })

  test("Matrix transposition - 4", () => {
    const m1 = new Matrix([
      [1, 0, 5],
      [6, 8, 1],
      [8, 5, 0],
    ])

    const m2 = new Matrix([
      [1, 6, 8],
      [0, 8, 5],
      [5, 1, 0],
    ])

    expect(m1.tran).toEqual(m2)
  })

  test("Matrix transposition - 5", () => {
    const m1 = new Matrix([[1]])

    const m2 = new Matrix([[1]])

    expect(m1.tran).toEqual(m2)
  })
})

describe("2x2 Matrix eigenvalues", () => {
  test("2x2 Matrix eigenvalues - 1", () => {
    const m = new Matrix([
      [2, 1],
      [3, -1],
    ])

    const eigs = [(Math.sqrt(21) + 1) / 2, (1 - Math.sqrt(21)) / 2]

    expect(m.eigvals).toEqual(eigs)
  })

  test("2x2 Matrix eigenvalues - 2", () => {
    const m = new Matrix([
      [2, 0],
      [0, 2],
    ])

    const eigs = [2]

    expect(m.eigvals).toEqual(eigs)
  })

  test("2x2 Matrix eigenvalues - 3", () => {
    const m = new Matrix([
      [1, 4],
      [3, 2],
    ])

    const eigs = [5, -2]

    expect(m.eigvals).toEqual(eigs)
  })

  test("2x2 Matrix eigenvalues - 4", () => {
    const m = new Matrix([
      [0, 1],
      [-2, -3],
    ])

    const eigs = [-1, -2]

    expect(m.eigvals).toEqual(eigs)
  })

  test("2x2 Matrix eigenvalues - 5", () => {
    const m = new Matrix([
      [3, 1],
      [0, 2],
    ])

    const eigs = [3, 2]

    expect(m.eigvals).toEqual(eigs)
  })
})

describe("Matrix power", () => {
  test("Matrix power - 1", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
    ])

    const m2 = new Matrix([
      [7, 10],
      [15, 22],
    ])

    expect(m1.pow(2)).toEqual(m2)
  })

  test("Matrix power - 2", () => {
    const m1 = new Matrix([
      [1, -2, 0],
      [65, -9, 6],
      [7, 3, 1],
    ])

    const m2 = new Matrix([
      [827, 78, 84],
      [-2829, 1091, -234],
      [-2128, -19, -209],
    ])

    expect(m1.pow(3)).toEqual(m2)
  })

  test("Matrix power - 3", () => {
    const m1 = new Matrix([
      [-1, 2],
      [8, 22],
    ])

    const m2 = new Matrix([
      [-1, 2],
      [8, 22],
    ])

    expect(m1.pow(1)).toEqual(m2)
  })

  test("Matrix power - 4", () => {
    const m1 = new Matrix([
      [1, 2, 0, -5, 3],
      [9, 8, 7, -6, 0],
      [11, 50, -21, 0, 7],
      [-9, 7, 10, 5, 9],
      [1, 6, -40, 7, 8],
    ])

    const m2 = new Matrix([
      [-1469, -7913, 3793, -572, -1224],
      [3190, -4735, 3791, -3861, -1352],
      [3280, 18846, -15573, 395, 1070],
      [-69, -16681, 8790, -2827, -814],
      [-10765, 15346, -19743, 12518, 2354],
    ])

    expect(m1.pow(3)).toEqual(m2)
  })

  test("Matrix power - 5", () => {
    const m1 = new Matrix([[1]])

    const m2 = new Matrix([[1]])

    expect(m1.pow(20)).toEqual(m2)
  })
})
