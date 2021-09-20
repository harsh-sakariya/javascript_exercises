// 1) add moment.js in your project and also perform some date formation methods from it

const currentTimeHeading = document.getElementById('currentTime');
const getAgeBtn = document.getElementById('getAgeBtn');
const enteredBirthDate = document.getElementById('birthDate');
const showAge = document.getElementById('showAge');

setInterval(()=>{
    currentTimeHeading.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
},1000)

getAgeBtn.addEventListener('click',function(){
    const birthDate = enteredBirthDate.value.trim();
    if(birthDate === ''){
        alert("Empty Field!");
        return;
    }
    let result = moment(birthDate, "YYYYMMDD").fromNow();
    if(result === 'Invalid date'){
        alert("Invalid Date");
    }
    else{
        showAge.textContent = result.replace('ago','old');
    }
})

console.log(moment("20010818", "YYYYMMDD").fromNow());