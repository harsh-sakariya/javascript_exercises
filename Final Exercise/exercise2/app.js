const arrOfDefaultCurrency = [
  ["PENNY",0.01],
  ["NICKEL",0.05],
  ["DIME",0.1],
  ["QUARTER",0.25],
  ["ONE",1],
  ["FIVE",5],
  ["TEN",10],
  ["TWENTY",20],
  ["ONE HUNDRED",100],
]

let cashInDrawerObj = {}

for(const defaultCurrency of arrOfDefaultCurrency){
  cashInDrawerObj[defaultCurrency[0]] = {price: defaultCurrency[1], quantity: 0}
}

function giveMeSomeChange(cost, totalCash, cashInDrawer){
  if(totalCash <= 0){
    return {status: "UNDEFINED_TOTAL_CASH", change: []};
  }
  if(cost <= 0){
    return {status: "UNDEFINED_CASH", change: []};
  }

  let resultOfChange = [];
  const totalChangeAmount = parseFloat((totalCash - cost).toFixed(2));
  let currentChangeAmount = totalChangeAmount;
  let totalAmountInDrawer = 0;
  for(const cash of cashInDrawer){
    const price = cashInDrawerObj[cash[0]].price;
    cashInDrawerObj[cash[0]].quantity = cash[1]/price;
    totalAmountInDrawer += cash[1];
  }
  totalAmountInDrawer = parseFloat((totalAmountInDrawer).toFixed(2));

  if(totalAmountInDrawer < currentChangeAmount){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  for(const currency in cashInDrawerObj){
    const currencyPrice = cashInDrawerObj[currency].price;
    const currencyQuantity = cashInDrawerObj[currency].quantity;
    let totalAmountOfCurrentCurrency = currencyPrice * currencyQuantity;

    if(currencyPrice <= currentChangeAmount){
      let count = 0;
      while(currencyPrice <= currentChangeAmount && totalAmountOfCurrentCurrency !== 0){
        currentChangeAmount = parseFloat((currentChangeAmount - currencyPrice).toFixed(2));
        totalAmountOfCurrentCurrency = parseFloat((totalAmountOfCurrentCurrency - currencyPrice).toFixed(2));
        totalAmountInDrawer = parseFloat((totalAmountInDrawer - currencyPrice).toFixed(2));
        count++;
      }
      resultOfChange.push([currency,(currencyPrice*count).toFixed(2),count]);
    }
  }
  if(currentChangeAmount > 0){
    return {status: "NO CHANGE", change: []};
  }
  if(totalAmountInDrawer === 0){
    return {status: "CLOSED", change: resultOfChange};
  }
  if(totalAmountInDrawer > 0 && currentChangeAmount === 0){
    return {status: "OPEN", change: resultOfChange};
  }
}

const resultObj = giveMeSomeChange(10, 10, [["PENNY", 0.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],  ["ONE HUNDRED", 100]]);
console.log(resultObj);