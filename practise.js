//find()

const myArray = ["Applei  ", "MAngoi", "Grapes", "Pappy"] ;

function isLength(string){
  return string.length === 5;
}

const ans = myArray.find(isLength);
console.log(ans);
