// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array

// console.clear();
// let nums1 = [1, 2,  3]

// console.log(nums1.length);
// console.log(nums1[0]);

// let nums2 = new Array(1, 2, 3)
// console.log(nums2.length);
// console.log(nums2[0]);

// let nums3 = new Array(2)
// console.log(nums3.length);
// console.log(nums3[0]);

// let fruits = ['apple', 'banana', 'lemon']
// console.log(fruits.indexOf('apple'))

// sets

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

let mySet = new Set()

mySet.add('a')
mySet.add('b')
mySet.add(1)
mySet.add(2)
mySet.add({a:1, b:2})
// console.log(mySet)

// console.log(mySet.has('a'));
// mySet.delete('a')

// let myArray = Array.from(mySet)
// console.log(myArray);

for (let k of mySet.keys()) console.log(k);
for (let v of mySet.values()) console.log(v);
for (let [k,v] of mySet.entries()) console.log(k, v);
