//function
function updateTotalField(totalFieldId, newAmount) {
  const amountTotal = document.getElementById(totalFieldId);
  const previousAmountText = amountTotal.innerText;
  const previousAmount = parseFloat(previousAmountText);
  //getting the field for the total balance for access of variable for validation
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceText = balanceTotal.innerText;
  const previousBalanceAmount = parseFloat(previousBalanceText);

  if (newAmount < previousBalanceAmount) {
    const newTotal = previousAmount + newAmount;
    amountTotal.innerText = newTotal;
  } else {
    alert("You do not have sufficient balance!");
  }
}

function updateTotalBalance(newAmount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceText = balanceTotal.innerText;
  const previousBalanceAmount = parseFloat(previousBalanceText);
  if (isAdd == true) {
    const newBalanceTotal = previousBalanceAmount + newAmount;
    balanceTotal.innerText = newBalanceTotal;
  } else {
    if (newAmount < previousBalanceAmount) {
      const newBalanceTotal = previousBalanceAmount - newAmount;
      balanceTotal.innerText = newBalanceTotal;
    }
  }
}

//---------handle deposit button event---------
document.getElementById("deposit-Btn").addEventListener("click", function () {
  //next step is to get the amount deposited
  const depositInput = document.getElementById("deposit-field");
  const newDepositText = depositInput.value;
  const newDepositAmount = parseFloat(newDepositText);

  //calling the function
  if (newDepositAmount > 0) {
    updateTotalField("deposit-total", newDepositAmount);
    //updating balance
    updateTotalBalance(newDepositAmount, true);
  }

  // clear the input
  depositInput.value = "";
});

//-------------handle withdraw event handler----------
document.getElementById("withdraw-Btn").addEventListener("click", function () {
  //get the amount provided in the withdraw input
  const withdrawInput = document.getElementById("withdraw-field");
  const withdrawAmountText = withdrawInput.value;
  const newWithdrawAmount = parseFloat(withdrawAmountText);

  //set withdraw total
  if (newWithdrawAmount > 0) {
    updateTotalField("withdraw-total", newWithdrawAmount);

    //update balance
    updateTotalBalance(newWithdrawAmount, false);
  }

  // clear the input
  withdrawInput.value = "";
});
