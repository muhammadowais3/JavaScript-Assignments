// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

var guest_list = ['MArques Brwonlee', "Andrew NG" , "Lex Fridman", "Lawrance Moroney"]
guest_list.forEach((i)=>{
      console.log(`Hi ${i}, I would like to invite you to the dinner`)
})
console.log(`${guest_list[2]} can't make it to the dinner, so`)
delete guest_list[2]

guest_list.push("Steve Jobs")
guest_list.forEach((i)=>{
      console.log(`Hi ${i}, I would like to invite you to the dinner`)
})

insert(guest_list, 0,"Ahmer")
guest_list.push("usama")

insert(guest_list,  Math.floor(guest_list.length/2),"owais")
guest_list.forEach((i)=>{
      console.log(`Hi ${i}, I would like to invite you to the dinner`)
})

function insert(array, index, ...elementsArray) {
      array.splice(index, 0, ...elementsArray);
  }

  console.log(`Number of guests invited are ${guest_list.length}`)