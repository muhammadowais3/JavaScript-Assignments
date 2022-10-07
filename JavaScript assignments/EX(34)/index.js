// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
// and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing 
// just the name of the pizza. For each pizza you should have one line of output containing a simple statement 
// like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
// The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
//  such as I really love pizza!


let pizza = ['broadway' , 'pizzamax' , 'california']

for(let i = 0; i< pizza.length ; i++){
      console.log(pizza[i])
}
for(let i = 0; i< pizza.length ; i++){
      console.log(`${pizza[i]} is the name used in a sentence`)
}
console.log(`I dont know about the names but I prefer ${pizza[0]} over ${pizza[1]} but I never get to try ${pizza[2]} 
I dont like pizza very much its just okay  `)


