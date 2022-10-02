document.getElementById('btn-deposite').addEventListener('click',function(){
    // console.log('clicked');
    const depositeField =document.getElementById('deposite-field');
    const newDepositeAmountString =depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);  
    // console.log(newDepositeAmount);
    depositeField.value ="";

    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    const currentDepositeTotal = previousDepositeTotal+newDepositeAmount; 
    depositeTotal.innerText = currentDepositeTotal;

     const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal+newDepositeAmount; 
    balanceTotal.innerText = currentBalanceTotal;
});