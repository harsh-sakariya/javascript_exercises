// 1) write a program following pattern.
// *                           
// * *  
// * * *  
// * * * *  
// * * * * *                                                                                                                                  
let numOfRows = 5;
for(let i=1; i<=numOfRows; i++){
    let str = "";
    for(let j=1; j<=i; j++){
        str += "* ";
    }
    console.log(str);
}
