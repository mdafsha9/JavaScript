//map (map is also a iterable)
//difference between object and map

//objects can only have string or symbols as a key
//in objects we can apply for in loop and we cannot apply for of loop

const person = {
  firstName : "Rosie",
  age : 22,
  1 : "One"
}
console.log(person);

for(let key in person){
  console.log(key, typeof key);
}

//in map we can use anything as key like arrays, numbers, strings, objects
//in map we can apply for of loop
const student = new Map();
student.set('firstName', 'Morie');
student.set('age', 12);
student.set(1, 'one');
student.set([1,2,3], 'oneTwoThree');
console.log(student);
console.log(student.get('firstName'));
for(let key of student.keys()){
  console.log(key, typeof key);
}
