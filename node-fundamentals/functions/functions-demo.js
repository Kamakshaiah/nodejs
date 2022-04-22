// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// function myFunction(p1, p2) {
//     return p1 * p2;   // The function returns the product of p1 and p2
//   }

// // let out = myFunction(Math.random(), Math.random()); 
// let out = myFunction(2, 3.5); 

// console.log(out);

// function factorial(n) {
//     if ((n === 0) || (n === 1))
//       return 1;
//     else
//       return (n * factorial(n - 1));
//   }

// var a, b, c, d, e;
// a = factorial(1); // a gets the value 1
// b = factorial(2); // b gets the value 2
// c = factorial(3); // c gets the value 6
// d = factorial(4); // d gets the value 24
// e = factorial(5); // e gets the value 120

// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
// }
// // document.getElementById("demo").innerHTML = toCelsius(77);  

// // console.log(toCelsius(77));

// let x = toCelsius(77);
// // let text = "The temperature is " + x + " Celsius";
// let text = "The temperature is " + toCelsius(77) + " Celsius";
// console.log(text);

// var mycar = {make: 'Honda', model: 'Accord', year: 1998};
// var x, y;

// x = mycar.make
// // console.log(x);

// function changeToToyota(myObj){
//     myObj.make = 'Toyota'; 
// }

// changeToToyota(mycar)

// y = mycar.make 
// console.log(y);

// const square = function(number) { return number * number }
// console.log(square(2));

// const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }
// console.log(factorial(3))

// const f = function(x){
//     return x*x; 
// }

// function map(f, a) {
//     let result = []; // Create a new Array
//     let i; // Declare variable
//     for (i = 0; i != a.length; i++)
//       result[i] = f(a[i]);
//     return result;
//   }

// let a = [1, 2, 3,4 , 5]
// let squares = map(f, a)
// console.log(squares);

function map(f, a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  const f = function(x) {
     return x * x * x;
  }
  let numbers = [0, 1, 2, 5, 10];
  let cube = map(f,numbers);
  console.log(cube);
