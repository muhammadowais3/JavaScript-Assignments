// Animals: Think of at least three different animals that have a common characteristic.
//  Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
//  • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//  • Add a line at the end of your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!

let animals = ['cat', 'lion' , 'tiger']
for (let i=0;i<animals.length ; i++){
      console.log(animals[i])
}

for (let i=0;i<animals.length ; i++){
      console.log(`${animals[i]} will make a great pet`)
}

console.log(`All these animals are carnivorus, though ${animals[0]} can make a good pet but you should not pet ${animals[1]} or ${animals[2]}`)

