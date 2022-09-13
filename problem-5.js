/* 
1. You are given theree numbers 13, 79 and 45. Write a programm that will print the largest number

2. You are given a triangle with the sides 9, 8, 9. Write a programm to check whether a triangle is isosceles or not.

                isosceles = two sides are equall

*/
// problem-1
let num1 = 70;
let num2 = 81;
let num3 = 91;

if (num1 > num2) {
    if (num1 > num3) {
        console.log('The largest number is', num1);
    }
    else {
        console.log('The largest number is', num3);
    }
}
else {
    if (num2 > num3) {
        console.log('The largest number is', num2);
    }
    else {
        console.log('The largest number is', num3);
    }
}

// problem-2
let side1 = 9;
let side2 = 8;
let side3 = 9;

if (side1 === side2 && side1 === side3) {
console.log('This is a Equialateral triangle');
}
else if( side1 === side2 || side1 === side3 || side2 === side3){
    console.log('This is an isosceles triangle');
}
else{
    console.log('This is a Scalene triangle');
}

/* 
problem-3 

তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ হাজার টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

*/

let myMoney = 80400;
if(myMoney > 80000){
    console.log('Yay, I will buy a macbook');
}
else if(myMoney > 60000){
    console.log('I will buy a gaming laptop');
}
else if(myMoney > 40000){
    console.log('I will buy Lenevo Yoga Laptop');
}
else if(myMoney > 20000){
    console.log('I have to buy a second hand laptop');
}
else{
    console.log('amamr taka nai tai purono mobile diya kaj chalai');
}

