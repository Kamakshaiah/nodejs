// const types = [ 'object', 'array', 'string', 'integer', 'float', 'boolean' ]

// for (const type of types) {  
//   console.log(`A JavaScript type is: ${type}`)
// }

// const mapEx = new Map(); 

// mapEx.set('item-1', 'this is item 1')
// mapEx.set('item-2', 'this is item 2')
// mapEx.set('item-3', 'this is item 3')

// for (const [i,j] of mapEx.entries()){
//     console.log(JSON.stringify(i), JSON.stringify(j));
// }

// working with indexes

// const names = [ 'mk', 'ms', 'mya', 'msb' ]

// for (const i in names){
//     console.log(`${names[i]} is in ${i}th position`);
// }

// const user = { name: 'Marcus', likes: 'Node.js' }

// for (const key in user) {  
//   console.log(`${key}: ${user[key]}`)
// }

const nums = [1, 2, 3, 4, 5]

nums.forEach((i)=>{
    console.log(nums[i-1]);; 
})

// const numbers = ['h', 'e', 'l', 'l',, 'o'];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value) {
//   txt += value;
// }

// console.log(txt);