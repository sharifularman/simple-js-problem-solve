// different kinds of loop 
/* 
problem-1 

আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 

*/
//using while loop
let i = 1;
while( i < 40 ){
    // console.log('Ajke Amar mon valo nei',i);
    i++;
}
//using for loop
for (let i = 0; i < 40.; i++) {
    // console.log('Ajke Amar mon valo nei', i)
}

/* 
problem-2
একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
*/
for(i = 58; i <= 98; i++){
    // console.log(i);
}

/* 
problem-3 
একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  
*/
for(i = 412; i <= 456; i+=2){
    // console.log(i);
}

/* 
problem-4 
একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
*/
for(i = 581; i <= 623; i+=2){
    // console.log(i);
}

/* 
problem-5 
তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 
*/

let whatILearn = ['HTML', 'CSS', 'Bootsrap', 'Tailwind', 'Basic JS', 'Static Website'];

for(i = 0; i < whatILearn.length; i++){
    // console.log(whatILearn[i]);
}

/* 
problem-6 
 তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

*/
 let myPhones = ['Nokia', 'Samsung', 'Iphone', 'Blackberry', 'Huawei', 'Xiomi', 'Realme', 'Walton', 'Symphony', 'Google Pixels'];

 let phone = 0;
while(phone < myPhones.length){
    console.log(myPhones[phone]);
    phone++; 
}