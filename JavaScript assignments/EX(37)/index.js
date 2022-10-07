// Large Shirts: Modify the make_shirt() function so that shirts are large by default 
// with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.

function Make_shirt(size = 'large', text = 'I love JavaScript'){
      console.log(`${size} is the size and ${text} is the message to be printed`)
}

Make_shirt()
Make_shirt('small', 'I love Python')
Make_shirt('Medium', 'Programming is importanter than english')