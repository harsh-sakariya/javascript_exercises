// 6)     Tweak the ""findMax"" function such that it finds both the minimum and
//         maximum and returns those as an array. Then use destructuring when
//         calling the function to store the two results in separate constants.

function findMax(){
    if(arguments.length === 0){
        return;
    }
    let max = arguments[0];
    let min = arguments[0];
    let lenOfArg = arguments.length;
    for(let i=0; i<lenOfArg; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
        if(arguments[i] < min){
            min = arguments[i];
        }
    }
    return [max,min];
}

let arr = [26,88,25,90,50,-12,20];
let [arrMax,arrMin] = findMax(...arr);
console.log(arrMax,arrMin);