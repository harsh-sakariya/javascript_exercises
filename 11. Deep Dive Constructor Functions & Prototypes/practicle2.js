// 2) write a program create a constructor function with parameter and create object and accessing properties.
   

function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(
            'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old'
        )
    }
}

const person1 = new Person('Harsh', '20');
person1.greet();