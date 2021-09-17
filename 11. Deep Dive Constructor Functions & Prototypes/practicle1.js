// 1) write a program create multiple objects with constructor function.

function Person(){
    this.name = "Harsh";
    this.age = 18;
    this.greet = function() {
        console.log(
            'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old'
        );
    }
}

const person1 = new Person();
person1.name = "harry";
person1.age = 20;
person1.greet();

const person2 = new Person();
person2.greet();