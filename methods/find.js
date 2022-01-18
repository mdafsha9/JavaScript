//find Method
let users = [
  {userId:1, userName:"Lorie"},
  {userId:2, userName:"Rosy"},
  {userId:3, userName:"Candy"},
  {userId:4, userName:"Harry"},
  {userId:5, userName:"Marie"},
]
const myUser = users.find((user)=>{
  return user.userId === 4;
})
console.log(myUser);
