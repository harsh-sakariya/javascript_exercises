const arrOfDefaultCurrency = [
  ["PENNY",0.01],
  ["NICKEL",0.05],
  ["DIME",0.1],
  ["QUARTER",0.25],
  ["ONE",1],
  ["FIVE",5],
  ["TEN",10],
  ["EIGHT HUNDRED",800],
  ["TWENTY",20],
  ["ONE HUNDRED",100],
  ["FIVE HUNDRED",500]

]

let cashInDrawerObj = {}

for(const defaultCurrency of arrOfDefaultCurrency){
  cashInDrawerObj[defaultCurrency[0]] = {price: defaultCurrency[1], quantity: 0}
}

let cashInDrawerArr = [];
for (var cashInDrawer in cashInDrawerObj) {
  cashInDrawerArr.push([cashInDrawer, cashInDrawerObj[cashInDrawer]]);
}

cashInDrawerArr.sort(function(a, b){
  return b[1]['price'] - a[1]['price'];
})

cashInDrawerObj = {};

for(const cashInDrawer of cashInDrawerArr){
  cashInDrawerObj[cashInDrawer[0]] = cashInDrawer[1];
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
      const amountToGive = parseFloat((currencyPrice*count).toFixed(2));
      if(amountToGive != 0.00){
        resultOfChange.push([currency,amountToGive,count]);
      }
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

const resultObj = giveMeSomeChange(800, 1600, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0], ["FIVE HUNDRED", 500],["EIGHT HUNDRED",800]]);
console.log(resultObj);