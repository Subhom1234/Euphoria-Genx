// check odd even
let a=100;
if(a%2==0){
    console.log(a + " is EVEN");
} else{
    console.log(a + " is ODD");
}


// check positive negative or zero
if(a>0){
    console.log(a + " is Positive");
} else if(a==0){
    console.log(a + " is Zero");
} else{
    console.log(a + " is Negative");
}



// find greatest among three numbers
let a1 = 1;
let a2 = 4;
let a3 = 3;
if(a1 > a2 && a1 > a3){
    console.log(a1 + " is Grater");
} else if(a2 > a1 && a2 > a3){
    console.log(a2 + " is Grater");
} else if(a3 > a1 && a3 > a2){
    console.log(a3 + " is Grater");
} 



// check voting eligibility

let age = 19;
if(age >= 18){
    console.log("Your age is " + age + " so you are eligible to vote");
} else{
    console.log("Your age is " + age + " so you are not eligible to vote");
}






// Driving eligibility and fine calculation


let lic = true; 
let hel = false;  
let ins = false;   
let fine = true;  
let fineAmount = 0;

if (lic && hel && ins) {
    console.log("You are allowed to drive ");
} else {
    if (!lic) {
        console.log("Driving without license ");
        fineAmount += 500;
    }
    if (!hel) {
        console.log("Helmet is required ");
        fineAmount += 500;
    }
    if (!ins) {
        console.log("No insurance found ");
        fineAmount += 500;
    }
}

    
if (fine && fineAmount > 0) {
    console.log("Total Fine: ₹" + fineAmount);
} else if (fineAmount === 0) {
    console.log("No fine to pay ");
}





// check leap year
let year = 2025;
if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
    console.log(year + " is a Leap Year");
} else{
    console.log(year + " is not a Leap Year");
}






















// assign grade based on marks

let num = 100;
if(num < 40){
    console.log("Fail");
} else if(num >= 40 && num < 60){
    console.log("C");
} else if(num >= 60 && num < 75){
    console.log("B");
} else if(num >= 75){
    console.log("A");
} else{
    console.log("Invalid input");
}




















// Simple Calculator


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter operator (+, -, *, /): ", (operator) => {
    rl.question("Enter second number: ", (num2) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      let result;

      if (operator === "+") {
        result = num1 + num2;
      } else if (operator === "-") {
        result = num1 - num2;
      } else if (operator === "*") {
        result = num1 * num2;
      } else if (operator === "/") {
        result = num2 !== 0 ? num1 / num2 : "Error! Division by zero.";
      } else {
        result = "Invalid operator!";
      }

      console.log("Result:", result);
      rl.close();
    });
  });
});


















// check password strength




/*
let password = "hsdbj123";

if (password.length < 6) {
  console.log("Password is Weak");

} else if (password.length >= 6 && password.length < 10) {
  console.log("Password is Medium");

} else {
  console.log("Password is Strong");
  
}

*/












// Traffic light simulation




/*
function red(){
    console.log("Color is red Stop");
   
   
}
function yellow(){
    console.log("Color is yellow Ready");
}
function green(){
    console.log("Color is green Go");
}

let state = 0; 

setInterval(() => {
  if (state === 0) {
    red();
    state = 1;
    
  } else if (state === 1) {
    yellow();
    state = 2;
  } else if (state === 2) {
    green();
    state = 0; 
  }
}, 2000);

*/












