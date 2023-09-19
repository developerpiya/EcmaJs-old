// let number=0;
// let number=-0;
// let number=1;
// let number=-1;
// let number=NaN;
let number =-5.999;
console.log(Math.sign(number)); // shows the sign of number
console.log(Math.trunc(number)); // it provide only decimal se pahle ki value
console.log(Math.floor(number));// floor provide lower value




// exponential Operator in JS
let a=5;
let b=8;
console.log(a**b);



// Number & Global Methods in JS
let num=5;
let num2=NaN;
let num3='vinod';
console.log(isFinite(num));
console.log(Number.isFinite(num2));//Number.InFinite bhi function hota h
console.log(isNaN(num));//Is Not A Number So it gives false
console.log(Number.isNaN(num3));
console.log(isNaN(num3));
console.log(Number.isInteger(num));
