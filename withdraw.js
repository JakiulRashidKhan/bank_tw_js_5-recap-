document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString =withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);

    withdrawField.value ='';

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdarawTotalString =withdrawTotal.innerText;
    const previousWithdarawTotal =parseFloat(previousWithdarawTotalString);

    const currentWithdrawAmount = previousWithdarawTotal +newWithdrawAmount;
    withdrawTotal.innerText = currentWithdrawAmount;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal-newWithdrawAmount; 
    balanceTotal.innerText = currentBalanceTotal;

})