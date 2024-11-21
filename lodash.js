import _ from 'lodash';

// Capitalize the first letter of the each word string
let str = "hello world from lodash"
let result = _.startCase(str);
console.log(result); 


// Sort the array of objects by age
let obj = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Eve", age: 35 }];
let sortedObj = _.sortBy(obj, ['age']);
console.log(sortedObj);


// Group by same length
let words = ["apple", "pear", "grape", "banana"]
let groupedWords = _.groupBy(words, 'length');
console.log(groupedWords);