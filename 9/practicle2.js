// 2) Find the sum of all elements of a given array? Ex. like arr = [1, 6, 17, 70, 85];

let arr = [1,6,17,70,85];
let sum = 0;
arr.forEach(element => {
    sum += element;
});
console.log(sum);