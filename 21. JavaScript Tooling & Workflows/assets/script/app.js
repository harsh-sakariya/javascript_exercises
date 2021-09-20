import { Animal } from "./components/animal.js";
import { Human } from "./components/human.js";

const animal = new Animal();
animal.sleep();
animal.eat();

const human = new Human();
human.sleep();
human.eat();

const loadCatClassBtn = document.getElementById("loadCatClassBtn");
loadCatClassBtn.addEventListener("click",function() {
    import('./components/cat.js').then(module => {
        const cat = new module.Cat();
        const showLoadClassDetail = document.getElementById("showLoadClassDetail");
        showLoadClassDetail.innerHTML = `Now cat.js file load...<br> ${cat.speak()}`;
    })
})