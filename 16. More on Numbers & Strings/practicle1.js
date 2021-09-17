//1) write a program to reverse string of given string ex. "Hello World"

let str = "Hello World";
let reverseStr = '';
for(let i=0; i<str.length; i++){
    reverseStr += str[str.length-i-1];
}
console.log(reverseStr);