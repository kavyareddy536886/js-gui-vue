
const coder = new Vue({
  el: '#coder',
  data: {
    word: "welcome",
    codeword: "abc",
  },
  computed: {
    encryptedWord: function() {
      let secretMessage = ""
           for(let i=1; i < this.word.length; i+=1){
             // shift translates each char of codeword to the amount to shift
              let shift = (this.codeword.charAt(i % this.codeword.length)).charCodeAt(0) - "a".charCodeAt(0) + 1 // between 1-26, assuming chars
           
             if(shift < 0 || shift > 26){
               console.log("Your codeword must be lowercase letters only")
               return "NaS (Not a String, also a really great rapper ... no, wait, that's Lil Nas X)"
              }
             let newChCode = this.word.charAt(i).charCodeAt(0) + shift
             if(newChCode >= "z".charCodeAt(0)){
               newChCode -= 23
             }
             secretMessage += String.fromCharCode(newChCode)
           }
           return secretMessage
      }
     }
  })