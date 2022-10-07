// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the 
// Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
let mag_names = ['Haryy potter','hermoine' , 'ron']
function show_magicians(names){
      names.forEach(element => {
            console.log(element)
      });
}

function make_great(names){
      var great_magician = [];
      for (let index = 0; index < names.length; index++) {
            
            great_magician.push('great '+ names[index])
            
      }
      return great_magician;
}

mag_names = make_great(mag_names)
show_magicians(mag_names)