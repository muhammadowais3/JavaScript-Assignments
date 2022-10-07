// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
// that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
//  • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, 
//  one for each person in your list.


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