import { Animal } from "./animal.js";
import { Human } from "./human.js";

const animal = new Animal();
animal.sleep();
animal.eat();

const human = new Human();
human.sleep();
human.eat();

const loadCatClassBtn = document.getElementById("loadCatClassBtn");
loadCatClassBtn.addEventListener("click",function() {
    import('./cat.js').then(module => {
        const cat = new module.Cat();
        const showLoadClassDetail = document.getElementById("showLoadClassDetail");
        showLoadClassDetail.innerHTML = `Now cat.js file load...<br> ${cat.speak()}`;
    })
})