// 3) write a program create a constructor function using a prototype. 

function Person(){
    this.age = 30;
    this.name = 'Max';
    this.greet = function(){
        console.log(
            'Hi I am '+ this.name + 'and I am '+ this.age + ' years old.'
        );
    }
}

Person.prototype = {
    printAge(){
        console.log(this.age);
    }
}

const person = new Person();
person.printAge();