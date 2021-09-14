const defaultCurrentResult = 0;
let currentResult = defaultCurrentResult;
let logEntries = [];

function getUserInputValue(){
    return parseInt(userInput.value);
}

function writeCurrentCalculation(operator, valueBeforeCalculation, userInput){
    const calcDescription = `${valueBeforeCalculation} ${operator} ${userInput}`;
    outputResult(currentResult, calcDescription);
}

function writeLog(operation, prevResult, number, result){
    const logEntry = {
        operation: operation,
        prevResult: prevResult,
        number: number,
        result: result
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(){
    const enteredNumber = getUserInputValue();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    writeCurrentCalculation('+', initialResult, enteredNumber);
    writeLog("ADD",initialResult,enteredNumber,currentResult);  
}
function subtraction(){
    const enteredNumber = getUserInputValue();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    writeCurrentCalculation('-', initialResult, enteredNumber);
    writeLog("SUBTRACTION",initialResult,enteredNumber,currentResult);
}
function multiplication(){
    const enteredNumber = getUserInputValue();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    writeCurrentCalculation('*', initialResult, enteredNumber);
    writeLog("MULTIPLICATION",initialResult,enteredNumber,currentResult);
}
function divide(){
    const enteredNumber = getUserInputValue();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    writeCurrentCalculation('/', initialResult, enteredNumber);
    writeLog("DIVIDE",initialResult,enteredNumber,currentResult);
}
addBtn.addEventListener("click",add);
subtractBtn.addEventListener("click",subtraction);
multiplyBtn.addEventListener("click",multiplication);
divideBtn.addEventListener("click",divide);