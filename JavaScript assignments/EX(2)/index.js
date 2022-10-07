
var Q2_personName = "Eric"
console.log(`Lower Case of the name is ${Q2_personName.toLowerCase()}
Upper Case of the name is ${Q2_personName.toUpperCase()}
Title Case of the name is ${titleCase(Q2_personName)}`)

function titleCase(string) {
      var sentence = string.toLowerCase().split(" ");
      for(var i = 0; i< sentence.length; i++){
         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
   sentence = sentence.join(" ");
   return sentence;
   }