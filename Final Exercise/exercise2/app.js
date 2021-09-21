const PENNY = 0.01;
const NICKEL = 0.05;
const DIME = 0.1;
const QUARTER = 0.25;
const ONE = 1;
const FIVE = 5;
const TEN = 10;
const TWENTY = 20;
const ONE_HUNDRED = 100;
let cashInDrawerObj = {
  "ONE HUNDRED" : {
    price: ONE_HUNDRED,
    quantity: 0,
  },
  "TWENTY" : {
    price: TWENTY,
    quantity: 0,
  },
  "TEN" : {
    price: TEN,
    quantity: 0,
  },
  "FIVE" : {
    price: FIVE,
    quantity: 0,
  },
  "ONE" : {
    price: ONE,
    quantity: 0,
  },
  "QUARTER" : {
    price: QUARTER,
    quantity: 0,
  },
  "DIME" : {
    price: DIME,
    quantity: 0,
  },
  "NICKEL" : {
    price: NICKEL,
    quantity: 0,
  },
  "PENNY" : {
    price: PENNY,
    quantity: 0,
  },
}

function giveMeSomeChange(cost, totalCash, cashInDrawer){
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

    if(currencyPrice <= currentChangeAmount && totalAmountOfCurrentCurrency >= currencyPrice){
      let count = 0;
      while(currencyPrice <= currentChangeAmount && totalAmountOfCurrentCurrency !== 0){
        currentChangeAmount = parseFloat((currentChangeAmount - currencyPrice).toFixed(2));
        totalAmountOfCurrentCurrency = parseFloat((totalAmountOfCurrentCurrency - currencyPrice).toFixed(2));
        totalAmountInDrawer = parseFloat((totalAmountInDrawer - currencyPrice).toFixed(2));
        count++;
      }
      resultOfChange.push([currency,currencyPrice*count,count]);
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

const resultObj = giveMeSomeChange(19.5, 2100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(resultObj);