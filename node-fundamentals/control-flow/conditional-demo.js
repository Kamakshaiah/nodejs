let a = Math.floor(Math.random() * 10)
let b = Math.floor(Math.random() * 10)

// let a = 1; 
// let b = 1; 

console.log(a, b);

if (a < b) {
    console.log(`${a} is less than ${b}`);
} else if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is equal to ${b}`);
}

const fruit = 'mango';

switch (fruit) {
    case 'apple':
        console.log(`the price of ${fruit} is $10`);
        break;
    case 'mango':
        console.log(`the price of ${fruit} is $20`);
        break;
    default:
        console.log(`sorry could not find price for ${fruit}`);
}