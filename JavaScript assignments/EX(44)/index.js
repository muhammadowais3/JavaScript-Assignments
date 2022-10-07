// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered.
//  Call the function three times, using a different number of arguments each time.

let wants_sandwich = ['usama', 'ahmer', 'owais', 'waqas']

function like_sandwich(){
      
      for (let index = 0; index < arguments.length; index++) {
            
            console.log(`${arguments[index]} wants sandwich ${typeof arguments}` )  
            
      }
}

like_sandwich('usama', 'ahmer', 'owais', 'waqas')