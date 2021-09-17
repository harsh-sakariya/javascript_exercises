//4) Press and hold down a key inside the text field to set a red background color. Release the key to set a green background color

let textField = document.getElementById('textField');

textField.addEventListener('keypress', function(){
    textField.style.backgroundColor = 'red';
});

textField.addEventListener('keyup', function(){
    textField.style.backgroundColor = 'green';
});