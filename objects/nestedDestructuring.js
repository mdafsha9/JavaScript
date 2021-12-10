//Nested destructuring
const users =[
  {userId:1, firstName:"Wright", age:32},
  {userId:2, firstName:"Lorie", age:25},
  {userId:3, firstName:"Mercury", age:22}
]

  //first array destructuring and then object destructuring at a time

  const [{firstName}, , {age}] = users;
  console.log(firstName, age);
