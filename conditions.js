let a = 10;
let b = 20;
const MATH_PI = 3.14;

console.log(a+=a, b-=a, b!==a, MATH_PI**MATH_PI, b/=a);

// addition
console.log("addition: a + b + c = ", a + b + MATH_PI);

// subtraction
console.log("subtraction: a - b - c = ", a - b - MATH_PI); 

// multiplication
console.log("multiplication : a * b * c = ", a * b * MATH_PI);

// division
console.log("division: b / a = ", b / a);

// remainder
console.log("remainder: b % MATH_PI = ", b % MATH_PI);

// increment
let x = 1;
let y = 1;

console.log("increment :");

console.log("++x = ", ++x); // before init. will be x+x and then ptint 2 (on this line - no result transfer) x = 2
console.log("x = ", x);     // x = 2

console.log("------------");

console.log("y++ = ", y++); // prints 1 and then increased to 2 (on second line - with result transfer) x = 1
console.log("x = ", y);     // x = 2

//exponentiation
console.log("exponentiation: x ** y =", a ** MATH_PI);

//comparison
console.log("comparison: a > b", a > b);

console.log("----------------------New Task----------------------");

const radius = 23;

let result = radius !== 0 && MATH_PI === 3.14 ? MATH_PI * (radius * radius) : "Radius can not be a zero and PI must be correct!"

const checkRadius = radius >= 10 || radius < 100 ? "Ok" : "incorrect";

console.log(checkRadius);
console.log(result);

const userName = "Mark";

const discount = userName === "Mark" ? "30%" : "0%"

console.log("Your discount is: " + discount);

console.log("----------------------New Task----------------------");

const day = 1;
let weekDay = '';

switch (day) {
    case 1: {
        weekDay = "Monday";
        console.log("Monday");
    }
    break;

    case 2: {
        weekDay = "Tuesday";
        console.log("Tuesday");
    }
    break;
    
    case 3: {
        weekDay = "Wednesday";
        console.log("Wednesday");
    }
    break;
    default: {
        console.error("input wrong number!")
    }
}

if(weekDay === "Monday") {
    console.log("oh, no again...")
}

console.log("Week day is: " + weekDay);
                                    