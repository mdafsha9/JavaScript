//object in arrays

let myArray = [
  {userId:1231, firstName:"Lorie", gender:"Female"},
  {userId:52253, firstName:"Wright", gender:"Male"},
  {userId:1258, firstName:"Tom", gender:"Others"}
]

const [{firstName}, , {gender}] = myArray;
console.log(firstName, gender);
