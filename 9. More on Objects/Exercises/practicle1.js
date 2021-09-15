// 1) there is one object with 4 key,values then create three new objet from that single object (two object will take one key,value pair from that object and last( third object) take 3rd and 4th key,value pair of that object )

function deleteKeyValuePair(position,object){
    const lenOfObject = Object.keys(object).length;
    let notRemovePosition;
    if(position === "first"){
        notRemovePosition = 0;
    }else{
        notRemovePosition = lenOfObject-1;
    }

    let keys = [];
    for(let i=0; i<lenOfObject; i++){
        if(notRemovePosition == i){
            continue;
        }
        const key = Object.keys(object)[i];
        keys.push(key);
    }
    for(let ele of keys){
        delete object[ele];
    }
}

const obj = {
    name: "harsh",
    age: "18",
    city: "rajkot",
    language: "java"
}
const obj1 = { ...obj };
const obj2 = { ...obj };
const obj3 = { ...obj };

deleteKeyValuePair("first",obj1);
deleteKeyValuePair("first",obj2);
deleteKeyValuePair("last",obj3);
console.log(obj1);
console.log(obj2);
console.log(obj3);


