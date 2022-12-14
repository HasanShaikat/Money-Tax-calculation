function getInput(input){
    const foodInput = document.getElementById(input);
    const foodInputValue = foodInput.value;
    const foodInputAmount = parseFloat(foodInputValue);

    foodInput.value = '';

    return foodInputAmount;
}

function getExpenses(expenses){
    const totalExpenses = document.getElementById(expenses);
    const totalExpensesText = totalExpenses.innerText;
    const totalExpensesAmount = parseFloat(totalExpensesText);

    return totalExpensesAmount;
}

document.getElementById('calculate').addEventListener('click', function (){
    const incomeInput = document.getElementById('incomeInput');
    const incomeInputValue = incomeInput.value;
    const incomeInputAmount = parseInt(incomeInputValue);

    let food = getInput('foodInput');   

    let rent = getInput('rentInput');  

    let cloth = getInput('clothInput');
   
    // expenses and balance
    getExpenses('totalExpenses');
  
    // Balance
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceAmount = parseInt(balanceText);

    //total Expenses and Balance
    if(food > 0 && rent > 0 && cloth > 0){
        let inputSum = food + rent + cloth;
        totalExpenses.innerText = inputSum;

        let totalAmount = incomeInputAmount - inputSum;
        balance.innerText = totalAmount;
    }else{
       alert("Please Input Correct Amount!!")
    }
    
})

function getSave(saving){
    const saveInput = document.getElementById(saving);
    const saveInputValue = saveInput.value;
    const saveInputAmount = parseFloat(saveInputValue);
    saveInput.value = '';

    return saveInputAmount;
}

document.getElementById('saveButton').addEventListener('click', function (){
    // saving input;
    let save = getSave('saveInput')

    // Saving Amount
    const savingAmount = document.getElementById('savingAmount');
    const savingAmountText = savingAmount.innerText;
    const savingTotalAmount = parseFloat(savingAmountText);

    // Remaining Balance
    const remainingBalance = document.getElementById('remainingBalance');
    const remainingBalanceText = remainingBalance.innerText;
    const remainingBalanceAmount = parseFloat(remainingBalanceText);

    // saving balance
    if(save > 0){
        const percenteg = (incomeInput.value / 100) * save;
        savingAmount.innerText = percenteg;

        const remainingTotalBalance = balance.innerText - savingAmount.innerText;
        remainingBalance.innerText = remainingTotalBalance
    }else{
        alert("Please Give your Tax.")
    }

    // income input clear
    incomeInput.value = '';
})