// 1) create a function that return another function from inside of it  and after that it should give me the square of  input (there must be function inside function) "

function square(n){
    function multiplication(x,y){
        return x*y;
    }
    return multiplication(n,n);
}

console.log(square(25));