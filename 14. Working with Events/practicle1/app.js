//1) write a program to calculate add,sub,div,mul of two input from users.

const calculationBtn = document.getElementById('calculateBtn');

function calculation(){
    const firstVal = document.getElementById('firstValue').value;
    const secondVal = document.getElementById('secondValue').value;
    if(firstVal.trim() === '' || secondVal.trim() === ''){
        return;
    }

    const resultDiv = document.getElementById('showResult');
    resultDiv.innerHTML = `
        <h4>Sum:</h4> ${parseFloat(firstVal)+parseFloat(secondVal)} 
        <h4>Subtraction:</h4> ${parseFloat(firstVal)-parseFloat(secondVal)}
        <h4>Multiplication:</h4> ${parseFloat(firstVal)*parseFloat(secondVal)}
        <h4>Divison:</h4> ${(parseFloat(firstVal)/parseFloat(secondVal).toFixed(2))}
    `;
}

calculationBtn.addEventListener('click', calculation);