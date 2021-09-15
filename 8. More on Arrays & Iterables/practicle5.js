// 5)     Write a function (""findMax"") which executes some logic that finds the
//         largest number in a list of arguments. Pass the array from task 1 split
//         up into multiple arguments to that function.

function findMax(){
    if(arguments.length === 0){
        return;
    }
    let max = arguments[0];
    let lenOfArg = arguments.length;
    for(let i=0; i<lenOfArg; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

let arr = [-26,-88,25,90,-50,-12,20];
let arrMax = findMax(...arr);
console.log(arrMax);