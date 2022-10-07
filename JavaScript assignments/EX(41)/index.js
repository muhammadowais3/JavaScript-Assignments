// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.

function show_magicians(names){
      names.forEach(element => {
            console.log(element)
      });
}
let mag_names = ['Haryy potter','hermoine' , 'ron']
show_magicians(mag_names)