//set (it is iterable)
//array and set are two different iterables
//no index-based access
//order is not guaranted
//unique items only (no duplicate elements aloowed)

//normal Array
const numbers = [1,2,3,4,3]; //in normal arrays we can store duplicate elements
console.log(numbers);
console.log(numbers[2]); //normal arrays are index based

//set
let fruits = ["Apple", "Banana", "Orange"];
let person = {
  firstName:"Rahul",
  lastName:"Lorie",
  age:18
}
const nums = new Set([1,2,3]);  //in sets we cannot store dulipcate elements (unique elements)
console.log(nums); // in sets we can store any type of data
nums.add(fruits);
nums.add(person);
console.log(nums);
