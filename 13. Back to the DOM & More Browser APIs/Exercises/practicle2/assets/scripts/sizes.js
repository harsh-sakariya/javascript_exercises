const parentDiv = document.getElementById('parent-div');
const childDiv = document.getElementById('child-div');

const distanceFromTop = childDiv.offsetTop-childDiv.clientTop;
console.log('parent div distance from top is '+distanceFromTop);

const scrollToBtn = document.getElementById('scrollToBtn');
const scrollByBtn = document.getElementById('scrollByBtn');

scrollToBtn.addEventListener('click', function(){
    childDiv.scrollTo(0,0);
});

scrollByBtn.addEventListener('click', function(){
    childDiv.scrollBy(0,50);
})

