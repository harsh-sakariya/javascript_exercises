//2) Write a program to get the volume of a Cylinder with four decimal places using object classes.
//V=πr2h

class Volume{
    radius;
    height;
    constructor(radius,height){
        this.radius = radius;
        this.height = height;
    }
}

class Cylinder extends Volume{
    volumeOfCylinder(){
        return (Math.PI * this.radius * this.radius * this.height).toFixed(4);
    }
}

const cylinder1 = new Cylinder(2,2);
const volumeOfCylinder = cylinder1.volumeOfCylinder();
console.log(volumeOfCylinder);
