const prompt = require('prompt-sync')();

let numInput;

while (true) {
    // Ask the user for a number
    numInput = parseInt(prompt("Hey, there! Please, enter a number: "));

    // Reject invalid characters or negative numbers
    if (isNaN(numInput)) {
        console.log("Please make sure you enter a valid positive number. Try again!");

    } else if (numInput < 0 ){
    console.log("It is not possible to find the factorial for a negative number. Try again!")

    // If the number is valid we break the loop
    } else {
        break 
    }
} 

// If the input number is 0
if (numInput == 0) {
    console.log("The factorial number of 0 is 1.")
}

// If the input number is a valid one
else {
    let result = 1 
    for (i = 1; i <= numInput; i++) { 
        result *= i; 
    } 
    console.log(`Congrats! You've found the factorial of ${numInput}, which is ${result}.`)
}
