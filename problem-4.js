/* 
Problem

You and Your friend Tom, Jane, Peter and Jhon got their final exam results.
Your total score is 85. Tom's total score is 66, Jane's total is 95, Peter total score is 565 and John total score is 40. The grading chart is 

        80 or above A grade
        60 or above B grade 
        50 or above C grade 
        40 or above D grade 
        39 or less => F grade

    Write a programm to find you and your friends results using if-else 
*/


let marks = 55;

if(marks >= 80){
    console.log('Your grade is A');
}
else if(marks >= 60 && marks < 80){
    console.log('Your Grade is B');
}
else if(marks >= 50 && marks < 60){
    console.log('Your Grade is C');
}
else if(marks >= 40 && marks < 50){
    console.log('Your grade is D');
}
else{
    console.log('Your Grade is F');
}