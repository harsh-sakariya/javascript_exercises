const encodedString = document.getElementById("encodedString");
const decodeBtn = document.getElementById("decodeBtn");
const showResult = document.getElementById("showResult");

function decodeROT13(){
    const str = encodedString.value;
    if(str.trim()){
        let charArr = str.split('').map(element => {
            const charCode = element.charCodeAt(0);
            if((charCode <= 77 && charCode >= 65) || (charCode <= 109 && charCode >= 97)){
                return String.fromCharCode(charCode+13);
            }
            else if((charCode <= 90 && charCode >= 78) || (charCode <= 122 && charCode >= 110)){
                return String.fromCharCode(charCode-13);
            }
            else{
                return element;
            }
        });
        let decodeStr = '';
        for(const character of charArr){
            decodeStr += character;
        }
        showResult.textContent = `Decoded Sting: ${decodeStr}`;
    }
    else{
        alert("Empty Field");
    }
}

decodeBtn.addEventListener('click', decodeROT13);


