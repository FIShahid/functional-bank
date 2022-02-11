/* 
function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText =  depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    depositInput.value = '';
    return depositAmount;

}



document.getElementById('deposit-button').addEventListener('click',function(){
 
    const depositAmount = getInputValue();

    
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

   


});
// Withdraw Button Handle

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    const withdrawTotal =document.getElementById('withdraw-total');
    const PreviousWithdrawTotalText = withdrawTotal.innerText;
    const PreviousWithdrawToal = parseFloat(PreviousWithdrawTotalText);

    withdrawTotal.innerText = PreviousWithdrawToal + withdrawAmount;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;


    withdrawInput.value = '';
    
}); */