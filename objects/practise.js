//undefined, null and BigInt

let firstName;
console.log(firstName);

firstName = null;
console.log(typeof firstName, firstName);

let num = BigInt(123);
let myNum = 22n;
console.log(num+myNum);
//max largest integer
console.log(Number.MAX_SAFE_INTEGER);
