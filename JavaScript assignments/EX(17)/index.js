// Shrinking Guest List: You just found out that your
//  new dinner table won’t arrive in time for the dinner, and you have space for only two guests.



// • Start with your program from Exercise 16. Add a new line that prints a message saying 
// that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them know 
// you’re sorry you can’t invite them to dinner.


// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to 
// make sure you actually have an empty list at the end of your program.

//---------------------------EX16-----------------------------
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


//--------------------------Ex17------------------------------
console.log('You can only invite two guests to the dinner')

while(guest_list.length>2){
      var deleted_guest = guest_list.pop()
      console.log(`Sorry! ${deleted_guest} I cant invite you to the dinner`)
}
