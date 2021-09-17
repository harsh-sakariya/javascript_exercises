//1) print the current page in javascript and after that make example to load another javascript file dynamically

console.log("hello world");

function loadJavaScriptFile(){
    const element = document.createElement("script");
    element.src = 'practicle1_1.js';
    element.defer = true;
    document.head.append(element);
}

const loadJavaScriptFileBtn = document.getElementById("loadJavaScriptFileBtn");
loadJavaScriptFileBtn.addEventListener("click",loadJavaScriptFile);