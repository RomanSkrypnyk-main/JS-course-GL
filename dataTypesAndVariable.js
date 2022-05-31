const one = 1; // cannot be overridden
const name = "Roman";

let varShouldBeUpdated = null; // may be overridden

const a = "a";
const A = "A";

let temp = undefined;

const obj = {
    a: 1,
    name: "Test"
}

const arr = [];

const num1 = 1;
const num2 = "1";

num1 == num2; // is value the same? false
num1 === num2; // is types the same? true

console.log(one);

var res1 = one == a;
var res2 = one == num1;
var res3 = one === num1;

console.log("Res whis data type check: false?" + res1);
console.log("Res whis data type check: true?" + res2);
console.log("Res whis data type check: true?" + res3);

console.log("Var before update: ", typeof varShouldBeUpdated);
vatShouldBeUpdated = temp;
console.log("Var after update: ", typeof varShouldBeUpdated);