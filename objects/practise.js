//nested destructuring
const obj = [
  {userId: 1203, firstName:"Story", gender:"male"},
  {userId: 1204, firstName:"Marie", gender:"others"},
  {userId: 1205, firstName:"Lorie", gender:"Female"},
]

const [,{userId}, {gender}] = obj;
console.log(userId);
console.log(gender);
