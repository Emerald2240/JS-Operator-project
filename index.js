

var num1;
var num2;

var x;
var y;

x = window.prompt("Please Enter the First Number");
y = window.prompt("Please Enter the Second Number");

num1 = parseInt(x);
num2 = parseInt(y);

var sum = num1 + num2;
var diff = num1 - num2;
var product = num1 * num2;
var quot = num1/num2;

document.write(`<p>Num1: `+num1+`</p>`+`<p>Num2: `+num2+`</p>`);

document.write (`<h1>Sum: </h1><h1 class="ans">`+sum+`</h1>`);
document.write (`<h1>Difference: </h1><h1 class="ans">`+diff+`</h1>`);
document.write (`<h1>Product: </h1><h1 class="ans">`+product+`</h1>`);
document.write (`<h1>Quotient: </h1><h1 class="ans">`+quot+`</h1>`);