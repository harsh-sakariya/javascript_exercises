// 3) convert one string into array and  get all 'e' from the string and append occurence number of e to it  like   srefere -> ['0e','1e','2e'  ] without using (for,while)  loop

let resultArr = [];
let str = "srefere";
let character = "e";
let counter = 0;
let strArr = str.split("");
strArr.map(printStr);

function printStr(ch){
    if(ch === character){
        resultArr.push(counter+ch);
        counter++;
    }
}

console.log(resultArr);