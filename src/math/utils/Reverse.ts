export const ReverseNum = (num) =>
  parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
