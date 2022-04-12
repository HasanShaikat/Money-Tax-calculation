/* function getInput(input){
    const incomeInput = document.getElementById(input);
    const incomeInputValue = incomeInput.value;
    const incomeInputAmount = parseInt(incomeInputValue);
    incomeInput.value = '';

    return incomeInputAmount;
} */
document.getElementById('calculate').addEventListener('click', function (){
    const incomeInput = document.getElementById('incomeInput');
    const incomeInputValue = incomeInput.value;
    const incomeInputAmount = parseInt(incomeInputValue);
    // incomeInput.value = '';

    const foodInput = document.getElementById('foodInput');
    const foodInputValue = foodInput.value;
    const foodInputAmount = parseInt(foodInputValue);
    foodInput.value = '';

    const rentInput = document.getElementById('rentInput');
    const rentInputValue = rentInput.value;
    const rentInputAmount = parseInt(rentInputValue);
    rentInput.value = '';

    const clothInput = document.getElementById('clothInput');
    const clothInputValue = clothInput.value;
    const clothInputAmount = parseInt(clothInputValue);
    clothInput.value = '';

    // expenses and balance
    const totalExpenses = document.getElementById('totalExpenses');
    const totalExpensesText = totalExpenses.innerText;
    const totalExpensesAmount = totalExpensesText;

    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceAmount = balanceText;
   
    //total Expenses
    let inputSum = foodInputAmount + rentInputAmount + clothInputAmount;
    totalExpenses.innerText = inputSum;

    // Balance
    let totalAmount = incomeInputAmount - inputSum;
    balance.innerText = totalAmount;
})

document.getElementById('saveButton').addEventListener('click', function (){
    // saving input;
    const saveInput = document.getElementById('saveInput');
    const saveInputValue = saveInput.value;
    const saveInputAmount = parseInt(saveInputValue);
    saveInput.value = '';

    // saving balance
    const percenteg = incomeInput.value / saveInputAmount;
    
    // Saving Amount
    const savingAmount = document.getElementById('savingAmount');
    const savingAmountText = savingAmount.innerText;
    const savingTotalAmount = parseInt(savingAmountText);

    // Remaining Balance
    const remainingBalance = document.getElementById('remainingBalance');
    const remainingBalanceText = remainingBalance.innerText;
    const remainingBalanceAmount = parseInt(remainingBalanceText);

    savingAmount.innerText = percenteg;

    const remainingTotalBalance = balance.innerText - savingAmount.innerText;
    remainingBalance.innerText = remainingTotalBalance


    // income input clear
    incomeInput.value = '';
})