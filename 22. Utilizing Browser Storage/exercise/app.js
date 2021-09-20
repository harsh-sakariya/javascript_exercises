const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');
const enteredName = document.getElementById('name');
const enteredAge = document.getElementById('age');
const showUserData = document.getElementById('show-user-data')

storeBtn.addEventListener("click", function(){
    const name = enteredName.value.trim();
    const age = enteredAge.value;
    const data = {
        name: name,
        age: age
    }
    if(name && age){
        localStorage.setItem("userData",JSON.stringify(data));
        sessionStorage.setItem("userData",JSON.stringify(data));
        document.cookie = `userData=${JSON.stringify(data)}`;
    }
    else{
        alert("Empty Fields");
    }
});

retrieveBtn.addEventListener("click", function(){
    const userData = JSON.parse(localStorage.getItem("userData"));
    if(userData !== null){
        console.log(userData);
        showUserData.innerHTML = `Name: ${userData.name} <br> Age: ${userData.age}`;
    }
    else{
        alert("Data not available");
    }
})