// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
//  with a copy of the array of magicians’ names. Because the original array will be unchanged, 
//  return the new array and store it in a separate array. Call show_magicians() with each array to show
//   that you have one array of
//  the original names and one array with the Great added to each magician’s name.

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

great_names = make_great(mag_names)
show_magicians(great_names)
show_magicians(mag_names)