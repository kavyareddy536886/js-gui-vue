const subtract = (x, y, z) => { return x - y - z}

const subtracter = new Vue({
  el: '#subtracter',
  data: {
    first: 6,
    second: 2,
    third: 7
  },
  computed: {
    difference: function () {
      const i = parseInt(this.first)
      const j = parseInt(this.second)
      const z = parseInt(this.third)
      return `The difference is ${subtract(i, j, k)}.`
    }
  }
})