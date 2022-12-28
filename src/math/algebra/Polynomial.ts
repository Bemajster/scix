export class Polynomial {
  coeffs: number[]

  constructor(c: number[]) {
    if (c.length !== 0) {
      this.coeffs = c
    } else {
      this.coeffs = [0]
    }
  }

  get derivative(): Polynomial {
    const co = this.coeffs.splice(1)

    for (let i = 0; i < co.length; i++) {
      co[i] *= i + 1
    }

    return new Polynomial(co)
  }

  get degree(): number {
    return this.coeffs.length - 1
  }

  evaluate(x: number): number {
    let res = 0

    for (let i = 0; i < this.coeffs.length; i++) {
      res += x ** i * this.coeffs[i]
    }

    return res
  }

  add(p: Polynomial): Polynomial {
    const fp = []

    const len =
      this.coeffs.length > p.coeffs.length
        ? this.coeffs.length
        : p.coeffs.length

    for (let i = 0; i < len; i++) {
      fp.push((this.coeffs[i] || 0) + (p.coeffs[i] || 0))
    }

    return new Polynomial(fp)
  }

  sub(p: Polynomial): Polynomial {
    const fp = []

    const len =
      this.coeffs.length > p.coeffs.length
        ? this.coeffs.length
        : p.coeffs.length

    for (let i = 0; i < len; i++) {
      fp.push((this.coeffs[i] || 0) - (p.coeffs[i] || 0))
    }

    return new Polynomial(fp)
  }
}
