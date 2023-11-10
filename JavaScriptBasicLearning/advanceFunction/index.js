console.log('advance function...');

subscribeElemnt = document.querySelector('.btn-subscribe');
subscribeElemnt.addEventListener('click', ()=>{
        subscribeElemnt.classList.add('js-size-double');
});


let numbers = [1,2,3,4,5,6,7,8,9];
let evennumbers = numbers.filter((num, index)=>{
    return num % 2 == 0;
});
console.log(numbers);
console.log(evennumbers);
let sqaureValues = numbers.map((num)=> num * num);
console.log(sqaureValues);

let clickListener = event => console.log('button clicked!');
let printDate = event => console.log(new Date());

let buttonElement = document.querySelector('#my-button')
.addEventListener('click', clickListener)
addEventListener('click', printDate);

let foods = ["apple", "wheat", "rice"];
foods.forEach(food => console.log(food));

let sum = function(num1, num2){
     return (num1 + num2);
}
let  threeSum = function(num1, num2, num3, twoSum)
{
    let twoAdd = twoSum(num1, num2);
    return (twoAdd + num3);
}
console.log(sum(4,5));
console.log(threeSum(1,2,3, sum));
let sum1 = (num1,num2) => {
    return num1 + num2;
}
console.log('calling arrow function sum1(1,2) => ' + sum1(1,2));
let sum2 = (num1,num2) => num1 + num2;
console.log('calling arrow function sum2(1,2) => ' + sum2(1,2));

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(fruits);
console.log(citrus);

console.log('setting data to local storage.');
localStorage.setItem("fruits-names", fruits);
console.log('data from local storage... '  + localStorage.getItem("fruits-names"));

setTimeout(() => console.log('display message after 5 seconds'), 5000);
let intervalid = setInterval(() => console.log(`display repeatedly message after 5 seconds ${new Date()}`), 5000);
 setTimeout(()=>clearInterval(intervalid,), 20000);