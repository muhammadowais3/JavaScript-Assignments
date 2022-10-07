
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
let arr = [23 , "owais", "23", 43]


console.log((arr[0] || arr[3] == 53) ? "Your prediction is correct" : "duhh! better luck next time");
console.log((arr[1] && arr[2] == 90) ? "Your prediction is correct" : "duhh! better luck next time");
console.log((arr[2] === 23 ) ? "Your prediction is correct" : "duhh! better luck next time");
console.log((arr[3] == "43") ? "Your prediction is correct" : "duhh! better luck next time");
console.log((arr.includes("owais")) ? "Your prediction is correct" : "duhh! better luck next time");
console.log((arr[2] == 77) ? "Your prediction is correct" : "duhh! better luck next time");
console.log((!arr.includes("usama")) ? "Your prediction is correct the item is not in array" : "duhh! better luck next time");
console.log((arr[2] < 34) ? "Your prediction is correct" : "duhh! better luck next time");

console.log((arr[1] > 23) ? "Your prediction is correct" : "duhh! better luck next time");
console.log((arr[0] == 34 - 11) ? "Your prediction is correct" : "duhh! better luck next time");
