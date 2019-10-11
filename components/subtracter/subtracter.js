
const multiply = (x, y) => { return x * y }
const subtracter = new Vue({
  el: '#subtracter',
  data: {
    first: 6,
    second: 2
   
  },
  computed: {
   
    multiplication: function () {
      const i = parseInt(this.first)
      const j = parseInt(this.second)
      return `The multiplication is ${multiply(i, j)}.`
    }
  }
  
})