const subtract = (x, y, z) => { return x - y - z}
const multiply = (x, y, z) => { return x * y * z}
const subtracter = new Vue({
  el: '#subtracter',
  data: {
    first: 6,
    second: 2,
    third: 4
  },
  computed: {
    difference: function () {
      const i = parseInt(this.first)
      const j = parseInt(this.second)
      const k = parseInt(this.third)
      return `The difference is ${subtract(i, j, k)}.`
    }
  },
  computed1: {
    multiplication: function () {
      const t = parseInt(this.first)
      const s = parseInt(this.second)
      const u = parseInt(this.third)
      return `The multiplication is ${multiply(t, s, u)}.`
    }
  }
})