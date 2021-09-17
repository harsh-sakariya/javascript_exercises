//3) When you leave the input field, a function is triggered which transforms the input text to upper case. Ex. like enter user hello change the tab output shuld be "HELLO"

const textValue = document.getElementById('textValue');
textValue.addEventListener('blur',function(){
    textValue.value = textValue.value.toUpperCase();
});