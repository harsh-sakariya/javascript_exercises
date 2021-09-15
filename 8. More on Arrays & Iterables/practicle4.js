// 4)  Create an array of numbers (of your choice) and perform three array
//         operations on it: filter for numbers greater than 5, map every number to
//         an object which holds the number on some property (e.g. ""num"") and
//         reduce the array to a single number (the multiplication of all numbers).   



let numArr = [50,1,9,12,18,14,15,25,26,48,1,2,3,4,5];

//First Operation
let resultArr1 = numArr.filter(Element => Element>5);

//Second Operation
let resultObj2 = {num:[]};
numArr.map(element => resultObj2.num.push(element));

//Third Operation
let multiplication = 1;
let resultArr3 = [];
numArr.map(multiplyArr);
function multiplyArr(element){
    multiplication *= element;
    resultArr3[0] = multiplication;
}

console.log(resultArr1);
console.log(resultObj2);
console.log(resultArr3);