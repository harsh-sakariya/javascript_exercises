//5)when a user selects dropdown value. ex. dropdown value like Java,PHP,Angular when select java then alert message like "select language is java" 

const dropdown = document.getElementById('dropdown');
dropdown.addEventListener('change', function(){
    alert("select language is "+this.value);
})