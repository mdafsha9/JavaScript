//reduce() method executes reducer function for array element
//reduce() returns single value, that function's accumulated result
//reduce() does not execute the function for empty array elements
//reduce() method does not change the original arrays

let numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulated, currentValue) => {
  return accumulated+currentValue;
})
console.log(sum);



const userCart = [{productId:1, productItem:"Laptop", price:22000},
          {productId:2, productItem:"phone", price:50000},
          {productId:3, productItem:"tablet", price:80000}
        ]
const totalAmount = userCart.reduce((totalPrice, currentValue)=>{
  return totalPrice+currentValue.price;
}, 0)

console.log(totalAmount);
