let num = [1,2,3,4,5,6,7,8,9];
let square = (x) => x*x;
let new_squre = num.map(square);
let new_squre_filter = num.filter(x => x > 5);
let new_squre_reduce = num.reduce((x,y) => x+y, 0);
console.log(new_squre);
console.log(new_squre_filter);
console.log(new_squre_reduce);