/* 
Problem - 1 

const fruits = ['Apple', 'Banana', 'Orange'];
a) find the inex of "Banana" and replace "Banana" with "Mango"
b) Remove "Orange" and add "Watermelon". 


*/


// problem - 1
const fruits = ['Apple', 'Banana', 'Orange'];

let indexOfBanana = fruits.indexOf("Banana");
fruits[indexOfBanana] = 'Mango';

 fruits.pop();
 fruits.push('Watermelon');
console.log(fruits);

