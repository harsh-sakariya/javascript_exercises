// 1) create two class FrontEnd and BackEnd which are based on WebDev class, both have some common properties and one same method printLanguage(which will print used language like FrontEnd -> javscript, BackEnd -> .NET) and some additional different  function 

class WebDev {
    language;
    printLanguage(){
        console.log(this.language);
    }
}

class FrontEnd extends WebDev{
    loadFrontEnd(){
        console.log("frontend is loading...");
    }
}

class BackEnd extends WebDev{
    loadBackEnd(){
        console.log("backend is loading...");
    }
}

const frontEnd = new FrontEnd();
frontEnd.language = "javascript";
frontEnd.loadFrontEnd();
frontEnd.printLanguage.call(frontEnd);

const backEnd = new BackEnd();
backEnd.language = ".NET";
backEnd.loadBackEnd();
backEnd.printLanguage.call(backEnd);