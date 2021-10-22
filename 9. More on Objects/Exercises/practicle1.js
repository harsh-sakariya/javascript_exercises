// 1) there is one object with 4 key,values then create three new objet from that single object (two object will take one key,value pair from that object and last( third object) take 3rd and 4th key,value pair of that object )

function getKeyValuePair(object, index){
    const key = Object.keys(object)[index];
    const value = object[key];
    return {[key]: value}
}

const obj = {
    name: "harsh",
    age: "18",
    city: "rajkot",
    language: "java"
}


const obj1 = getKeyValuePair(obj,0);
const obj2 = getKeyValuePair(obj,0);
const obj3 = { ...getKeyValuePair(obj,2), ...getKeyValuePair(obj,3) };


console.log(obj1);
console.log(obj2);
console.log(obj3);


